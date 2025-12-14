# CertoErradoQuestao (True/False Question) Anki Note Type

A specialized Anki note type designed for true/false (Certo/Errado) question practice, commonly used for exam preparation in Portuguese-speaking countries.

## Features

- **Interactive answer selection** - Choose between "Certo" (True) or "Errado" (False) before revealing the answer
- **Visual feedback system** - Automatic color coding:
  - Green for correct answers
  - Red for incorrect user selections
  - Visual indication of whether you got it right or wrong
- **Answer validation** - Compares your selection with the correct answer stored in the Gabarito field
- **Clean, modern design** with customizable CSS variables
- **Light and dark mode** support
- **Image zoom** functionality - click images to enlarge
- **Text-to-speech (TTS)** support for Android
- **MathJax** integration for mathematical notation
- **Smart footer links** - automatically generates search links using the question text
- **Hierarchical tags** display with improved styling
- **Collapsible sections** for images and notes

## Fields

- **EnunciadoQuestao** - The question statement (editable)
- **Imagem** - Optional image field (displayed in a collapsible section)
- **Anotacoes** - Optional notes field (displayed in a collapsible section)
- **Gabarito** - The correct answer: "Certo" (True/C) or "Errado" (False/E)

## Card Templates

- **Card 1** - Front shows the question with radio buttons for selection; Back shows the answer with visual feedback

## Usage

1. Enter your question in the **EnunciadoQuestao** field
2. Optionally add an image in the **Imagem** field
3. Optionally add notes in the **Anotacoes** field
4. Set the correct answer in the **Gabarito** field as "Certo" or "Errado" (or "C" or "E")
5. When reviewing, select your answer before revealing the solution
6. The back of the card will show whether you were correct with color-coded feedback

Perfect for studying exam questions, especially for Brazilian public service exams (concursos públicos).

