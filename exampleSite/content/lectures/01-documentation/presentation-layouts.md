---
title: "Presentation Layouts"
date: 2025-12-31
draft: false
type: "presentation"
description: "Visual demonstration of Lykeion's three slide layout types"
showTitleSlide: true
defaultSlideKind: "content"
weight: 4
---

---
## Three Layout Types

Lykeion presentations support three layout types to organize content effectively

- `[title]` - Emphasizes a key message with a large title and description
- `[title-content]` - Combines a header with multiple horizontal sections
- `[content]` - Pure horizontal sections for direct comparison

the layout is chosen by adding the modifier in square brackets at the start of a slide `---[modifier]`

---

let's try the title layout first like this:

```markdown
\---[title]

## Title

Title with Description Layout

\---
```

---[title]

## Title

Title with Description Layout

---

## How `[title]` Works

The heading becomes large and prominent

Content below displays as a description or subtitle

Perfect for section breaks and key statements

---

now let's try the content layout like this:

```markdown
\---[content]

## Title

This is the content layout
\--- 
```

---[content]

## Title
This is the content layout

---

not very, exciting right? this is because we only have one content section. let's add more sections using the `\%%%` separator like this:

```markdown
\---[content]
Section 1
\%%%
Section 2
\%%%
Section 3
\--- 
```

---[content]

Section 1
%%%
Section 2
%%%
Section 3
---

## How `[content]` Works
Divides the slide into equal horizontal sections

Great for comparing multiple concepts side-by-side

Each section is separated by `\%%%` and shares equal space

Each section is vertically centered for balance

---

finally let's try the title-content layout like this:

```markdown
\---[title-content]
## Title
This is the title-content layouts first section
\%%%
This is the second section
\%%%
This is the third section
\--- 
```
---[title-content]
## Title, first section
%%%
This is the second section
%%%
This is the third section
---

## How `[title-content]` Works
The first section appears at the top as a header

Remaining sections are equally spaced horizontally below as in content. 

Ideal for combining a title with multiple related points

---[title]

## Nice Patterns

Here are some nice patterns to try with layouts:

---

if you want a weaker separator that `[title]`, use a two section `[content]` with a first level heading:

```markdown
\---[content]
# Section Title
\%%%
Supporting details go here.
\--- 
```

---[content]

# Section Title

%%%

Supporting details go here.

---

for more spacing between sections, use `[title-content]` or `[content]` with empty sections:

```markdown
\---[content]
this is a part of the content.

lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

\%%%


\%%%
this is another part of the content

lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
\---
```

---[content]
this is a part of the content.

lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

%%%


%%%
this is another part of the content

lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

---

you can also add content to the top section of `[title-content]` like this:

```markdown
\---[title-content]
# Title
you could add text in the top section.

Lykeion supports:
- Presentations
- Documents

\%%%
## Presentations
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

\%%%
## Documents
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

\---
```

---[title-content]
# Title
you could add text in the top section. 

Lykeion supports:
- Presentations
- Documents

%%%
## Presentations
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

%%%
## Documents
lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

---
