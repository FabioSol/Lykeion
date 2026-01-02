---
title: "Supported Features"
date: 2025-12-31
draft: false
type: "document"
description: "Comprehensive guide to content features supported in the Lykeion theme"
showDescription: true
weight: 4
math: true
---

This document demonstrates all the content authoring capabilities available in Lykeion. Whether you're writing lecture notes, documentation, or essays, these features provide a rich toolkit for academic and technical writing.

## Markdown Support

Lykeion provides full GitHub-flavored markdown support for rich content authoring. This allows you to focus on writing without worrying about complex formatting.

## Text Formatting

You can use various text formatting options to emphasize content:

**Bold text** for strong emphasis

*Italic text* for subtle emphasis

~~Strikethrough~~ for corrections or deprecated content

`Inline code` for technical terms, commands, or short code snippets

You can also combine them: **_bold and italic_** or **`bold code`**

## Headings

The theme supports all six heading levels, though typically you'll use h2-h4 for document structure:

# First Level Heading

## Second Level Heading

### Third Level Heading

Content under third level heading.

#### Fourth Level Heading

Content under fourth level heading.

##### Fifth Level Heading

Content under fifth level heading.

###### Sixth Level Heading

Content under sixth level heading.

## Lists

Lykeion supports both unordered and ordered lists with proper nesting:

**Unordered Lists:**
- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested item
- Third item

**Ordered Lists:**
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

External links: [Visit Anthropic](https://anthropic.com)

Internal links: [Back to Introduction](../02-principles/writing-content.md)

Reference-style links can make your markdown more readable when you have many links in a paragraph. For example, you might want to reference [Anthropic][anthropic] and [Hugo][hugo] multiple times.

[anthropic]: https://anthropic.com
[hugo]: https://gohugo.io

Links inherit text color for minimal visual disruption while remaining accessible.

## Blockquotes

Blockquotes are styled for clear visual distinction while maintaining readability:

> Typography serves as the functional substrate for sustained reading. The design decisions embedded in typeface selection, line length, and spacing directly influence cognitive load and comprehension velocity.

Multi-paragraph blockquotes are also supported:

> Font selection prioritizes legibility and reading comfort over stylistic expression.
>
> The goal is to create an invisible container for ideas—typography that serves the content rather than competing with it.
>
> -- Robert Bringhurst, *The Elements of Typographic Style*

## Code Blocks

Code blocks support syntax highlighting for numerous programming languages:

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

All code blocks include line numbers and use a colorblind-friendly syntax highlighting palette.

## Mathematical Expressions

Lykeion supports LaTeX mathematical notation through MathJax, enabling both inline and display mathematics:

**Inline Math:**
You can include mathematical expressions inline, such as $E = mc^2$ or $\sum_{i=1}^{n} x_i$, which flow naturally with the text.

**Display Math:**
For more complex expressions, use display mode:

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

**Multiple Equations:**

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot \mathbf{B} &= 0 \\\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

**Matrices:**

$$
\mathbf{A} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\\
a_{21} & a_{22} & a_{23} \\\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

## Tables

Tables are rendered with clean styling and rounded corners:

| Feature | Support Level | Notes |
|---------|--------------|-------|
| Markdown | Full | GitHub-flavored markdown |
| Syntax Highlighting | Full | 100+ languages |
| Math Rendering | Full | LaTeX via MathJax |
| Tables | Full | With alignment support |
| Images | Full | Responsive sizing |

**Table with Alignment:**

| Left Aligned | Center Aligned | Right Aligned |
|:------------|:--------------:|--------------:|
| Text | Text | Text |
| More text | More text | More text |
| Even more | Even more | Even more |

**Complex Table:**

| Language | Typing | Paradigm | Popular Frameworks |
|----------|--------|----------|-------------------|
| Python | Dynamic | Multi-paradigm | Django, Flask, FastAPI |
| JavaScript | Dynamic | Multi-paradigm | React, Vue, Express |
| Go | Static | Procedural/OOP | Gin, Echo, Fiber |
| Rust | Static | Multi-paradigm | Actix, Rocket, Axum |

## Images

Images are displayed responsively and maintain their aspect ratio:

![Sample Image](/images/sample_image.jpeg)

Images automatically scale to fit the content area while preserving quality and aspect ratio.

## Horizontal Rules

Use horizontal rules to create visual separation between sections:

---

Content continues after the horizontal rule.

## Task Lists

GitHub-style task lists are also supported:

- [x] Complete initial theme setup
- [x] Implement presentation layout
- [x] Implement document layout
- [ ] Add more example content
- [ ] Write comprehensive documentation

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