---
title: "Project Structure"
date: 2025-12-31
draft: false
type: "document"
description: "Understanding Lykeion's Hugo-based project organization for courses and lectures"
showDescription: true
weight: 2
---

Lykeion leverages Hugo's content organization system to structure educational content as a hierarchical course with lectures, where each lecture contains documents and presentations.

## Content Hierarchy

Lykeion uses a three-level hierarchy:

```
Course (Site)
└── Lectures (Sections)
    └── Documents & Presentations (Pages)
```

This structure allows you to organize complex educational material in a logical, navigable way.

## Directory Structure

A typical Lykeion project looks like this:

```
your-course/
├── content/
│   └── lectures/
│       ├── _index.md                    # Course home page
│       ├── 01-introduction/
│       │   ├── _index.md                # Lecture overview
│       │   ├── overview.md              # Document
│       │   └── slides.md                # Presentation
│       ├── 02-fundamentals/
│       │   ├── _index.md
│       │   ├── theory.md
│       │   ├── examples.md
│       │   └── lab-slides.md
│       └── 03-advanced-topics/
│           ├── _index.md
│           ├── deep-dive.md
│           └── case-studies.md
├── static/
│   ├── images/                          # Course images
│   ├── css/                             # Custom styles
│   └── js/                              # Custom scripts
├── themes/
│   └── lykeion/                         # Theme files
└── hugo.toml                            # Site configuration
```

## Understanding the Hierarchy

### Level 1: The Course (Site)

The entire Hugo site represents your course. Configuration in `hugo.toml` sets course-wide settings:

```toml
baseURL = "https://your-course.edu/"
title = "Introduction to Computer Science"
theme = "lykeion"

[params]
  description = "A comprehensive introduction to CS fundamentals"
  instructor = "Dr. Jane Smith"
```

The course home page is at `content/lectures/_index.md`:

```markdown
---
title: "Introduction to Computer Science"
description: "Fall 2025 - A comprehensive journey through CS fundamentals"
---

Welcome to the course! This semester we'll explore...
```

### Level 2: Lectures (Sections)

Each lecture is a directory under `content/lectures/`. The directory name typically includes a number prefix for ordering:

```
content/lectures/
├── 01-introduction/
├── 02-data-structures/
├── 03-algorithms/
└── 04-complexity-analysis/
```

**Lecture Index (`_index.md`)**

Each lecture directory contains an `_index.md` file that serves as the lecture's landing page:

```markdown
---
title: "Data Structures"
description: "Understanding fundamental data structures"
weight: 2
---

This lecture covers arrays, linked lists, stacks, and queues.

## Learning Objectives

- Understand array operations and complexity
- Implement linked lists
- Apply stacks and queues to solve problems
```

The lecture index page lists all documents and presentations within that lecture, automatically displaying their titles, descriptions, and type icons.

### Level 3: Documents and Presentations (Pages)

Within each lecture directory, you create individual documents and presentations as markdown files:

```
02-data-structures/
├── _index.md              # Lecture overview
├── arrays-theory.md       # Document about arrays
├── arrays-slides.md       # Presentation on arrays
├── linked-lists.md        # Document
└── lab-exercise.md        # Document
```

Each file has front matter specifying its type:

```markdown
---
title: "Array Theory"
type: "document"
weight: 1
---
```

or

```markdown
---
title: "Array Operations"
type: "presentation"
weight: 2
---
```

## Naming Conventions

While Hugo doesn't enforce naming conventions, following patterns helps maintain organization:

**Lecture Directories:**
- Use number prefixes: `01-`, `02-`, `03-` for ordering
- Use kebab-case: `data-structures`, not `Data_Structures`
- Be descriptive: `03-sorting-algorithms` not `03-sort`

**Content Files:**
- Documents: descriptive names like `theory.md`, `guide.md`, `reference.md`
- Presentations: consider `-slides` suffix like `intro-slides.md`, `demo-slides.md`
- Use kebab-case for multi-word files: `advanced-topics.md`

## Ordering Content

Lykeion uses the `weight` parameter to control ordering:

**Lectures** are ordered by:
1. Directory name (alphabetically/numerically)
2. The `weight` parameter in `_index.md`

**Documents/Presentations** within a lecture are ordered by:
1. The `weight` parameter in front matter
2. File name if weights are equal

Example:

```markdown
---
title: "Introduction"
weight: 1
---
```

Lower weight values appear first. Items without weight are ordered alphabetically by title.

## The Static Directory

The `static/` directory holds assets accessible across your entire course:

