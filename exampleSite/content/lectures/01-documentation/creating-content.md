---
title: "Creating Documents and Presentations"
date: 2025-12-31
draft: false
type: "document"
description: "Complete guide to creating and structuring documents and presentations in Lykeion"
showDescription: true
weight: 3
---

This guide explains how to create both documents and presentations in Lykeion, covering content structure, special parameters, and navigation features.

## Creating New Content

Lykeion provides archetypes to quickly scaffold new documents and presentations using Hugo's content creation commands.

### Creating a Document

```bash
hugo new content/lectures/my-topic/my-document.md --kind document
```

This creates a new document with the following front matter:

```yaml
---
title: "My Document"
date: 2025-12-31
draft: false
type: "document"
description: ""
showDescription: true
weight: 1
---
```

### Creating a Presentation

```bash
hugo new content/lectures/my-topic/my-presentation.md --kind presentation
```

This creates a new presentation with:

```yaml
---
title: "My Presentation"
date: 2025-12-31
draft: false
type: "presentation"
description: ""
showTitleSlide: true
weight: 1
---
```

## Document Structure

Documents in Lykeion are designed for vertical reading with enhanced navigation capabilities.

### Document Parameters

**`type: "document"`** (required)
- Specifies this content should use the document layout

**`description`** (optional)
- A brief summary of the document content
- Used in listings and can be displayed at the top of the document

**`showDescription: true|false`** (optional, default: false)
- When true, displays the description at the top of the document
- Useful for providing context before the main content

**`weight`** (optional)
- Controls the order in lecture listings
- Lower numbers appear first

**`math: true|false`** (optional, default: false)
- Enables MathJax support for LaTeX mathematical expressions
- Required if using `$...$` or `$$...$$` notation

### Document Features

**Vertical Reading Flow**
Documents present content in a traditional, top-to-bottom reading format optimized for long-form content.

**Table of Contents & Section Anchors**
- Each heading (h2, h3, etc.) automatically gets an anchor ID
- Readers can link directly to sections
- Creates implicit table of contents through heading structure

Example heading anchor usage:
```markdown
## Introduction

Content here...

## Methods

You can reference the [Introduction](#introduction) section.
```

**Content Width**
Documents use a readable line length optimized for sustained reading.

**Scroll Indicator**
the scroll indicator on the right side helps readers track their position in long documents. Also, helps with navigation and shows the titles of section on hover. This way its only visible when needed.

## Presentation Structure

Presentations in Lykeion use horizontal navigation, with each slide separated by `---`.

### Presentation Parameters

**`type: "presentation"`** (required)
- Specifies this content should use the presentation layout

**`description`** (optional)
- Brief description shown in listings

**`showTitleSlide: true|false`** (optional, default: true)
- When true, creates an automatic title slide using the document's title and description
- When false, starts directly with your first content slide
- Useful when you want a custom opening slide

**`defaultSlideKind: "content"|"title"|"title-content"`** (optional, default: "content")
- Sets the default layout for slides that don't specify a kind
- Can be overridden per-slide

**`weight`** (optional)
- Controls the order in lecture listings

**`math: true|false`** (optional, default: false)
- Enables MathJax support for mathematical expressions

### Slide Separators

Slides are separated using `---` with optional layout modifiers:

**Basic slide separator:**
```markdown
---

## Slide Title

Slide content
```

**Slide with layout modifier:**
```markdown
---[title-content]

## Slide Title

Slide content
```

### Slide Layout Types

Presentations support three main slide layouts that control how content is distributed on the slide:

**`[title]` - Title with Description**
- Makes the heading larger and more prominent
- Content below the heading displays as a description/subtitle
- Best for: section breaks, introducing new topics, key statements

```markdown
---[title]

## Section 2: Implementation

Core algorithms and data structures
```

**`[title-content]` - Header with Horizontal Content**
- First division (before `%%%`) appears at the top
- Remaining divisions (separated by `%%%`) are equally spaced horizontally below
- Best for: comparing multiple concepts side-by-side

```markdown
---[title-content]

## Data Structures
%%%

**Lists:**
- Dynamic size
- Sequential access
- O(n) search
%%%

**Arrays:**
- Fixed size
- Random access
- O(1) access
```

**`[content]` - Equal Horizontal Divisions**
- All content divisions (separated by `%%%`) are equally spaced horizontally
- No special title treatment
- Best for: comparing 2-3 items without a header

```markdown
---[content]

**Before:**
```python
for i in range(n):
    print(i)
```
%%%

**After:**
```python
for i in range(n):
    if i % 2 == 0:
        print(i)
```
```

### Content Divider: `%%%`

The `%%%` divider separates content into distinct sections:

- In `[title-content]`: Separates the top section from horizontally-arranged bottom sections
- In `[content]`: Separates horizontally-arranged sections
- In default/no layout: Has no special effect (content flows normally)

**Example with multiple horizontal sections:**

```markdown
---[content]

**Column 1:**
- Point A
- Point B
%%%

**Column 2:**
- Point C
- Point D
%%%

**Column 3:**
- Point E
- Point F
```

This creates three equal-width columns side by side.

### Presentation Navigation

Presentations use keyboard navigation:

- **→** (Right Arrow): Next slide
- **←** (Left Arrow): Previous slide
- **↑** (Up Arrow): First slide
- **↓** (Down Arrow): Last slide

## Choosing Between Documents and Presentations

**Use Documents when:**
- Content requires sustained, linear reading
- You need detailed explanations with deep nesting
- Readers need to reference specific sections via anchors
- Content is reference material or comprehensive guides

**Use Presentations when:**
- Presenting information in a lecture or talk format
- Content works better in discrete, focused chunks
- Visual hierarchy and spacing enhance understanding
- You want to guide attention through sequential slides

## Complete Examples

### Document Example

```markdown
---
title: "Introduction to Algorithms"
date: 2025-12-31
draft: false
type: "document"
description: "Fundamental concepts in algorithm design and analysis"
showDescription: true
weight: 1
math: true
---

## Overview

This document covers the essential concepts...

## Time Complexity

When analyzing algorithms, we use Big O notation: $O(n)$

### Best Case

The best case occurs when...

### Worst Case

The worst case occurs when...
```

### Presentation Example

```markdown
---
title: "Algorithm Analysis"
date: 2025-12-31
draft: false
type: "presentation"
description: "Understanding time and space complexity"
showTitleSlide: true
defaultSlideKind: "content"
weight: 2
math: true
---

---

## What is Time Complexity?

A measure of how algorithm runtime grows with input size

---[title-content]

## Common Complexities
%%%

| Notation | Name | Example |
|----------|------|---------|
| $O(1)$ | Constant | Array access |
| $O(n)$ | Linear | Linear search |
| $O(n^2)$ | Quadratic | Bubble sort |

---[title]

## Questions?
```

## Best Practices

**For Documents:**
1. Use descriptive heading hierarchy (h2, h3, h4)
2. Keep sections focused and scannable
3. Use anchor links for cross-references
4. Enable `showDescription` for context

**For Presentations:**
1. One main idea per slide
2. Use slide layouts to create visual rhythm
3. Disable `showTitleSlide` if you have a custom opening
4. Use `defaultSlideKind` to set your preferred default layout
5. Leverage `[title-content]` for balanced information presentation

**For Both:**
1. Set appropriate `weight` for logical ordering
2. Enable `math: true` only when needed
3. Write clear, descriptive titles
4. Keep descriptions concise