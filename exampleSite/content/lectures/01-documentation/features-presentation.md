---
title: "Presentation Features Demo"
date: 2025-12-31
draft: false
type: "presentation"
description: "Comprehensive overview of content features supported in Lykeion presentations"
showTitleSlide: false
defaultSlideKind: "content"
weight: 5
math: true
---

---[title]
# Supported Features

A comprehensive tour of Lykeion's content authoring capabilities

---

## Markdown Support

Full GitHub-flavored markdown support for rich content authoring

Focus on writing, not formatting

---

## Text Formatting

**Bold text** for strong emphasis: \**Bold text\**

*Italic text* for subtle emphasis: \*Italic text\*

~~Strikethrough~~ for corrections: \~~Strikethrough\~~

`Inline code` for technical terms: \`Inline code\`

---

## Combined Formatting

You can mix formatting styles:

**_Bold and italic_** for maximum emphasis: \*\*\_Bold and italic\_\*\*

**`Bold code`** for highlighted technical terms: \*\*\`Bold code\`\*\*

*`Italic code`* for subtle technical emphasis: \*\`Italic code\`\*

---[title-content]

## Lists
%%%

With `- ` and indentation

**Unordered:**
- First item
- Second item
  - Nested item
  - Another nested item
    - Deep nesting
- Third item
%%%

With `n. ` and indentation

**Ordered:**
1. First step
2. Second step
   1. Nested step
   2. Another nested step
      1. Deep nesting
3. Third step

---

## Task Lists

Track progress with checkboxes:

- [x] Complete initial setup
- [x] Implement core features
- [ ] Add more examples
- [ ] Write documentation
%%%

checked: `- [x]`

unchecked: `- [ ]`
---

## Links and References

[External links](https://anthropic.com) to web resources

[Internal links](../../02-principles/principles) to other content

Links inherit text color for minimal visual disruption but are underlined and highlight on hover.

---

## Blockquotes

> Typography serves as the functional substrate for sustained reading.
> Font selection prioritizes legibility and reading comfort.

Attribution and emphasis without visual clutter

```markdown
> Typography serves as the functional substrate for sustained reading.
> Font selection prioritizes legibility and reading comfort.
```
---

## Multi-paragraph Quotes

> "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly."
>
> "A programmer is ideally an essayist who works with traditional aesthetic and literary forms."
>
> -- Donald Knuth, *Selected Papers on Computer Science*

just leave an empty `> ` between your pharagraphs

---

## Images

Images maintain aspect ratio and responsive sizing

```markdown
![Sample Image](../../../images/sample_image.jpeg)
```

%%%
![Sample Image](../../../images/sample_image.jpeg)

---

## Tables

Clean, minimal styling with rounded corners

| Feature  | Support | Notes      |
|----------|---------|------------|
| Markdown | Full    | GFM        |
| Syntax   | Full    | 100+ langs |
| Math     | Full    | LaTeX      |

%%%

```markdown
| Feature  | Support | Notes      |
|----------|---------|------------|
| Markdown | Full    | GFM        |
| Syntax   | Full    | 100+ langs |
| Math     | Full    | LaTeX      |
```
---

## Table Alignment

| Left | Center | Right |
|:-----|:------:|------:|
| Text |  Text  |  Text |
| More |  More  |  More |
| Data |  Data  |  Data |

Control alignment per column

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| Text |  Text  |  Text |
| More |  More  |  More |
| Data |  Data  |  Data |
```

---

## Intentionally overflowed table

%%%

| Language   | Typing   | Paradigm          | Popular Frameworks        |
|------------|----------|-------------------|---------------------------|
| Python     | Dynamic  | Multi-paradigm    | Django, Flask, FastAPI    |
| JavaScript | Dynamic  | Multi-paradigm    | React, Vue, Express       |
| Go         | Static   | Procedural/OOP    | Gin, Echo, Fiber          |
| Rust       | Static   | Multi-paradigm    | Actix, Rocket, Axum       |


---

## Headings Hierarchy

Presentations support 6 heading levels:

# First Level
## Second Level
### Third Level
#### Fourth Level
##### Fifth Level
###### Sixth Level

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

syntax:
```
    ```{lang}
    {code}
    ```
```

if lang is omited, there is no syntax highlight or header (as above)

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

---
## Mathematical Expressions (inline)

Inline math: $E = mc^2$

Physics equations: $F = ma$

Summations: $\sum_{i=1}^{n} x_i$

%%%

just wrapp in \$ your expressions

like this `$\sum_{i=1}^{n} x_i$`
---

## Mathematical Expressions (block)

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

Complex expressions centered and formatted

```latex
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$
```

---

## Multiple Equations

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}
\end{aligned}
$$

%%%

Maxwell's equations example

```latex
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}
\end{aligned}
$$
```

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

%%%

```latex
$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\\
a_{21} & a_{22} & a_{23} \\\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$
```
---

## Math tips

we also support tooltips for the math expressions (hover over the letters)

$\tip{Energy}{E}=\tip{mass}{m}\tip{Idk i skipped physics}{c}^2$

use the \tip macro:

```latex
$\tip{Energy}{E}=\tip{mass}{m}\tip{Idk i skipped physics}{c}^2$
```

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

---

## Navigation

Use arrow keys to navigate:

- **→** Next slide
- **←** Previous slide
- **↑** First slide
- **↓** Last slide
