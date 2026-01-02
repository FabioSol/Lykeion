document.addEventListener('DOMContentLoaded', function() {
    const document_el = document.querySelector('.document');
    if (!document_el) return;

    const headings = document_el.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) return;

    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    const mainWrapper = document.querySelector('.main-wrapper');
    if (mainWrapper) {
        mainWrapper.appendChild(indicator);
    } else {
        document.body.appendChild(indicator);
    }

    headings.forEach((heading, index) => {
        const dot = document.createElement('div');
        dot.className = 'scroll-dot';
        dot.setAttribute('data-target', heading.id);

        const level = heading.tagName.substring(1);
        dot.setAttribute('data-level', level);

        const label = document.createElement('span');
        label.className = 'scroll-dot-label';
        const headingClone = heading.cloneNode(true);
        const anchor = headingClone.querySelector('.heading-anchor');
        if (anchor) anchor.remove();
        label.textContent = headingClone.textContent.replace(/^[#\s]+/, '').trim();
        dot.appendChild(label);

        dot.addEventListener('click', () => {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        indicator.appendChild(dot);
    });

    const dots = indicator.querySelectorAll('.scroll-dot');

    function updateActiveDot() {
        const scrollPosition = document_el.scrollTop + window.innerHeight * 0.25;

        let activeIndex = 0;
        headings.forEach((heading, index) => {
            const rect = heading.getBoundingClientRect();
            const absoluteTop = rect.top + document_el.scrollTop;

            if (absoluteTop <= scrollPosition) {
                activeIndex = index;
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    document_el.addEventListener('scroll', updateActiveDot);

    updateActiveDot();
});