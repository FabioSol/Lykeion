---
title: "Slide Features Demo"
date: 2025-12-31
draft: false
type: "presentation"
description: "Demonstration of Lykeion's slide markdown syntax"
showTitleSlide: false
defaultSlideKind: "content"
weight: 2
---

---
# Slide Markdown Syntax

Lykeion presentations support multiple slide types and layouts

---

## Slide Types

Use `[type]` at the start of a slide to set its kind:

- `[title]` - Title slides with custom layouts
- `[content]` - Default content slides
- `[title-content]` - Title with multi-column content below

---

[title]
# Title Slide

Large, centered title formatting

Perfect for section breaks

---

## Split Columns

Use `\%%%` to split content into columns

Each section becomes a separate column

---

[title-content]
# Split Layout Example

%%%

## Column 1

First section of content

%%%

## Column 2

Second section of content

%%%

## Column 3

Third section of content

---

[title-content]
# Dynamic Grid

The grid adapts to the number of splits

%%%

## Two Columns

This layout has only two columns

%%%

## Second Column

Automatically distributed evenly

---

## Implementation Details

- Slide kind defined with `[kind]` syntax
- Content splits with `\%%%` delimiter
- Grid columns calculated via JavaScript
- CSS Grid handles layout automatically

---

## Escape Sequences

Sometimes you need to use the special delimiters as literal text

**Escape slide breaks:**
- Use `\\---` to display `\---` without creating a new slide

**Escape column splits:**
- Use `\\%%%` to display `\%%%` without creating a new column

Both escape sequences render as their literal characters in the output
