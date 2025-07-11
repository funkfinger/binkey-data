#!/usr/bin/env node

/**
 * Sync Content Script for binkey-data Electronics Inventory
 *
 * This script creates a content directory with symlinks to the main content,
 * since we're now in a consolidated repository structure.
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync, rmSync, symlinkSync, readlinkSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  sourceContent: "..", // Parent directory (binkey-data root)
  targetContent: "./content",
  includePatterns: ["*.md", "parts/", "attachments/"],
  excludePatterns: [
    ".obsidian",
    "ai-prompts",
    "ai-memory",
    "private",
    "templates",
    "web",
    "docs",
    "scripts",
    ".DS_Store",
    "Thumbs.db",
    ".git",
    "node_modules",
  ],
};

/**
 * Logger utility
 */
class Logger {
  static info(message) {
    console.log(`ℹ️  ${message}`);
  }

  static success(message) {
    console.log(`✅ ${message}`);
  }

  static warning(message) {
    console.log(`⚠️  ${message}`);
  }

  static error(message) {
    console.log(`❌ ${message}`);
  }

  static step(step, total, message) {
    console.log(`[${step}/${total}] ${message}`);
  }
}

/**
 * Check if source content exists
 */
function checkSourceContent() {
  Logger.step(1, 4, "Checking source content...");

  if (!existsSync(CONFIG.sourceContent)) {
    Logger.error(
      `Source content directory not found at: ${CONFIG.sourceContent}`
    );
    Logger.info("Make sure you are running this from the web/ directory");
    process.exit(1);
  }

  // Check for key content files
  const keyFiles = ["akro-mills.md", "parts/index.md"];
  for (const file of keyFiles) {
    const filePath = join(CONFIG.sourceContent, file);
    if (!existsSync(filePath)) {
      Logger.warning(`Key file not found: ${file}`);
    }
  }

  Logger.success("Source content found");
}

/**
 * Clean target content directory
 */
function cleanTargetContent() {
  Logger.step(2, 5, "Cleaning target content directory...");

  if (existsSync(CONFIG.targetContent)) {
    // Remove all content except .gitkeep
    try {
      const items = execSync(`ls -A ${CONFIG.targetContent}`, {
        encoding: "utf8",
      })
        .trim()
        .split("\n")
        .filter((item) => item && item !== ".gitkeep");

      for (const item of items) {
        const itemPath = join(CONFIG.targetContent, item);
        rmSync(itemPath, { recursive: true, force: true });
      }

      Logger.success("Target content directory cleaned");
    } catch (error) {
      Logger.warning("Target content directory was already empty");
    }
  } else {
    mkdirSync(CONFIG.targetContent, { recursive: true });
    Logger.success("Target content directory created");
  }
}

/**
 * Create content symlinks
 */
