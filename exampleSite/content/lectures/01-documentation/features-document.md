---
title: "Document Features Demo"
date: 2025-12-31
draft: false
type: "document"
description: "Comprehensive guide to content features supported in the Lykeion theme"
showDescription: true
weight: 6
math: true
---

This document demonstrates all the capabilities available in Lykeion documents.

## Markdown Support

Lykeion provides full GitHub-flavored markdown support for rich content authoring. This allows you to focus on writing without worrying about complex formatting.

## Text Formatting

You can use various text formatting options to emphasize content:

**Bold text** for strong emphasis: `**Bold text**`

*Italic text* for subtle emphasis: `*Italic text*`

~~Strikethrough~~ for corrections or deprecated content: `~~Strikethrough~~`

`Inline code` for technical terms, commands, or short code snippets: `` `Inline code` ``

You can also combine them:
- **_bold and italic_**: `**_bold and italic_**`
- **`bold code`**: `` **`bold code`** ``
- *`italic code`*: `` *`italic code`* ``

## Headings

The theme supports all six heading levels (using `#` symbols), though typically you'll use h2-h4 for document structure:

# First Level Heading
`# First Level Heading`

## Second Level Heading
`## Second Level Heading`

### Third Level Heading
`### Third Level Heading`

#### Fourth Level Heading
`#### Fourth Level Heading`

##### Fifth Level Heading
`##### Fifth Level Heading`

###### Sixth Level Heading
`###### Sixth Level Heading`

## Lists

Lykeion supports both unordered and ordered lists with proper nesting:

**Unordered Lists** (use `- ` with indentation):
- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested item
- Third item

**Ordered Lists** (use `1. ` with indentation):
1. First step
2. Second step
   1. Nested step
   2. Another nested step
3. Third step

**Mixed Lists:**
1. Main point
   - Supporting detail
   - Another detail
2. Second main point
   - More details

## Links and References

Lykeion supports various types of links:

**External links:** [Visit Anthropic](https://anthropic.com)

- syntax: `[Visit Anthropic](https://anthropic.com)` 

**Internal links:** [Back to Introduction](../02-principles/writing-content.md)

- syntax: `[Back to Introduction](../02-principles/writing-content.md)` 


Links inherit text color for minimal visual disruption while remaining accessible.

## Blockquotes

Blockquotes are styled for clear visual distinction while maintaining readability. Use `>` at the start of each line:

> Typography serves as the functional substrate for sustained reading. The design decisions embedded in typeface selection, line length, and spacing directly influence cognitive load and comprehension velocity.

**Multi-paragraph blockquotes** (leave an empty `>` between paragraphs):

> Font selection prioritizes legibility and reading comfort over stylistic expression.
>
> The goal is to create an invisible container for ideas—typography that serves the content rather than competing with it.
>
> -- Robert Bringhurst, *The Elements of Typographic Style*

```markdown
> First paragraph.
>
> Second paragraph.
>
> -- Author, *Book Title*
```

## Code Blocks

Code blocks support syntax highlighting for numerous programming languages. Syntax: ` ```{language} ` followed by your code and closing ` ``` `

**Python:**
```python
def calculate_fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Example usage
result = calculate_fibonacci(10)
print(f"The 10th Fibonacci number is: {result}")
```

**JavaScript:**
```javascript
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
```

**Go:**
```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return fmt.Sprintf("Hello, I'm %s", p.Name)
}

func main() {
    person := Person{Name: "Alice", Age: 30}
    fmt.Println(person.Greet())
}
```

**Shell:**
```bash
#!/bin/bash
for file in *.md; do
    echo "Processing: $file"
    pandoc "$file" -o "${file%.md}.pdf"
done
```

All code blocks include line numbers and use a colorblind-friendly syntax highlighting palette. If language is omitted, there is no syntax highlighting or header.

## Mathematical Expressions

Lykeion supports LaTeX mathematical notation through MathJax, enabling both inline and display mathematics:

**Inline Math:** Wrap expressions in `$...$`

You can include mathematical expressions inline, such as $E = mc^2$ (written as `$E = mc^2$`) or $\sum_{i=1}^{n} x_i$ (written as `$\sum_{i=1}^{n} x_i$`), which flow naturally with the text.

**Display Math:** Wrap expressions in `$$...$$`

For more complex expressions, use display mode:

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

```latex
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$
```

**Multiple Equations:**

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

```latex
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}
\end{aligned}
$$
```

**Matrices:**

$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\\
a_{21} & a_{22} & a_{23} \\\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

```latex
$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\\
a_{21} & a_{22} & a_{23} \\\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$
```

**Math Tooltips:** Use the `\tip` macro for hover explanations

$\tip{Energy}{E}=\tip{mass}{m}\tip{speed of light squared}{c}^2$

```latex
$\tip{Energy}{E}=\tip{mass}{m}\tip{speed of light squared}{c}^2$
```

## Tables

Tables are rendered with clean styling and rounded corners:

| Feature | Support Level | Notes |
|---------|--------------|-------|
| Markdown | Full | GitHub-flavored markdown |
| Syntax Highlighting | Full | 100+ languages |
| Math Rendering | Full | LaTeX via MathJax |
| Tables | Full | With alignment support |
| Images | Full | Responsive sizing |

```markdown
| Feature | Support Level | Notes |
|---------|--------------|-------|
| Markdown | Full | GitHub-flavored markdown |
| Syntax Highlighting | Full | 100+ languages |
```

**Table with Alignment:** Use `:` for alignment (`:---` left, `:---:` center, `---:` right)

| Left Aligned | Center Aligned | Right Aligned |
|:------------|:--------------:|--------------:|
| Text | Text | Text |
| More text | More text | More text |
| Even more | Even more | Even more |

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:------------|:--------------:|--------------:|
| Text | Text | Text |
```

**Complex Table:**

| Language | Typing | Paradigm | Popular Frameworks |
|----------|--------|----------|-------------------|
| Python | Dynamic | Multi-paradigm | Django, Flask, FastAPI |
| JavaScript | Dynamic | Multi-paradigm | React, Vue, Express |
| Go | Static | Procedural/OOP | Gin, Echo, Fiber |
| Rust | Static | Multi-paradigm | Actix, Rocket, Axum |

## Images

Images are displayed responsively and maintain their aspect ratio. Syntax: `![Alt text](path/to/image.jpg)`

![Sample Image](/images/sample_image.jpeg)

```markdown
![Sample Image](/images/sample_image.jpeg)
```

Images automatically scale to fit the content area while preserving quality and aspect ratio.

## Horizontal Rules

Use horizontal rules (`---` or `***`) to create visual separation between sections:

---

```markdown
---
```

Content continues after the horizontal rule.

## Task Lists

GitHub-style task lists are also supported. Use `- [x]` for checked and `- [ ]` for unchecked:

- [x] Complete initial theme setup
- [x] Implement presentation layout
- [x] Implement document layout
- [ ] Add more example content
- [ ] Write comprehensive documentation

```markdown
- [x] Completed task
- [ ] Incomplete task
```

## Nested Content

You can combine different content types for rich, structured documents:

1. **First Major Section**

   This section discusses important concepts with supporting details:

   - Key point with inline math: $\alpha = \beta + \gamma$
   - Another key point with a code example:

     ```python
     result = process_data(input_data)
     ```

   - Final point with a blockquote:

     > "Simplicity is the ultimate sophistication." -- Leonardo da Vinci

2. **Second Major Section**

   Here we might include a table with data:

   | Metric | Value | Change |
   |--------|-------|--------|
   | Performance | 95% | +5% |
   | Accuracy | 98% | +2% |

   Followed by analysis and mathematical formulas:

   $$
   \text{Improvement} = \frac{\text{New Value} - \text{Old Value}}{\text{Old Value}} \times 100\%
   $$


## Conclusion

The Lykeion theme provides a comprehensive set of features for academic and technical writing. All elements are designed with readability and accessibility in mind, using a clean, minimal aesthetic that keeps the focus on your content.