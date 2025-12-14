# CodeTypingPractice Anki Note Type

An advanced Anki note type designed for practicing code typing and memorization through active recall. Features two card types: a simple code display card and an interactive typing practice card with syntax highlighting and code comparison.

## Features

- **Two card types**:
  - **Card 1**: Simple code display with syntax highlighting
  - **Card 2_TYPE**: Interactive typing practice with live code editor
- **Syntax highlighting** - Powered by Prism.js with support for multiple programming languages
- **Ace Editor integration** - Full-featured code editor in Card 2_TYPE with:
  - Syntax highlighting
  - Auto-indentation
  - Bracket matching
  - Rainbow braces
  - Real-time code comparison
- **Visual feedback** - Color-coded diff highlighting to show differences between your code and the solution
- **Dark/Light mode** - Automatic theme switching based on system preferences
- **Collapsible sections** - Accordion-style hints and further descriptions
- **Language-specific formatting** - Supports any programming language via the Language field
- **VS Code theme** - Optional VS Code dark theme styling

## Fields

- **Description** - The problem statement or exercise description
- **Language** - The programming language (e.g., "python", "javascript", "java", etc.)
- **Code** - The solution code to be memorized
- **Hint** - Optional field for code hints (displayed in collapsible section)
- **Further Description** - Optional field for additional context or expected output
- **Subdeck** - Optional field for organizing cards by subcategory
- **Source** - Optional field for source links (currently commented out in templates)

## Card Templates

- **Card 1** - Simple card showing the code with syntax highlighting. Front shows the code (initially hidden), back shows the solution.
- **Card 2_TYPE** - Interactive typing practice card with:
  - Problem description
  - Collapsible hint/further description sections
  - Live code editor for typing your solution
  - Real-time diff comparison with the correct answer
  - Visual feedback on correctness

## Usage

1. Enter the problem description in the **Description** field
2. Specify the programming language in the **Language** field (e.g., "python", "javascript")
3. Add the solution code in the **Code** field
4. Optionally add hints in the **Hint** field
5. Optionally add expected output or further context in the **Further Description** field
6. Optionally specify a subdeck in the **Subdeck** field

**Card 1** is ideal for quick code review, while **Card 2_TYPE** provides hands-on typing practice with immediate feedback. Perfect for learning programming syntax, algorithms, and code patterns through active recall.

