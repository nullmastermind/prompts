# @dccxx/augment

A CLI tool to fetch and manage Augment guidelines for your projects.

## Installation

You can run this tool directly using npx without installing it globally:

```bash
npx @dccxx/augment
```

Or install it globally:

```bash
npm install -g @dccxx/augment
```

## Usage

After installation, you can run the tool using:

```bash
augment
```

Or with npx:

```bash
npx @dccxx/augment
```

## What it does

This tool fetches the latest Augment guidelines from the official repository and saves them to a `.augment-guidelines` file in your current working directory. 

- If the file doesn't exist, it creates a new one with the guidelines
- If the file exists, it prepends the latest guidelines while preserving your existing content
- If the guidelines are already present, it skips the update to avoid duplicates

## Requirements

- Node.js 14 or higher

## License

MIT
