class SpatialNavigator {
    constructor() {
        this.nullRoutes = { up: null, down: null, left: null, right: null };
        this.routes = { up: null, down: null, left: null, right: null };
        this.overscrollTriggered = { up: false, down: false, left: false, right: false };
        this.pendingConfig = null;
        this.initialized = false;
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
        this.initialized = true;
        this.initListeners();
        this.createHints();

        // Apply pending config if setMap was called before DOM ready
        if (this.pendingConfig) {
            this.routes = { ...this.nullRoutes, ...this.pendingConfig };
            this.updateHints();
            this.pendingConfig = null;
        }
    }

    createHints() {
        const container = document.createElement('div');
        container.className = 'nav-hints';
        container.innerHTML = `
            <div class="nav-hint nav-hint-up" data-direction="up">↑</div>
            <div class="nav-hint nav-hint-down" data-direction="down">↓</div>
            <div class="nav-hint nav-hint-left" data-direction="left">←</div>
            <div class="nav-hint nav-hint-right" data-direction="right">→</div>
        `;
        document.body.appendChild(container);
        this.hintsContainer = container;
    }

    updateHints() {
        if (!this.hintsContainer) return;

        const hints = this.hintsContainer.querySelectorAll('.nav-hint');
        hints.forEach(hint => {
            const direction = hint.getAttribute('data-direction');
            if (this.routes[direction]) {
                hint.classList.add('active');
            } else {
                hint.classList.remove('active');
            }
        });
    }

    setMap(config) {
        if (this.initialized) {
            this.routes = { ...this.nullRoutes, ...config };
            this.updateHints();
        } else {
            // Queue config until DOM is ready
            this.pendingConfig = config;
        }
    }

    initListeners() {
        window.addEventListener('keydown', (e) => this.handleKey(e));

        this.attachOverscrollListener();
    }

    attachOverscrollListener() {
        window.addEventListener('wheel', (e) => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const maxScrollLeft = document.documentElement.scrollWidth - window.innerWidth;

            const absX = Math.abs(e.deltaX);
            const absY = Math.abs(e.deltaY);

            const isVerticalDominant = absY > absX * 5 && absY > 5;
            const isHorizontalDominant = absX > absY * 5 && absX > 5;

            if (isVerticalDominant) {
                if (e.deltaY < 0 && scrollTop === 0 && !this.overscrollTriggered.up) {
                    this.overscrollTriggered.up = true;
                    this.executeNavigation('up');
                    setTimeout(() => { this.overscrollTriggered.up = false; }, 500);
                }
                else if (e.deltaY > 0 && scrollTop >= maxScrollTop && !this.overscrollTriggered.down) {
                    this.overscrollTriggered.down = true;
                    this.executeNavigation('down');
                    setTimeout(() => { this.overscrollTriggered.down = false; }, 500);
                }
            }

            if (isHorizontalDominant) {
                if (e.deltaX < 0 && scrollLeft === 0 && !this.overscrollTriggered.left) {
                    this.overscrollTriggered.left = true;
                    this.executeNavigation('left');
                    setTimeout(() => { this.overscrollTriggered.left = false; }, 500);
                }
                else if (e.deltaX > 0 && scrollLeft >= maxScrollLeft && !this.overscrollTriggered.right) {
                    this.overscrollTriggered.right = true;
                    this.executeNavigation('right');
                    setTimeout(() => { this.overscrollTriggered.right = false; }, 500);
                }
            }
        }, { passive: true });

        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;

        window.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const touchDuration = Date.now() - touchStartTime;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);

            const minDistance = 50;
            const maxDuration = 500; // ms

            if (touchDuration > maxDuration) return;
            if (absX < minDistance && absY < minDistance) return;

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const maxScrollLeft = document.documentElement.scrollWidth - window.innerWidth;

            const isVertical = absY > absX * 2;
            const isHorizontal = absX > absY * 2;

            if (isVertical) {
                if (deltaY > 0 && scrollTop === 0 && !this.overscrollTriggered.up) {
                    this.overscrollTriggered.up = true;
                    this.executeNavigation('up');
                    setTimeout(() => { this.overscrollTriggered.up = false; }, 500);
                }
                else if (deltaY < 0 && scrollTop >= maxScrollTop && !this.overscrollTriggered.down) {
                    this.overscrollTriggered.down = true;
                    this.executeNavigation('down');
                    setTimeout(() => { this.overscrollTriggered.down = false; }, 500);
                }
            }

            if (isHorizontal) {
                if (deltaX > 0 && scrollLeft === 0 && !this.overscrollTriggered.left) {
                    this.overscrollTriggered.left = true;
                    this.executeNavigation('left');
                    setTimeout(() => { this.overscrollTriggered.left = false; }, 500);
                }
                else if (deltaX < 0 && scrollLeft >= maxScrollLeft && !this.overscrollTriggered.right) {
                    this.overscrollTriggered.right = true;
                    this.executeNavigation('right');
                    setTimeout(() => { this.overscrollTriggered.right = false; }, 500);
                }
            }
        }, { passive: true });
    }

    handleKey(e) {
        const keyMap = {
            ArrowUp: 'up',
            ArrowDown: 'down',
            ArrowLeft: 'left',
            ArrowRight: 'right'
        };

        if (keyMap[e.key]) {
            this.executeNavigation(keyMap[e.key]);
        }
    }

    executeNavigation(direction) {
        const target = this.routes[direction];
        if (target) {
            console.log(`Navigating ${direction} to ${target}`);
            document.body.classList.add(`slide-out-${direction}`);
            setTimeout(() => window.location.href = target, 300);
        }
    }
}

export const AppNav = new SpatialNavigator();