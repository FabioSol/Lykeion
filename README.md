# Lykeion

A mindful learning platform theme for Hugo that prioritizes content as the sole visual figure. Designed for creating reading-centered digital interfaces with a focus on lectures, slides, and notes using an "invisible interface" philosophy.

## Features

- **Two Content Modes**: Presentations (horizontal slides) and Documents (vertical reading)
- **Custom Markdown Syntax**: Slide delimiters, column splits, and slide types
- **Mathematical Expressions**: Full LaTeX support via MathJax
- **Enhanced Code Blocks**: Syntax highlighting with line numbers and language indicators
- **Smart Navigation**: Keyboard, scroll, and touch gesture support
- **Automatic Heading Anchors**: Click-to-copy URLs for document sections
- **Colorblind-Friendly**: Carefully chosen color palette for accessibility
- **Typography Optimized**: Merriweather font optimized for sustained reading

## Requirements

- Hugo Extended v0.112.0 or higher
- Git (for theme installation)

## Installation

### As a Hugo Module

Add to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/fabiosolorzano/Lykeion"
```

Then run:

```bash
hugo mod get -u
```

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/fabiosolorzano/Lykeion.git themes/lykeion
```

Update your `config.toml`:

```toml
theme = "lykeion"
```

## Configuration

### Required Hugo Configuration

Add this to your `config.toml` or `hugo.toml`:

```toml
baseURL = "/"
title = "Lykeion"
languageCode = "en-us"
theme = "lykeion"

[author]
  name = "Your Name"
  homepage = "https://yoursite.com"

[markup]
  [markup.highlight]
    noClasses = false        # CRITICAL: Required for syntax highlighting
    lineNos = true
    lineNumbersInTable = true

  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true        # CRITICAL: Required for math rendering
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)'], ['$', '$']]

    [markup.goldmark.parser]
      autoHeadingID = true
      autoHeadingIDType = "github"

[params]
  description = "Your site description"
  author = "Your Name"
  math = true                # Enable MathJax globally
  defaultSlideKind = "content"

[[menu.main]]
  name = "Lectures"
  url = "/lectures/"
  weight = 1
```

### Critical Settings Explained

1. **`[markup.highlight] noClasses = false`**: This is required for proper syntax highlighting with the theme's color scheme. Without this, code blocks will not be styled correctly.

2. **`[markup.goldmark.extensions.passthrough]`**: This enables LaTeX math rendering via MathJax. Without this configuration, mathematical expressions will not render properly.

## Content Types

Lykeion provides two distinct content types optimized for different use cases:

### 1. Presentations

Horizontal slide-based layout perfect for lectures, talks, and presentations.

Create a new presentation:

```bash
hugo new lectures/my-lecture/presentation.md
```

Example frontmatter:

```yaml
---
title: "Introduction to Hugo"
date: 2025-01-08
draft: false
type: "presentation"
description: "A comprehensive introduction to static site generation"
showTitleSlide: true
weight: 1
math: true
---
```

### 2. Documents

Vertical scrolling layout optimized for long-form reading and documentation.

Create a new document:

```bash
hugo new lectures/my-lecture/document.md
```

Example frontmatter:

```yaml
---
title: "Hugo Documentation"
date: 2025-01-08
draft: false
type: "document"
description: "Complete guide to using Hugo"
showDescription: true
weight: 2
math: false
---
```

## Custom Markdown Syntax

### Presentation-Specific Syntax

#### Slide Delimiters

Use three hyphens on a new line to create a new slide:

```markdown
# First Slide

Content for the first slide

---

# Second Slide

Content for the second slide
```

To display literal `---` without creating a slide break, escape it:

```markdown
\---
```

#### Slide Types

Define slide layouts by adding `[type]` immediately after the delimiter:

```markdown
---[title]
# Section Title
Brief description or subtitle

---[content]
## Regular Content Slide
Standard layout with content

---[title-content]
# Title at Top

%%%

## Column 1
Content here

%%%

## Column 2
More content here
```

