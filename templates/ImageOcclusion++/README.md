# ImageOcclusion++ Anki Note Type

An enhanced image occlusion note type with modern styling and additional features for creating flashcards from images with hidden regions.

## Features

- **Image occlusion support** - Hide specific regions of images to test recognition and recall
- **Canvas-based occlusion** - Uses HTML5 canvas for precise image masking
- **Clean, modern design** with customizable CSS variables
- **Light and dark mode** support
- **Hierarchical tags** display with improved styling
- **Smart footer links** - automatically generates search links using the Back Extra field
- **Header support** - Optional header field for additional context
- **Comments field** - Optional field for notes and explanations on the back of the card

## Fields

- **Image** - The main image field containing the image to be occluded
- **Occlusion** - The cloze deletion field for image occlusion (use Anki's image occlusion editor)
- **Header** - Optional header field displayed above the image
- **Comments** - Optional field for additional notes shown on the back of the card
- **Back Extra** - Optional field used for generating search links in the footer

## Card Templates

- **Card 1** - Standard image occlusion card with all features

## Usage

1. Add your image to the **Image** field
2. Use Anki's built-in image occlusion editor to create masked regions in the **Occlusion** field
3. Optionally add a header in the **Header** field
4. Optionally add comments in the **Comments** field for additional context
5. Optionally add keywords in the **Back Extra** field to generate search links in the footer

The template automatically handles the occlusion display and creates cards for each masked region. Perfect for studying anatomy, geography, diagrams, or any visual content where you need to identify specific parts.