function createContentLinks() {
  Logger.step(3, 4, "Creating content symlinks...");

  try {
    // Get list of files and directories to link
    const sourceFiles = execSync(
      `find ${CONFIG.sourceContent} -maxdepth 1 -name "*.md" -type f`,
      { encoding: "utf8" }
    )
      .trim()
      .split("\n")
      .filter((file) => file && file.trim() !== "");

    const sourceDirs = ["parts", "attachments"].filter((dir) =>
      existsSync(join(CONFIG.sourceContent, dir))
    );

    Logger.info(`Found ${sourceFiles.length} markdown files to link`);
    Logger.info(
      `Found ${sourceDirs.length} directories to link: ${sourceDirs.join(", ")}`
    );

    // Create symlinks for markdown files
    for (const sourceFile of sourceFiles) {
      const fileName = sourceFile.split("/").pop();

      // Skip excluded files
      if (
        CONFIG.excludePatterns.some((pattern) => fileName.includes(pattern))
      ) {
        continue;
      }

      const targetFile = join(CONFIG.targetContent, fileName);
      const relativePath = resolve(sourceFile);

      try {
        symlinkSync(relativePath, targetFile);
        Logger.info(`Linked: ${fileName}`);
      } catch (error) {
        if (error.code !== "EEXIST") {
          Logger.warning(`Failed to link ${fileName}: ${error.message}`);
        }
      }
    }

    // Create symlinks for directories
    for (const dir of sourceDirs) {
      const sourceDir = join(CONFIG.sourceContent, dir);
      const targetDir = join(CONFIG.targetContent, dir);
      const relativePath = resolve(sourceDir);

      try {
        symlinkSync(relativePath, targetDir);
        Logger.info(`Linked directory: ${dir}`);
      } catch (error) {
        if (error.code !== "EEXIST") {
          Logger.warning(`Failed to link directory ${dir}: ${error.message}`);
        }
      }
    }

    Logger.success("Content symlinks created successfully");
  } catch (error) {
    Logger.error(`Failed to create content symlinks: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Verify copied content
 */
function verifyContent() {
  Logger.step(4, 5, "Verifying copied content...");

  try {
    // Check for key files
    const keyFiles = [
      "index.md",
      "akro-mills.md",
      "am-cabinet-1.md",
      "am-cabinet-2.md",
      "am-cabinet-3.md",
      "parts/index.md",
    ];

    let foundFiles = 0;
    for (const file of keyFiles) {
      const filePath = join(CONFIG.targetContent, file);
      if (existsSync(filePath)) {
        foundFiles++;
      } else {
        Logger.warning(`Key file not found: ${file}`);
      }
    }

    Logger.info(`Found ${foundFiles}/${keyFiles.length} key files`);

    // Count total files
    const totalFiles = execSync(
      `find ${CONFIG.targetContent} -type f -name "*.md" | wc -l`,
      { encoding: "utf8" }
    ).trim();
    Logger.info(`Total markdown files: ${totalFiles}`);

    // Check for attachments
    const attachmentsPath = join(CONFIG.targetContent, "attachments");
    if (existsSync(attachmentsPath)) {
      const attachmentCount = execSync(
        `find ${attachmentsPath} -type f | wc -l`,
        { encoding: "utf8" }
      ).trim();
      Logger.info(`Attachment files: ${attachmentCount}`);
    }

    Logger.success("Content verification completed");
  } catch (error) {
    Logger.warning(`Content verification had issues: ${error.message}`);
  }
}

/**
 * Verify content links
 */
function verifyContentLinks() {
  Logger.step(4, 4, "Verifying content links...");

  try {
    // Check for key files
    const keyFiles = [
      "akro-mills.md",
      "am-cabinet-1.md",
      "am-cabinet-2.md",
      "am-cabinet-3.md",
    ];

    let foundFiles = 0;
    for (const file of keyFiles) {
      const filePath = join(CONFIG.targetContent, file);
      if (existsSync(filePath)) {
        foundFiles++;
        // Check if it's a valid symlink
        try {
          readlinkSync(filePath);
          Logger.info(`✓ ${file} (symlinked)`);
        } catch (e) {
          Logger.info(`✓ ${file} (regular file)`);
        }
      } else {
        Logger.warning(`Key file not found: ${file}`);
      }
    }

    Logger.info(`Found ${foundFiles}/${keyFiles.length} key files`);

    // Check directories
    const keyDirs = ["parts", "attachments"];
    for (const dir of keyDirs) {
      const dirPath = join(CONFIG.targetContent, dir);
      if (existsSync(dirPath)) {
        Logger.info(`✓ ${dir}/ directory linked`);
      } else {
        Logger.warning(`Directory not found: ${dir}/`);
      }
    }

    Logger.success("Content verification completed");
  } catch (error) {
    Logger.warning(`Content verification had issues: ${error.message}`);
  }
}

/**
 * Main sync function
 */
function main() {
  console.log(
    "🔄 Starting content synchronization for consolidated binkey-data...\n"
  );

  try {
    checkSourceContent();
    cleanTargetContent();
    createContentLinks();
    verifyContentLinks();

    console.log("\n🎉 Content synchronization completed successfully!");
    console.log("📝 Content is now linked from the main repository");
    console.log("📝 Next steps:");
    console.log('   - Run "npm run build" to build the site');
    console.log('   - Run "npm run serve" to start the local server');
    console.log('   - Or run "npm run dev" to do both automatically');
  } catch (error) {
    Logger.error(`Synchronization failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