```
static/
├── images/
│   ├── diagrams/
│   │   ├── binary-tree.svg
│   │   └── linked-list.png
│   └── screenshots/
│       └── ide-setup.png
├── css/
│   └── custom.css
├── js/
│   └── custom.js
└── downloads/
    └── lab-materials.zip
```

Reference static files in your content using absolute paths from the site root:

```markdown
![Binary Tree](/images/diagrams/binary-tree.svg)

Download the [lab materials](/downloads/lab-materials.zip)
```

## Working with Hugo Archetypes

Hugo archetypes are templates for new content. Lykeion provides archetypes for documents and presentations:

**Create a new lecture:**
```bash
hugo new content/lectures/05-new-topic/_index.md
```

**Create a document in a lecture:**
```bash
hugo new content/lectures/05-new-topic/theory.md --kind document
```

**Create a presentation in a lecture:**
```bash
hugo new content/lectures/05-new-topic/slides.md --kind presentation
```

Archetypes automatically populate front matter with appropriate defaults.

## Example: Building a Complete Lecture

Let's build a complete lecture on "Sorting Algorithms":

**1. Create the lecture directory and index:**

```bash
mkdir -p content/lectures/04-sorting-algorithms
```

Create `content/lectures/04-sorting-algorithms/_index.md`:

```markdown
---
title: "Sorting Algorithms"
description: "Exploring comparison-based and non-comparison sorting"
weight: 4
---

This lecture examines various sorting algorithms, their complexity, and use cases.

## Topics Covered

- Bubble Sort, Selection Sort, Insertion Sort
- Merge Sort and Quick Sort
- Counting Sort and Radix Sort
```

**2. Add a theory document:**

```bash
hugo new content/lectures/04-sorting-algorithms/theory.md --kind document
```

Edit the file:

```markdown
---
title: "Sorting Theory"
type: "document"
description: "Comprehensive guide to sorting algorithms"
showDescription: true
weight: 1
math: true
---

## Introduction

Sorting is a fundamental operation in computer science...
```

**3. Add a presentation:**

```bash
hugo new content/lectures/04-sorting-algorithms/comparison-slides.md --kind presentation
```

Edit the file:

```markdown
---
title: "Comparison-Based Sorting"
type: "presentation"
description: "Visual introduction to bubble, selection, and insertion sort"
showTitleSlide: true
weight: 2
---

---

## What is Sorting?

Arranging elements in a specific order

---[title-content]

## Bubble Sort
%%%

**Algorithm:**
1. Compare adjacent elements
2. Swap if out of order
3. Repeat until sorted

**Complexity:** $O(n^2)$
```

**4. Add supporting materials:**

Place diagrams in `static/images/sorting/`:
- `bubble-sort.gif`
- `merge-sort.png`
- `quick-sort-diagram.svg`

Reference them in your content:

```markdown
![Bubble Sort Animation](/images/sorting/bubble-sort.gif)
```

## Best Practices

**Content Organization:**
1. One lecture = one directory
2. Each lecture has an `_index.md`
3. Group related documents and presentations within lectures
4. Use consistent numbering for lectures

**File Management:**
1. Keep markdown files in `content/`
2. Keep images and assets in `static/`
3. Don't duplicate assets - reference from `static/`
4. Use descriptive file names

**Front Matter:**
1. Always set `type: "document"` or `type: "presentation"`
2. Use `weight` to control ordering within lectures
3. Write clear, concise descriptions
4. Enable features (`math`, `showDescription`) only when needed

**Maintenance:**
1. Review and update `weight` values as content grows
2. Keep directory names consistent (numbering, casing)
3. Document your own conventions in a README
4. Use version control (git) to track changes

## Migration and Restructuring

If you need to reorganize content:

**Moving a document between lectures:**
```bash
mv content/lectures/02-old-topic/doc.md content/lectures/03-new-topic/doc.md
```

**Renaming a lecture:**
```bash
mv content/lectures/05-old-name/ content/lectures/05-new-name/
```

After restructuring, verify:
1. Internal links still work
2. Image paths are correct
3. Weights are appropriate for new ordering

## Summary

Lykeion's structure reflects educational organization:
- **Site** = Course
- **Lecture directories** = Course sections/modules
- **Markdown files** = Individual documents and presentations

This hierarchy makes it easy to:
- Navigate content logically
- Maintain clear organization
- Scale from small courses to large curricula
- Collaborate with multiple instructors

Start with a simple structure and expand as your course grows. The flexibility of Hugo's content organization means you can always refactor later.