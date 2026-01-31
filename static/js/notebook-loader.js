// Custom Jupyter Notebook Renderer
// Renders notebooks without external dependencies

(function() {
  // Render a single notebook cell
  function renderCell(cell) {
    const cellDiv = document.createElement('div');
    cellDiv.className = 'nb-cell';

    if (cell.cell_type === 'markdown') {
      cellDiv.className += ' nb-markdown-cell';
      const content = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
      cellDiv.innerHTML = renderMarkdown(content);
    } else if (cell.cell_type === 'code') {
      cellDiv.className += ' nb-code-cell';

      // Check if any output is an error
      const hasError = cell.outputs && cell.outputs.some(function(output) {
        return output.output_type === 'error';
      });

      if (hasError) {
        cellDiv.classList.add('has-error');
      }

      // Add execution count if available
      if (cell.execution_count !== null && cell.execution_count !== undefined) {
        cellDiv.setAttribute('data-execution-count', cell.execution_count);
      }

      // Render source code
      const sourceDiv = document.createElement('pre');
      const codeElem = document.createElement('code');
      const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
      codeElem.textContent = source;
      sourceDiv.appendChild(codeElem);
      cellDiv.appendChild(sourceDiv);

      // Render outputs
      if (cell.outputs && cell.outputs.length > 0) {
        const outputsDiv = document.createElement('div');
        outputsDiv.className = 'nb-output';

        cell.outputs.forEach(function(output) {
          const outputElem = renderOutput(output);
          if (outputElem) {
            outputsDiv.appendChild(outputElem);
          }
        });

        cellDiv.appendChild(outputsDiv);
      }
    }

    return cellDiv;
  }

  // Render cell output
  function renderOutput(output) {
    const div = document.createElement('div');

    if (output.output_type === 'stream') {
      const pre = document.createElement('pre');
      const text = Array.isArray(output.text) ? output.text.join('') : output.text;
      pre.textContent = text;
      div.appendChild(pre);
    } else if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
      if (output.data) {
        // Try to render in order of preference: HTML, PNG, Text
        if (output.data['text/html']) {
          const htmlContent = Array.isArray(output.data['text/html'])
            ? output.data['text/html'].join('')
            : output.data['text/html'];
          div.innerHTML = htmlContent;
        } else if (output.data['image/png']) {
          const img = document.createElement('img');
          img.src = 'data:image/png;base64,' + output.data['image/png'];
          div.appendChild(img);
        } else if (output.data['image/jpeg']) {
          const img = document.createElement('img');
          img.src = 'data:image/jpeg;base64,' + output.data['image/jpeg'];
          div.appendChild(img);
        } else if (output.data['text/plain']) {
          const pre = document.createElement('pre');
          const text = Array.isArray(output.data['text/plain'])
            ? output.data['text/plain'].join('')
            : output.data['text/plain'];
          pre.textContent = text;
          div.appendChild(pre);
        }
      }
    } else if (output.output_type === 'error') {
      div.className = 'nb-error-output';
      const pre = document.createElement('pre');
      const errorText = output.traceback
        ? output.traceback.join('\n')
        : (output.ename + ': ' + output.evalue);
      pre.textContent = stripAnsi(errorText);
      div.appendChild(pre);
    }

    return div.children.length > 0 ? div : null;
  }

  // Basic markdown renderer (handles common cases)
  function renderMarkdown(md) {
    // Use marked.js if available, otherwise fallback to basic rendering
    if (typeof marked !== 'undefined') {
      return marked.parse(md);
    }

    // Fallback basic renderer
    md = md.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    md = md.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    md = md.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    md = md.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    md = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    md = md.replace(/\*(.+?)\*/g, '<em>$1</em>');
    md = md.replace(/`([^`]+)`/g, '<code>$1</code>');
    md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    md = md.replace(/\n\n/g, '</p><p>');
    md = md.replace(/\n/g, '<br>');

    return '<p>' + md + '</p>';
  }

  // Strip ANSI escape codes
  function stripAnsi(str) {
    return str.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');
  }

  // Initialize all notebooks on the page
  function initNotebooks() {
    const containers = document.querySelectorAll('.notebook-container[data-notebook-url]');

    containers.forEach(function(container) {
      const url = container.getAttribute('data-notebook-url');
      const errorDiv = container.nextElementSibling;

      // Show loading state
      container.innerHTML = '<div class="notebook-loading"><span class="spinner"></span> Loading notebook...</div>';

      fetch(url)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to fetch notebook (HTTP ' + response.status + ')');
          }
          return response.json();
        })
        .then(function(notebook) {
          container.innerHTML = '';

          // Render all cells
          if (notebook.cells && Array.isArray(notebook.cells)) {
            notebook.cells.forEach(function(cell) {
              const cellElem = renderCell(cell);
              container.appendChild(cellElem);
            });

            // Trigger MathJax to render LaTeX if available
            if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
              MathJax.typesetPromise([container]).catch(function(err) {
                console.warn('MathJax typeset error:', err);
              });
            }
          } else {
            throw new Error('Invalid notebook format');
          }
        })
        .catch(function(error) {
          console.error('Notebook loading error:', error);
          container.style.display = 'none';
          if (errorDiv && errorDiv.classList.contains('notebook-error')) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML =
              '<strong>Error loading notebook:</strong> ' + error.message + '<br>' +
              '<a href="' + url + '" download class="download-button">Download notebook file</a>';
          }
        });
    });
  }

  // Start loading when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotebooks);
  } else {
    initNotebooks();
  }
})();