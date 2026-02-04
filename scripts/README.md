# Lykeion Scripts

This directory contains utility scripts for the Lykeion theme.

## Available Scripts

### generate-content.sh

Automatically generates Hugo markdown pages for PDF files and Jupyter notebooks found in your content directory.

**Usage:**

```bash
# From theme directory (during development)
./scripts/generate-content.sh

# From project root (after installation)
./generate-content.sh

# With custom content directory
./generate-content.sh path/to/content
```

**What it does:**

- Scans for `*.pdf` and `*.ipynb` files in your content directory
- Creates corresponding `.gen.md` files with proper frontmatter
- Generates human-readable titles from filenames
- Uses the `{{< pdf >}}` and `{{< notebook >}}` shortcodes automatically

**Generated files:**

- `slides.pdf` → `slides.gen.md`
- `analysis.ipynb` → `analysis.gen.md`

**Important:** Add `*.gen.md` to your `.gitignore` since these are auto-generated.

### install-hooks.sh

Installation helper that sets up the content generator in your project.

**Usage:**

```bash
# From anywhere
bash -c "$(curl -fsSL https://raw.githubusercontent.com/FabioSol/Lykeion/main/scripts/install-hooks.sh)"

# Or locally
./scripts/install-hooks.sh
```

**What it does:**

- Creates a local `generate-content.sh` in your project root
- Provides integration examples for Makefile, package.json, and GitHub Actions
- Shows how to add `*.gen.md` to `.gitignore`

## Integration Examples

### Makefile

```makefile
generate:
	./generate-content.sh

serve: generate
	hugo serve

build: generate
	hugo build
```

### package.json

```json
{
  "scripts": {
    "generate": "./generate-content.sh",
    "dev": "npm run generate && hugo serve",
    "build": "npm run generate && hugo build"
  }
}
```

### GitHub Actions

```yaml
- name: Generate content for PDFs and Notebooks
  run: |
    chmod +x ./generate-content.sh
    ./generate-content.sh
```

## Development

When working on the theme itself, use the Makefile in the root directory:

```bash
make generate  # Run content generation
make demo      # Generate content and start server
make build     # Generate content and build site
```