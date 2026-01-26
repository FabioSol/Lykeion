function fitTitle(el, maxRem = 4, minRem = 1.5) {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // px
    const containerWidth = el.parentElement.clientWidth;

    let fontSize = maxRem * rootFontSize;
    el.style.whiteSpace = "nowrap"; // start with nowrap
    el.style.fontSize = fontSize + "px";

    // Reduce font size until it fits OR reaches minimum
    while (el.scrollWidth > containerWidth && fontSize > minRem * rootFontSize) {
        fontSize -= 1;
        el.style.fontSize = fontSize + "px";
    }

    // Convert back to rem
    el.style.fontSize = fontSize / rootFontSize + "rem";

    // If we hit minimum font size, allow wrapping
    if (fontSize <= minRem * rootFontSize) {
        el.style.whiteSpace = "normal";
    }
}

const h1 = document.querySelector(".root header h1");
fitTitle(h1);

window.addEventListener("resize", () => fitTitle(h1));