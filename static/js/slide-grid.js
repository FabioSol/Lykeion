document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slide-kind-title-content').forEach(container => {
        const childCount = container.children.length - 1;
        if (childCount > 0) {
            container.style.gridTemplateColumns = `repeat(${childCount}, minmax(0, 1fr))`;
        }
    });
});