Available slide types:
- `[content]` - Standard full-width slide (default)
- `[title]` - Large, centered title slide for section breaks
- `[title-content]` - Title at top with multi-column grid below

#### Column Splits

Use three percent signs to create columns within a slide:

```markdown
---[title-content]
# Multi-Column Slide

%%%

## Left Column
- Point 1
- Point 2

%%%

## Middle Column
- Point 3
- Point 4

%%%

## Right Column
- Point 5
- Point 6
```

To display literal `%%%`, escape it:

```markdown
\%%%
```

The grid automatically adapts to the number of columns (2, 3, or more).

### Mathematical Expressions

Lykeion supports full LaTeX math syntax via MathJax.

#### Inline Math

Use single dollar signs or `\( \)`:

```markdown
Einstein's famous equation is $E = mc^2$.

Alternatively: \(E = mc^2\)
```

#### Display Math

Use double dollar signs or `\[ \]`:

```markdown
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$
```

Or:

```markdown
\[
\frac{d}{dx} \left( \int_{a}^{x} f(t) dt \right) = f(x)
\]
```

#### Complex Expressions

```markdown
$$
\begin{aligned}
\nabla \times \vec{\mathbf{B}} - \frac{1}{c} \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}} + \frac{1}{c} \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{aligned}
$$
```

### Standard Markdown

All GitHub-flavored markdown is fully supported:

#### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

#### Text Formatting

```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

#### Lists

```markdown
Unordered list:
- Item 1
- Item 2
  - Nested item
  - Another nested item

Ordered list:
1. First item
2. Second item
   1. Nested item
   2. Another nested item
```

#### Task Lists

```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

#### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> And multiple paragraphs.
```

#### Code Blocks

Use triple backticks with language identifier:

````markdown
```python
def hello_world():
    print("Hello, World!")
```

```javascript
function helloWorld() {
    console.log("Hello, World!");
}
```

```bash
echo "Hello, World!"
```
````

Code blocks automatically include:
- Line numbers
- Language indicator header
- Syntax highlighting (100+ languages supported)

#### Tables

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Cell 1       | Cell 2         | Cell 3        |
| Cell 4       | Cell 5         | Cell 6        |
```

#### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Link title")
```

#### Images

```markdown
![Alt text](/path/to/image.jpg)
![Alt text with title](/path/to/image.jpg "Image title")
```

Images are automatically responsive and sized appropriately.

#### Horizontal Rules

```markdown
---
```

Note: In presentations, `---` creates a new slide. Use `\---` to display a horizontal rule.

## Theme Features

### Automatic Heading Anchors (Documents Only)

In document-type content, every heading automatically gets:
- A unique anchor ID
- A clickable hyperlink icon on hover
- Click-to-copy URL functionality
- Smooth scroll navigation

Hover over any heading to reveal the link icon, then click to copy the full URL and jump to that section.

### Navigation System

#### Keyboard Navigation

- `←` / `→` - Navigate between slides (presentations) or sibling pages
- `↑` / `↓` - Navigate to parent/child or previous/next pages
- `Space` - Next slide (presentations)
- `Home` - First slide (presentations)
- `End` - Last slide (presentations)

#### Gesture Navigation

- **Scroll/Swipe** - Navigate through slides or sections with overscroll detection
- **Touch Swipe** - Horizontal swipes change slides in presentations
- **Mouse Wheel** - Overscroll triggers navigation to adjacent content

The navigation system uses intelligent direction detection:
- Requires 5x ratio for wheel events (prevents accidental triggers)
- Requires 2x ratio for touch events
- 500ms debounce to prevent false navigation

### Slide Indicator (Presentations)

A bottom indicator shows dots for each slide:
- Current slide highlighted
- Click any dot to jump to that slide
- Updates automatically as you navigate

### Scroll Indicator (Documents)

A side navigation panel shows all headings:
- Hierarchical display with proper nesting
- Click to jump to any section
- Hover to reveal heading text
- Visual size variations by heading level

### Dynamic Padding

Documents automatically calculate bottom padding to ensure:
- The last section can be scrolled to viewport center
- No content is cut off by the bottom edge
- Responsive to window resizing

## Example Content Structure

```
content/
└── lectures/
    ├── _index.md
    ├── 01-introduction/
    │   ├── _index.md
    │   ├── presentation.md
    │   └── features-document.md
    ├── 02-advanced/
    │   ├── _index.md
    │   ├── presentation.md
    │   └── reference.md
    └── 03-examples/
        ├── _index.md
        └── demo.md
