document.addEventListener('DOMContentLoaded', function() {
    const presentation = document.querySelector('.presentation');
    if (!presentation) return;

    const slides = presentation.querySelectorAll('.slide-wrapper');
    if (slides.length === 0) return;

    const indicator = document.createElement('div');
    indicator.className = 'slide-indicator';
    document.body.appendChild(indicator);

    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.className = 'slide-dot';
        dot.setAttribute('data-slide', index);

        dot.addEventListener('click', () => {
            slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        });

        indicator.appendChild(dot);
    });

    const dots = indicator.querySelectorAll('.slide-dot');

    function updateActiveDot() {
        const scrollPosition = presentation.scrollLeft;
        const slideWidth = slides[0].offsetWidth;
        const currentSlide = Math.round(scrollPosition / slideWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    presentation.addEventListener('scroll', updateActiveDot);

    updateActiveDot();

    document.addEventListener('keydown', function(e) {
        if (!presentation.matches(':hover') && document.activeElement !== presentation) return;

        const currentScroll = presentation.scrollLeft;
        const slideWidth = slides[0].offsetWidth;
        const currentSlide = Math.round(currentScroll / slideWidth);

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (currentSlide < slides.length - 1) {
                slides[currentSlide + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSlide > 0) {
                slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        } else if (e.key === 'Home') {
            e.preventDefault();
            slides[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        } else if (e.key === 'End') {
            e.preventDefault();
            slides[slides.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    });
});