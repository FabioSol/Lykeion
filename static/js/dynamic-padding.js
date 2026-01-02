document.addEventListener('DOMContentLoaded', function() {
    const document_el = document.querySelector('.document');
    if (!document_el) return;

    function updatePaddingBottom() {
        const headings = document_el.querySelectorAll('h1, h2, h3, h4, h5, h6');
        if (headings.length === 0) return;

        const lastHeading = headings[headings.length - 1];

        let lastSectionHeight = 0;
        let currentElement = lastHeading.nextElementSibling;

        while (currentElement) {
            lastSectionHeight += currentElement.offsetHeight;
            const styles = getComputedStyle(currentElement);
            lastSectionHeight += parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
            currentElement = currentElement.nextElementSibling;
        }

        const vh80 = window.innerHeight * 0.80;
        const vh20 = window.innerHeight * 0.20;
        const requiredPadding = Math.max(vh80 - lastSectionHeight, vh20);

        document_el.style.paddingBottom = `${requiredPadding}px`;
    }

    setTimeout(updatePaddingBottom, 100);

    window.addEventListener('resize', updatePaddingBottom);
});