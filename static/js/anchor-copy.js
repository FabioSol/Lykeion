document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('.heading-anchor');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const url = window.location.origin + window.location.pathname + this.getAttribute('href');
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            navigator.clipboard.writeText(url).then(() => {
                const originalOpacity = this.style.opacity;
                this.style.opacity = '1';

                setTimeout(() => {
                    this.style.opacity = originalOpacity;
                }, 200);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, '#' + targetId);
            }
        });
    });
});