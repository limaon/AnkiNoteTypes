# MultiplaEscolhaQuestao (Multiple Choice Question) Anki Note Type

A specialized Anki note type designed for multiple choice question practice, commonly used for exam preparation in Portuguese-speaking countries.

## Features

- **Interactive answer selection** - Choose between options A, B, C, D, or E before revealing the answer
- **Visual feedback system** - Automatic color coding:
  - Green for correct answers
  - Red for incorrect user selections
  - Visual indication of whether you got it right or wrong
- **Answer validation** - Compares your selection with the correct answer stored in the Gabarito field
- **Flexible alternatives** - Supports up to 5 alternatives (A through E), all optional
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
- **Alternativa-A** - Optional field for alternative A
- **Alternativa-B** - Optional field for alternative B
- **Alternativa-C** - Optional field for alternative C
- **Alternativa-D** - Optional field for alternative D
- **Alternativa-E** - Optional field for alternative E
- **Anotacoes** - Optional notes field (displayed in a collapsible section)
- **Gabarito** - The correct answer: A, B, C, D, or E (can be the letter or the full alternative text)

## Card Templates

- **Card 1** - Front shows the question with radio buttons for selection; Back shows the answer with visual feedback

## Usage

1. Enter your question in the **EnunciadoQuestao** field
2. Optionally add an image in the **Imagem** field
3. Add your alternatives in the **Alternativa-A** through **Alternativa-E** fields (only fill the ones you need)
4. Optionally add notes in the **Anotacoes** field
5. Set the correct answer in the **Gabarito** field as "A", "B", "C", "D", or "E" (or the full alternative text)
6. When reviewing, select your answer before revealing the solution
7. The back of the card will show whether you were correct with color-coded feedback

Perfect for studying exam questions, especially for Brazilian public service exams (concursos públicos) and standardized tests.

