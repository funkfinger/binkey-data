# AI Memory Context for binkey-data Project

This file contains the AI assistant's memory context for the binkey-data project. This allows for continuity when working on the project across different computers or sessions.

## Project Structure and Data Organization

- User prefers individual component entries to be stored as separate files in a parts folder rather than as bullet points within cabinet files.
- User prefers to name their binkey-data project repository as 'binkey-data' when checking it into GitHub.
- User wants to ensure their binkey-data project follows Foam best practices and is interested in proper implementation of the Foam knowledge management tool.
- User prefers to add frontmatter to project-specific files but wants to exclude/ignore the foam documentation files when making structural changes.
- User prefers to replace default Foam template files with project-specific documentation and create custom README files that accurately describe the actual project purpose.
- User wants Foam templates created for adding new parts to the electronics inventory system.
- User prefers to consolidate duplicate component entries rather than creating separate part files for the same component stored in different bins - update quantity and location fields in single file instead of creating bin-specific duplicates.
- User prefers location frontmatter fields to be arrays and wants cabinet files to be kept synchronized/updated with all existing parts data.
- User prefers cabinet files to show quantities in the format "- [[component-name]] - quantity" for quick reference without opening individual part files.
- The cabinet-1.md file is used to keep track of what electronic components are stored in each bin within Cabinet 1 of the inventory system.
- User prefers to avoid redundant wikilinks when using Foam as they are automatically handled by the Foam system.

## Inventory Workflow

- When adding new electronic components to the binkey-data inventory system from URLs, follow this workflow: 1) Fetch product details from URL, 2) Download product image to attachments directory, 3) Create comprehensive part file with YAML frontmatter using appropriate template, 4) Update cabinet-X.md to add wikilink in appropriate bin section, 5) Update parts/index.md to include component in relevant category section, 6) Update populated_bins count if adding to new bin, 7) Commit changes with descriptive message and push to GitHub.
- When adding new electronic components to the binkey-data inventory system, if the same part already exists in the system, update the existing part file's quantity and location fields rather than creating duplicate part files - consolidate quantities and show multiple bin locations in a single file.
- When adding new electronic components to the binkey-data inventory system, always add quantities to both the individual part file AND the cabinet file in the format "- [[component-name]] - quantity".

## Attachments Directory and VS Code Configuration

- The attachments directory is located at binkey-data/attachments/ at the repository root level.
- User prefers images pasted into documents to automatically go into the attachments directory and is looking for configuration options to enable this behavior.
- User uses VS Code with the Paste Image extension for editing Markdown files.
- User prefers VS Code project settings to be configured in the .vscode folder for the Paste Image extension to automatically save images to the attachments directory.

## File Structure and Directory Organization

- User prefers kebab case (lowercase with hyphens) for all filenames in the binkey-data project including parts, cabinets, and other project files.

## AI Memory Management

- User prefers AI memory context to be saved in an ai-memory folder and wants to review it before git commit for security reasons.
- User wants new memories created with the remember tool to also be automatically added to the ai-memory/memory-context.md file to keep it synchronized.
- User requires strict security measures to ensure absolutely no sensitive or private data gets checked into git, especially in the memory-context.md file.
- Do not remember specific part information or inventory details - that information belongs in the inventory system, not in AI memory.

## Usage Instructions

To use this memory context:

1. When starting work on the binkey-data project on a new computer, provide this file's contents to the AI assistant
2. The AI will use this context to maintain consistency with previous work and preferences
3. Update this file as new preferences or workflows are established

## Security Note

**CRITICAL**: This file is checked into git and must never contain sensitive or private data.

**Prohibited content includes:**

- API keys, tokens, or credentials
- Passwords or authentication information
- Personal identifying information (PII)
- Private URLs or internal system details
- Financial or confidential business information
- Any data that should not be publicly accessible

**Safe content includes:**

- Project structure preferences
- Workflow patterns and processes
- Tool configuration preferences
- General coding patterns and conventions

**Before committing changes to this file, always review the content to ensure no sensitive data has been inadvertently included.**

## TODO System

- User has implemented a TODO system for tracking bins that need organization or attention.
- Bins marked as "TODO" in cabinet files should automatically trigger an entry in the todo.md file.
- The todo.md file uses a checkbox system (- [ ] format) to track incomplete tasks.
- Completed tasks should be moved to a "Completed Tasks" section with checked boxes (- [x] format).
- TODO entries should follow the format "Cabinet X Bin Y - need to organize" or similar descriptive text.
- A template for TODO items is available at `.foam/templates/todo-item.md`.
- The electronic component template includes a status field that can be set to "todo" for components that need attention.
- A script at `scripts/update-todos.js` can be run to automatically scan cabinet files for TODOs and update the todo.md file.

### Foam Tag Implementation

- Custom CSS styles have been added to `.vscode/custom-tag-style.css` for todo-related tags.
- Tags are used to mark todo status: #todo, #pending, #completed
- Priority levels are indicated with tags: #priority-high, #priority-medium, #priority-low
- Location is tagged with: #cabinet-X #bin-Y
- Component status is tagged with: #status-available, #status-todo, #status-pending
- These tags enable Foam's tag-based navigation and filtering.
- The todo.md file and component files include these tags both in frontmatter and as hashtags in the content.
