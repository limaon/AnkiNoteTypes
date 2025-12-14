# Cloze++ Anki Note Type

An enhanced cloze deletion note type with modern styling and additional features for creating fill-in-the-blank flashcards.

## Features

- **Cloze deletion support** - Create multiple cloze deletions in a single text field
- **Editable cloze fields** - Edit cloze deletions directly on the card
- **Clean, modern design** with customizable CSS variables
- **Light and dark mode** support
- **Image zoom** functionality - click images to enlarge
- **Text-to-speech (TTS)** support for Android
- **MathJax** integration for mathematical notation
- **Smart footer links** - automatically generates search links using the Keywords field
- **Hierarchical tags** display with improved styling
- **Random color scheme** for bold text elements

## Fields

- **Text** - The main text field with cloze deletions (use `{{c1::text}}`, `{{c2::text}}`, etc.)
- **Back Extra** - Optional field for additional information shown on the back of the card
- **Imagen** - Optional image field
- **Keywords** - Optional keywords used for generating search links in the footer

## Card Templates

- **Card 1** - Standard cloze deletion card with all features

## Usage

1. Enter your text in the **Text** field
2. Create cloze deletions using the format `{{c1::hidden text}}`, `{{c2::another hidden text}}`, etc.
3. Optionally add extra information in the **Back Extra** field
4. Optionally add images in the **Imagen** field
5. Optionally add keywords in the **Keywords** field for quick search links

The template automatically creates separate cards for each cloze deletion, allowing you to practice recalling specific parts of the text.

