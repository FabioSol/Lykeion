#!/bin/bash
# Auto-generate Hugo content pages for PDFs and Jupyter notebooks
# This script finds PDFs and .ipynb files in content directories and creates
# corresponding .md files so Hugo can render them as pages

CONTENT_DIR="${1:-exampleSite/content}"
STATIC_DIR="${2:-exampleSite/static}"

echo "Cleaning up old generated files..."
find "$CONTENT_DIR" -name "*.gen.md" -type f -delete

echo "Scanning for PDFs and notebooks in $CONTENT_DIR..."

# Process PDFs
find "$CONTENT_DIR" -name "*.pdf" -type f | while read -r pdf_path; do
    # Get the markdown path (same name, .gen.md extension)
    md_path="${pdf_path%.pdf}.gen.md"

    # Get filename and create title
    filename=$(basename "$pdf_path" .pdf)
    title=$(echo "$filename" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')

    # Get relative path from content dir for the PDF
    rel_path="${pdf_path#$CONTENT_DIR/}"
    pdf_url="$rel_path"

    # Create markdown file with frontmatter
    cat > "$md_path" << EOF
---
title: "$title"
type: embedded
embedded_type: pdf
slug: "$filename"
---

{{< pdf "$pdf_url" >}}
EOF

    echo "  Generated: $md_path"
done

# Process Jupyter Notebooks
find "$CONTENT_DIR" -name "*.ipynb" -type f | while read -r notebook_path; do
    # Get the markdown path (same name, .gen.md extension)
    md_path="${notebook_path%.ipynb}.gen.md"

    # Get filename and create title
    filename=$(basename "$notebook_path" .ipynb)
    title=$(echo "$filename" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')

    # Get relative path from content dir
    rel_path="${notebook_path#$CONTENT_DIR/}"
    notebook_url="$rel_path"

    # Create markdown file with frontmatter
    cat > "$md_path" << EOF
---
title: "$title"
type: embedded
embedded_type: notebook
slug: "$filename"
---

{{< notebook "$notebook_url" >}}
EOF

    echo "  Generated: $md_path"
done

echo "Done!"