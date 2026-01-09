---
title: "Introduction"
date: 2025-01-15
draft: false
type: "presentation"
description: "Introduction to Lykeion: A reading-first Hugo theme"
showTitleSlide: false
weight: 1
---

---[title]
# Lykeion

A Hugo theme for reading-centered digital interfaces

---[title-content]

## The Problem

Modern web interfaces prioritize engagement over comprehension.

- Infinite scroll and attention-grabbing elements
- Poor typography for sustained reading
- Navigation that interrupts flow
- Interface complexity competing with content

---

## The Solution

%%%

**Lykeion** applies evidence-based design principles from perceptual psychology, cognitive science, and typography to create interfaces that disappear.

Content becomes the sole visual figure.

---[content]

## Design Philosophy
Nine hierarchical principles guide every decision:

%%%

1. Content as sole visual figure
2. Clear visual hierarchy
3. Cognitive chunking
4. Spatial rhythm
5. Optimized typography
6. Saccadic efficiency
7. Minimal interaction cost
8. Effortless orientation
9. Progressive complexity

---[title-content]

## Two Content Types

%%%

**Documents**: Vertical reading with deep engagement

- Scroll indicator with hover-to-index
- Heading anchors for reference
- Optimized line length (60-80 characters)
- 1.5-1.75x line height

%%%

**Presentations**: Horizontal slide progression

- Scroll-snap navigation
- Slide indicators at bottom
- Full viewport slides
- Gesture-driven movement

---

## Navigation Architecture

Gesture-driven spatial navigation that respects content boundaries.

- Arrow keys for deliberate movement
- Scroll/swipe at edges for natural flow
- Direction dominance logic (2x ratio)
- Debounced to prevent false triggers

No visible chrome until needed.

---

## Technical Implementation
%%%
Built with modern web standards:

- Hugo static site generator
- CSS scroll-snap for presentations
- ES6 modules for navigation
- Wheel and touch event detection
- Responsive without breakpoint complexity

---[title-content]

## Theoretical Grounding

%%%

Every design decision references established research:

- Gestalt principles (Wertheimer, 1923)
- Cognitive load theory (Sweller, 1988)
- Eye movement research (Rayner, 1998)
- Interaction cost theory (Nielsen Norman Group)

No arbitrary aesthetic choices.

---[title-content]

## Try It

%%%

Navigate presentations with:

- Arrow keys (← →)
- Scroll/swipe horizontally
- Scroll up to return to index

%%%

Navigate documents with:

- Arrow keys (↑ ↓)
- Scroll/swipe vertically
- Scroll left to return to index