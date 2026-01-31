class TitleFitter {
    constructor(selector, maxRem = 4, minRem = 1.5) {
        this.selector = selector;
        this.maxRem = maxRem;
        this.minRem = minRem;
        this.element = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.element = document.querySelector(this.selector);
        if (this.element) {
            this.fit();
            window.addEventListener('resize', () => this.fit());
        }
    }

    fit() {
        if (!this.element) return;

        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const containerWidth = this.element.parentElement.clientWidth;

        let fontSize = this.maxRem * rootFontSize;
        this.element.style.whiteSpace = 'nowrap';
        this.element.style.fontSize = fontSize + 'px';

        // Reduce font size until it fits OR reaches minimum
        while (this.element.scrollWidth > containerWidth && fontSize > this.minRem * rootFontSize) {
            fontSize -= 1;
            this.element.style.fontSize = fontSize + 'px';
        }

        // Convert back to rem
        this.element.style.fontSize = fontSize / rootFontSize + 'rem';

        // If we hit minimum font size, allow wrapping
        if (fontSize <= this.minRem * rootFontSize) {
            this.element.style.whiteSpace = 'normal';
        }
    }
}

// Initialize
new TitleFitter('.root header h1');
