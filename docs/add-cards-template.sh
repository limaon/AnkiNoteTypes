#!/usr/bin/env bash

# Template script for adding cards to Anki via AnkiConnect API
# Usage: ./add-cards-template.sh
#
# This script demonstrates how to add multiple cards to Anki using the
# AnkiConnect API. Modify the fields and tags according to your needs.
#
# Requirements:
# - Anki must be running with AnkiConnect plugin installed
# - curl must be installed
# - jq must be installed (for JSON processing)

jq -n '{
  "action": "multi",
  "version": 6,
  "params": {
    "actions": [
      {
        "action": "addNote",
        "params": {
          "note": {
            "deckName": "5.AllKnolegdeDatabase",
            "modelName": "1.Basic++",
            "fields": {
              "Front": "What is the capital of France?",
              "Imagen": "",
              "Back": "Paris",
              "Keywords": "geography, capitals, Europe"
            },
            "tags": [
              "Geography::Europe",
              "Geography::Europe::France"
            ]
          }
        }
      },
      {
        "action": "addNote",
        "params": {
          "note": {
            "deckName": "5.AllKnolegdeDatabase",
            "modelName": "2.Cloze++",
            "fields": {
              "Text": "The capital of France is {{c1::Paris}}",
              "Imagen": "",
              "Back Extra": "Paris is located in the north-central part of France",
              "Keywords": "geography, capitals, Europe"
            },
            "tags": [
              "Geography::Europe",
              "Geography::Europe::France"
            ]
          }
        }
      },
      {
        "action": "addNote",
        "params": {
          "note": {
            "deckName": "5.AllKnolegdeDatabase",
            "modelName": "7.OneLineTypeAnswer",
            "fields": {
              "Question": "What is the default port for SSH?",
              "TypeHint": "port number",
              "Answer": "22",
              "Keywords": "SSH, networking, ports"
            },
            "tags": [
              "IT::Networking",
              "IT::Networking::SSH"
            ]
          }
        }
      }
    ]
  }
}' | curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d @-