```

Each section can contain:
- Multiple presentations
- Multiple documents
- Nested subsections
- Any combination of content types

Use the `weight` parameter in frontmatter to control ordering:

```yaml
---
title: "First Lecture"
weight: 1
---
```

## Typography

The theme uses **Merriweather**, a serif typeface optimized for sustained reading on screens. It provides:
- Excellent readability at various sizes
- Multiple weights (300-900) with italic variants
- Proper optical sizing for different contexts
- High legibility in low-light conditions

Font files are included in WOFF2 format for optimal performance.

## Color System

Lykeion uses an OKLCH-based color system that is:
- **Perceptually uniform** - Equal changes in values result in equal perceptual changes
- **Colorblind-friendly** - Colors chosen for maximum accessibility
- **High contrast** - Ensures readability in various lighting conditions

The syntax highlighting palette is specifically designed to be distinguishable by users with various types of color vision deficiency.

## Design Principles

The theme is built on 9 evidence-based design principles:

1. **Content as Sole Visual Figure** - Interface recedes, content dominates
2. **Clear Visual Hierarchy** - Typography guides structure
3. **Cognitive Chunking** - Content in manageable units
4. **Spatial Rhythm** - Consistent whitespace creates flow
5. **Typography for Reading** - Font selection prioritizes legibility
6. **Saccadic Efficiency** - Line length optimized for eye movement
7. **Minimal Interaction Cost** - Navigation requires minimal effort
8. **Effortless Orientation** - Consistent navigation patterns
9. **Progressive Disclosure** - Complexity revealed gradually

## Browser Support

The theme works in all modern browsers that support:
- CSS Grid
- ES6 Modules
- CSS Custom Properties
- WOFF2 fonts
- MathJax 4

Tested on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Troubleshooting

### Math is not rendering

Ensure you have added the math passthrough configuration to your `config.toml`:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)'], ['$', '$']]
```

Also ensure `math: true` is set either globally in `[params]` or in the page frontmatter.

### Syntax highlighting is not working

Make sure you have set:

```toml
[markup.highlight]
  noClasses = false
```

This is critical for the theme's syntax highlighting to work properly.

### Slides are not breaking correctly

Verify you are using exactly three hyphens on a new line with blank lines before and after:

```markdown
Content before

---

Content after
```

### Navigation is not working

Check that:
1. JavaScript is enabled in your browser
2. Content files have proper `weight` values in frontmatter
3. Content is organized in sections with `_index.md` files

## Development

To work on the theme locally:

```bash
git clone https://github.com/fabiosolorzano/Lykeion.git
cd Lykeion
hugo server --source exampleSite
```

The example site demonstrates all theme features.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

Created by [Fabio Solorzano](https://github.com/fabiosolorzano)

Built with [Hugo](https://gohugo.io), the world's fastest static site generator.

Typography powered by [Merriweather](https://fonts.google.com/specimen/Merriweather) by Sorkin Type.

Math rendering by [MathJax](https://www.mathjax.org).

## Support

- GitHub Issues: https://github.com/fabiosolorzano/Lykeion/issues
- Documentation: See the example site in `/exampleSite`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.