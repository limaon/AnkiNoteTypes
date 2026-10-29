# CodingPractice

Language-independent programming exercises for Anki. One note represents one problem in one language. The front contains a problem, public examples, hints, and an editor; the back contains your typed answer, a suggested solution, and reasoning. Messages are in English; the ChatGPT explanation prompt is Portuguese.

## Current scope

This version does not execute code or grade answers. **Test Solution** is disabled and explicitly reports that an executor has not been configured. `Test Cases` is reserved for a future executor; it is not currently parsed or used for judging. Syntax highlighting support does not imply execution support.

## Installation

1. Create an Anki note type named `CodingPractice`, with the fields in `template.json`, in that order. Keep one card type named `Card 1`.
2. Paste `Card_1/Front.html` and `Card_1/Back.html` into its templates and `Style.css` into Styling. The JSON file is repository metadata, not an Anki importable deck.
3. Copy `media/_theme-vscode.js` and `media/_JetBrains.ttf` from the repository into your profile's `collection.media` folder. 4. Ace 1.43.3 and its language modes load from CDN. Without these resources, a plain textarea/code block remains available. Offline syntax highlighting is not bundled in this first version.

## Fields

| Field         | Format / purpose                                    |
| ------------- | --------------------------------------------------- |
| Title         | Problem title                                       |
| Description   | Statement and requirements; HTML allowed            |
| Language      | e.g. `python`, `javascript`, `cpp`, `java`          |
| Input Format  | Optional description of standard input              |
| Output Format | Optional description of required standard output    |
| Constraints   | Optional bounds and special conditions              |
| Examples      | Optional JSON array of public examples, shown below |
| Hint          | Optional hint, collapsed initially                  |
| Starter Code  | Optional starter program                            |
| Test Cases    | Reserved JSON array, using the format below         |
| Solution      | Suggested solution in the selected language         |
| Explanation   | Reasoning, edge cases, complexity; HTML allowed     |
| Source        | Optional attribution or HTML link                   |

Use plain code in Starter Code and Solution. When editing raw HTML, escape `<` as `&lt;`, `>` as `&gt;`, and `&` as `&amp;`. Literal newlines and common Anki `<br>`/`<div>` line breaks are supported. Do not paste unescaped code as HTML.

### Examples

Use a JSON array with string `input` and `output` properties. JSON `\n` denotes a newline inside a string. For a problem that sums two integers:

```json
[
  { "input": "2 3\n", "output": "5\n" },
  { "input": "-4 4\n", "output": "0\n" }
]
```

### Test Cases (reserved)

```json
[
  { "input": "2 3\n", "expected": "5\n" },
  { "input": "0 0\n", "expected": "0\n" },
  { "input": "-10 7\n", "expected": "-3\n" }
]
```

Whitespace comparison rules, execution limits, and runtime selection will be defined with the executor. These cases are stored on the note, not secret tests.

## Review behavior

- Drafts are saved immediately to sessionStorage during editing and checked against title, description, and language on the back. They are transient, local to the review session, and not synced or written to Anki fields.
- A new front clears the previous draft and loads Starter Code. Revealing the back without typing is supported, including for reading-only mobile review.
- The back does not compare your source code against the suggested solution. Evaluate the reasoning manually until an executor is integrated.
- Unknown languages use plain text highlighting. JavaScript availability and front/back storage behavior must be checked in each Anki client you use.
- The ChatGPT link includes the statement and suggested solution in its URL and requests a temporary chat. Long exercises may exceed practical URL limits.
