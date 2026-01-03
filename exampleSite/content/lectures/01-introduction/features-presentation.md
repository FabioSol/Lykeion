---
title: "Supported Features"
date: 2025-12-31
draft: false
type: "presentation"
description: "Comprehensive overview of content features supported in Lykeion presentations"
showTitleSlide: false
defaultSlideKind: "content"
weight: 3
math: true
---

---
# Supported Features

A comprehensive tour of Lykeion's content authoring capabilities

---

## Markdown Support

Full GitHub-flavored markdown support for rich content authoring

Focus on writing, not formatting

---

## Text Formatting

**Bold text** for strong emphasis

*Italic text* for subtle emphasis

~~Strikethrough~~ for corrections

`Inline code` for technical terms

---

## Combined Formatting

You can mix formatting styles:

**_Bold and italic_** for maximum emphasis

**`Bold code`** for highlighted technical terms

*`Italic code`* for subtle technical emphasis

---[title-content]

## Lists
%%%
**Unordered:**
- First item
- Second item
  - Nested item
  - Another nested item
    - Deep nesting
- Third item
%%%
**Ordered:**
1. First step
2. Second step
   1. Nested step
   2. Another nested step
3. Third step

---

## Task Lists

Track progress with checkboxes:

- [x] Complete initial setup
- [x] Implement core features
- [ ] Add more examples
- [ ] Write documentation

---

## Links and References

[External links](https://anthropic.com) to web resources

[Internal links](../02-principles/principles.md) to other content

Links inherit text color for minimal visual disruption

---

## Blockquotes

> Typography serves as the functional substrate for sustained reading.
>
> Font selection prioritizes legibility and reading comfort over stylistic expression.

Attribution and emphasis without visual clutter

---

## Multi-paragraph Quotes

> "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly."
>
> "A programmer is ideally an essayist who works with traditional aesthetic and literary forms."
>
> -- Donald Knuth, *Selected Papers on Computer Science*

---

## Images

Images maintain aspect ratio and responsive sizing

%%%

![Sample Image](../../../images/sample_image.jpeg)

---[title-content]

## Code Blocks
%%%
Syntax highlighting for multiple languages:

```python
def fibonacci(n):
    """Calculate Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
%%%
Line numbers and colorblind-friendly palette

---[title-content]

## More Code Examples
%%%
**JavaScript:**

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet("World"));
```
%%%
**Go:**

```go
func main() {
    fmt.Println("Hello, World!")
}
```

---[title-content]

## Shell Commands
%%%
```bash
#!/bin/bash
for file in *.md; do
    echo "Processing: $file"
    pandoc "$file" -o "${file%.md}.pdf"
done
```
%%%
All code blocks include automatic line numbering

---

## Inline Code

Use `inline code` for:

- Command names like `git commit`
- Function names like `calculateTotal()`
- Variable names like `maxRetries`
- File paths like `/etc/config`

---

## Mathematical Expressions

Inline math: $E = mc^2$

Physics equations: $F = ma$

Summations: $\sum_{i=1}^{n} x_i$

---

## Display Mathematics

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

Complex expressions centered and formatted

---

## Multiple Equations

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}
\end{aligned}
$$

Maxwell's equations example

---

## Matrix Notation

$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\\
a_{21} & a_{22} & a_{23} \\\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

Clean mathematical typesetting

---

## Tables

Clean, minimal styling with rounded corners

| Feature | Support | Notes |
|---------|---------|-------|
| Markdown | Full | GFM |
| Syntax | Full | 100+ langs |
| Math | Full | LaTeX |

---

## Table Alignment

| Left | Center | Right |
|:-----|:------:|------:|
| Text | Text | Text |
| More | More | More |
| Data | Data | Data |

Control alignment per column

---[title-content]

## Complex Tables
%%%
| Language | Typing | Use Case |
|----------|--------|----------|
| Python | Dynamic | Data Science, ML |
| JavaScript | Dynamic | Web Development |
| Go | Static | Systems, Services |
| Rust | Static | Performance Critical |
%%%
Comprehensive data presentation

---

## Headings Hierarchy

Presentations support multiple heading levels:

# First Level
## Second Level
### Third Level
#### Fourth Level
##### Fifth Level
###### Sixth Level

---

## Nested Content

Combine different elements:

1. **Code with explanation**
   ```python
   result = process_data(input)
   ```

2. **Math with context**
   - Formula: $y = mx + b$
   - Where $m$ is slope

---[title-content]

## Rich Combinations
%%%
Discussion with supporting elements:

- Key concept with code:
  ```javascript
  const value = calculate();
  ```

- Mathematical relationship:
  $$x^2 + y^2 = r^2$$
%%%
Flexible content composition

---

## Presentation Layouts

**Content** - Standard slide

**Title-Content** - Two-column layout

**Title** - Section markers

**Blank** - Custom layouts

---

## Layout Examples

This is a content slide with full-width layout

Perfect for focused information presentation

---[title]

## Section Marker

---[title-content]

## Two Column Layout
%%%
Left column can contain:
- Lists
- Text
- Code
- Formulas
%%%
Right column provides:
- Additional context
- Examples
- Supporting details
- Visualizations

---

## Navigation

Use arrow keys to navigate:

- **→** Next slide
- **←** Previous slide
- **↑** First slide
- **↓** Last slide

---

## Visual Design

Minimal aesthetic keeps focus on content

Clean typography optimized for reading

Colorblind-friendly syntax highlighting

Responsive layout for different screen sizes

---

## Accessibility

High contrast for readability

Semantic HTML structure

Keyboard navigation support

Screen reader friendly

---

## Best Practices

**Keep slides focused** - One concept per slide

**Use visuals wisely** - Support, don't distract

**Code examples** - Keep them concise

**Math notation** - Use for clarity, not complexity

---

## Content Guidelines

**Text formatting** - Use sparingly for emphasis

**Lists** - Keep items parallel and concise

**Tables** - Present data clearly

**Images** - Ensure they add value

---

## Summary

Lykeion provides comprehensive authoring tools:

- Full markdown support
- Syntax highlighted code
- LaTeX mathematics
- Clean table styling
- Flexible layouts
- Responsive design

---

## Getting Started

Write in plain markdown

Let Lykeion handle the presentation

Focus on your content, not the formatting

---

# Questions?

Ready to create your own presentations