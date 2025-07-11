// Script to scan cabinet files for TODOs and update todo.md
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Configuration
const cabinetDir = path.join(__dirname, "../binkey-data");
const todoFile = path.join(__dirname, "../binkey-data/todo.md");

// Function to extract TODOs from cabinet files
function extractTodos() {
  const todos = [];

  // Get all cabinet files
  const cabinetFiles = fs
    .readdirSync(cabinetDir)
    .filter(
      (file) => file.startsWith("am-cabinet-") || file.startsWith("cabinet-")
    );

  // Process each cabinet file
  cabinetFiles.forEach((file) => {
    const cabinetPath = path.join(cabinetDir, file);
    const content = fs.readFileSync(cabinetPath, "utf8");
    const cabinetNumber = file.match(/cabinet-(\d+)/i)?.[1];

    if (!cabinetNumber) return;

    // Find bin sections with TODO
    const binRegex = /## Bin (\d+)[\s\S]*?(?=## Bin|\Z)/g;
    let match;

    while ((match = binRegex.exec(content)) !== null) {
      const binSection = match[0];
      const binNumber = match[1];

      if (binSection.includes("TODO") || binSection.includes("todo")) {
        // Extract description
        const descriptionMatch = binSection.match(/- (.+)/);
        const description = descriptionMatch
          ? descriptionMatch[1]
          : "Need to organize";

        todos.push({
          cabinet: cabinetNumber,
          bin: binNumber,
          description: description,
        });
      }
    }
  });

  return todos;
}

// Function to update todo.md
function updateTodoFile(todos) {
  // Read existing todo file
  let todoContent = "";
  if (fs.existsSync(todoFile)) {
    todoContent = fs.readFileSync(todoFile, "utf8");
  } else {
    // Create basic structure if file doesn't exist
    todoContent = `---
type: todo-list
title: Inventory System TODOs
description: Tasks related to organizing and maintaining the electronics inventory
tags: [todo, inventory, organization]
---

# Inventory System TODOs #todo

This file tracks bins and components that need attention, organization, or other actions.

## Cabinet Organization

<!-- Add cabinet organization todos here -->

## Component Documentation

<!-- Component documentation todos will be listed here -->

## Inventory Updates

<!-- Inventory update todos will be listed here -->

## Completed Tasks

<!-- Move completed tasks here with [x] checkboxes -->
`;
  }

  // Extract existing todos to avoid duplicates
  const existingTodos = [];
  const todoRegex = /- \[([ x])\] Cabinet (\d+) Bin (\d+) - (.*?)(?:#|$)/g;
  let todoMatch;

  while ((todoMatch = todoRegex.exec(todoContent)) !== null) {
    existingTodos.push({
      completed: todoMatch[1] === "x",
      cabinet: todoMatch[2],
      bin: todoMatch[3],
      description: todoMatch[4].trim(),
    });
  }

  // Generate new todo entries
  const newTodos = todos.filter((todo) => {
    return !existingTodos.some(
      (existing) =>
        existing.cabinet === todo.cabinet && existing.bin === todo.bin
    );
  });

  // Add new todos to the Cabinet Organization section
  if (newTodos.length > 0) {
    const cabinetSectionMatch = todoContent.match(
      /## Cabinet Organization\s+([^\#]*)/
    );
    if (cabinetSectionMatch) {
      let cabinetSection = cabinetSectionMatch[1];

      newTodos.forEach((todo) => {
        cabinetSection += `- [ ] Cabinet ${todo.cabinet} Bin ${todo.bin} - ${todo.description} #todo #cabinet-${todo.cabinet} #bin-${todo.bin}\n`;
      });

      todoContent = todoContent.replace(
        /## Cabinet Organization\s+([^\#]*)/,
        `## Cabinet Organization\n\n${cabinetSection}`
      );
    }
  }

  // Write updated content back to file
  fs.writeFileSync(todoFile, todoContent);
  console.log(`Updated ${todoFile} with ${newTodos.length} new TODOs`);
}

// Main execution
const todos = extractTodos();
updateTodoFile(todos);
