# OneLineTypeAnswer Anki Note Type

A specialized Anki note type designed for one-line answer practice with typing functionality. Perfect for memorizing short answers, commands, formulas, or any single-line responses.

## Features

- **Type-to-answer functionality** - Type your answer directly in a terminal-style input field
- **Terminal-style interface** - Displays a concise shell-style prompt beside the answer field
- **Hint support** - Optional expandable hints with a themed button and keyboard support
- **Clean, modern design** with customizable CSS variables
- **Light and dark mode** support
- **Text-to-speech (TTS)** support for Android
- **MathJax** integration for mathematical notation
- **Syntax highlighting** - Powered by highlight.js for code snippets in hints
- **Smart footer links** - automatically generates search links using the Keywords field
- **Hierarchical tags** display with improved styling

## Fields

- **Question** - The question or prompt (editable)
- **Answer** - The correct answer that you need to type
- **TypeHint** - Optional hint field, revealed with “Show hint” and collapsed with “Hide hint”. Text uses the regular font; wrap code in `<code>` or `<pre><code>` for monospace formatting.
- **Keywords** - Optional keywords used for generating search links in the footer

## Card Templates

- **Card 1** - Front shows the question with optional hint; back shows a terminal-style input field for typing your answer

## Usage

1. Enter your question in the **Question** field
2. Enter the correct answer in the **Answer** field
3. Optionally add a hint in the **TypeHint** field (initially collapsed; click “Show hint” to reveal it)
4. Optionally add keywords in the **Keywords** field to generate search links in the footer
5. When reviewing, type your answer in the terminal-style input field

Perfect for practicing:

- Command-line commands
- Short formulas or equations
- Definitions or key terms
- Programming syntax
- Any single-line answers that benefit from active typing practice
