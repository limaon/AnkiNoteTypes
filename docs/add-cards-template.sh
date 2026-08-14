#!/usr/bin/env bash

# Comprehensive examples for adding cards to Anki via AnkiConnect API
# This script demonstrates how to add cards for each template type
#
# Usage: ./add-cards-template.sh
#
# Requirements:
# - Anki must be running with AnkiConnect plugin installed
# - curl must be installed
# - jq must be installed (for JSON processing)

# ============================================================================
# 1. BASIC++ TEMPLATE
# Fields: Front, Imagen, Back, Keywords
# Description: Simple question-answer card with optional image and keywords
# Example: Calculo Diferencial e Integral
# Note: MathJax notation uses \(\) and must be escaped in JSON
# ============================================================================

echo "Adding Basic++ card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "1.Basic++",
      "fields": {
        "Front": "Qual eh a derivada de \\(f(x) = x^3 + 2x^2 - 5x + 7\\)?",
        "Imagen": "",
        "Back": "<p>\\(f'"'"'(x) = 3x^2 + 4x - 5\\)</p><p>Aplicando a regra da potencia:</p><ul><li>\\(\\frac{d}{dx}(x^3) = 3x^2\\)</li><li>\\(\\frac{d}{dx}(2x^2) = 4x\\)</li><li>\\(\\frac{d}{dx}(-5x) = -5\\)</li><li>\\(\\frac{d}{dx}(7) = 0\\)</li></ul>",
        "Keywords": "calculo, derivada, regra da potencia, funcoes polinomiais"
      },
      "tags": [
        "Matematica::CalculoDiferencial",
        "Matematica::CalculoDiferencial::Derivadas"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 2. CLOZE++ TEMPLATE
# Fields: Text, Imagen, Back Extra, Keywords
# Description: Cloze deletion card (fill-in-the-blank) with optional image
# Syntax: {{c1::answer}} for cloze deletions
# ============================================================================

echo "Adding Cloze++ card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "2.Cloze++",
      "fields": {
        "Text": "<p>The process by which plants convert light energy into chemical energy is called {{c1::photosynthesis}}.</p>",
        "Imagen": "",
        "Back Extra": "<p>This process occurs primarily in the <strong>chloroplasts</strong> of plant cells and is essential for life on Earth.</p><p>Key points:</p><ul><li>Occurs in chloroplasts</li><li>Requires sunlight</li><li>Produces glucose and oxygen</li></ul>",
        "Keywords": "biology, plants, energy"
      },
      "tags": [
        "Biology::Botany",
        "Biology::Botany::Photosynthesis"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 3. CODE TYPING PRACTICE TEMPLATE
# Fields: Description, Hint, Code, Language, Further Description, Source
# Description: Code snippet card with typing practice (Card 2_TYPE)
# ============================================================================

echo "Adding CodeTypingPractice card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "6.CodeTypingPractice",
      "fields": {
        "Description": "<p>Write a function that reverses a string in Python</p>",
        "Hint": "<p><code>Use string slicing with [::-1]</code></p>",
        "Code": "def reverse_string(s):\n    return s[::-1]",
        "Language": "python",
        "Further Description": "<p>This is the most <strong>Pythonic</strong> way to reverse a string.</p><p>Alternative methods:</p><ul><li>Using <code>reversed()</code></li><li>Using a loop</li><li>Using recursion</li></ul>",
        "Source": "Python Best Practices"
      },
      "tags": [
        "Programming::Python",
        "Programming::Python::Strings"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 4. IMAGE OCCLUSION++ TEMPLATE
# Fields: Image, Occlusion, Header, Comments, Back Extra
# Description: Image with occluded regions for visual learning
# Note: Image field should contain image filename or base64 data
# ============================================================================

echo "Adding ImageOcclusion++ card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "3.ImageOcclusion++",
      "fields": {
        "Image": "anatomy_heart.jpg",
        "Occlusion": "[[0,0,100,100]]",
        "Header": "<h2>Heart Anatomy</h2>",
        "Comments": "<p>Identify the <strong>left ventricle</strong></p>",
        "Back Extra": "<p>The <strong>left ventricle</strong> is the largest and most muscular chamber of the heart.</p><p><em>Function:</em> Responsible for pumping oxygenated blood to the body.</p><p><em>Characteristics:</em></p><ul><li>Thickest wall of all chambers</li><li>Most powerful pump</li><li>Systemic circulation</li></ul>"
      },
      "tags": [
        "Medicine::Anatomy",
        "Medicine::Anatomy::Cardiovascular"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 5. CERTO ERRADO QUESTAO (TRUE/FALSE QUESTION) TEMPLATE
# Fields: EnunciadoQuestao, Imagem, Anotacoes, Gabarito
# Description: Portuguese true/false question card
# ============================================================================

echo "Adding CertoErradoQuestao card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "5.CertoErradoQuestao",
      "fields": {
        "EnunciadoQuestao": "<p>A fotossintese eh o processo pelo qual as plantas convertem energia luminosa em energia quimica.</p>",
        "Imagem": "",
        "Anotacoes": "<p>Este eh um conceito <strong>fundamental</strong> em biologia.</p><p>A fotossintese ocorre principalmente nos <strong>cloroplastos</strong> das celulas vegetais.</p><p><em>Equacao geral:</em></p><p>6CO<sub>2</sub> + 6H<sub>2</sub>O + luz → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></p>",
        "Gabarito": "Certo"
      },
      "tags": [
        "Biologia::Botanica",
        "Biologia::Botanica::Fotossintese"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 6. MULTIPLA ESCOLHA QUESTAO (MULTIPLE CHOICE) TEMPLATE
# Fields: EnunciadoQuestao, Imagem, Alternativa-A, Alternativa-B,
#         Alternativa-C, Alternativa-D, Alternativa-E, Gabarito, Anotacoes
# Description: Portuguese multiple choice question card
# ============================================================================

echo "Adding MultiplaEscolhaQuestao card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "4.MultiplaEscolhaQuestao",
      "fields": {
        "EnunciadoQuestao": "<p>Qual eh o processo pelo qual as plantas convertem luz em energia quimica?</p>",
        "Imagem": "",
        "Alternativa-A": "Respiracao celular",
        "Alternativa-B": "Fotossintese",
        "Alternativa-C": "Fermentacao",
        "Alternativa-D": "Quimiossintese",
        "Alternativa-E": "Decomposicao",
        "Gabarito": "B",
        "Anotacoes": "A fotossintese eh o processo correto. A respiracao celular eh o oposto, liberando energia. Fermentacao eh um processo anaerobico."
      },
      "tags": [
        "Biologia::Botanica",
        "Biologia::Botanica::Fotossintese"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

# ============================================================================
# 7. ONE LINE TYPE ANSWER TEMPLATE
# Fields: Question, Answer, TypeHint, Keywords
# Description: Short answer card with typing practice and hint
# Example: GNU/Linux command
# ============================================================================

echo "Adding OneLineTypeAnswer card..."
jq -n '{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "5.AllKnolegdeDatabase",
      "modelName": "7.OneLineTypeAnswer",
      "fields": {
        "Question": "<p>Comando para restaurar backup de particao com <code>dd</code>.</p>",
        "Answer": "sudo dd if=backup-sda1.img of=/dev/sda1 bs=4M status=progress",
        "TypeHint": "sudo dd if=backup...",
        "Keywords": "dd, rescue, backup, partition, GNU/Linux"
      },
      "tags": [
        "AllMyITKnowledge::GNU/Linux",
        "AllMyITKnowledge::GNU/Linux::DD"
      ]
    }
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-

echo "All cards added successfully!"
