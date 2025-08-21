#!/usr/bin/env node

import { writeFile, readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

async function fetchAndSaveGuidelines() {
  try {
    const url =
      "https://raw.githubusercontent.com/nullmastermind/prompts/refs/heads/master/common.augment-guidelines";

    console.log("Fetching guidelines from:", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const githubContent = await response.text();
    const filePath = join(process.cwd(), ".augment-guidelines");

    // Check if file exists and read its content
    let existingContent = "";
    if (existsSync(filePath)) {
      existingContent = await readFile(filePath, "utf8");

      // Check if GitHub content is already present
      if (existingContent.includes(githubContent.trim())) {
        console.log(
          "GitHub guidelines already present in .augment-guidelines, skipping...",
        );
        return;
      }
    }

    // Prepend GitHub content to existing content
    const newContent = existingContent
      ? `${githubContent}\n\n${existingContent}`
      : githubContent;

    console.log("Adding guidelines to:", filePath);
    await writeFile(filePath, newContent, "utf8");

    console.log("Guidelines successfully added!");
  } catch (error) {
    console.error("Error fetching or saving guidelines:", error);
    process.exit(1);
  }
}

// Run the function
void fetchAndSaveGuidelines();
