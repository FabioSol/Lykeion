/**
 * ThemeManager - Handles dark/light theme switching with system preference support
 */
class ThemeManager {
    constructor() {
        this.storageKey = 'lykeion-theme';
        this.theme = this.getInitialTheme();
        this.applyTheme(this.theme);
        this.setupKeyboardShortcut();
        this.watchStorageChanges();
    }

    /**
     * Determine initial theme based on localStorage or system preference
     * @returns {string} 'light' or 'dark'
     */
    getInitialTheme() {
        // Check localStorage first
        const stored = localStorage.getItem(this.storageKey);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        // Fall back to system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    /**
     * Apply theme to document and update manifest
     * @param {string} theme - 'light' or 'dark'
     */
    applyTheme(theme) {
        document.documentElement.style.colorScheme = theme;
        this.theme = theme;
        this.updateManifest(theme);
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    /**
     * Set specific theme and persist to localStorage
     * @param {string} theme - 'light' or 'dark'
     */
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn(`Invalid theme: ${theme}. Use 'light' or 'dark'.`);
            return;
        }

        this.applyTheme(theme);
        localStorage.setItem(this.storageKey, theme);
    }

    /**
     * Update meta theme-color for mobile browsers
     * @param {string} theme - 'light' or 'dark'
     */
    updateManifest(theme) {
        const themeColor = theme === 'dark' ? '#1a1a1a' : '#f9f9f9';
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        metaThemeColor.content = themeColor;
    }

    /**
     * Listen to system preference changes and update theme if in sync
     */
    watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            const newSystemPreference = e.matches ? 'dark' : 'light';
            const oldSystemPreference = !e.matches ? 'dark' : 'light';

            // Only apply if current theme matches old system preference (unlocked)
            if (this.theme === oldSystemPreference) {
                // Currently in sync, stay in sync
                this.applyTheme(newSystemPreference);
                localStorage.setItem(this.storageKey, newSystemPreference);
            }
            // If locked (theme !== old system pref), ignore the change
        });
    }

    /**
     * Setup keyboard shortcut to toggle theme (Cmd+K)
     */
    setupKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K to toggle theme
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    /**
     * Listen to storage events from other tabs for cross-tab sync
     */
    watchStorageChanges() {
        window.addEventListener('storage', (e) => {
            // Only react to our theme key changes from other tabs
            if (e.key === this.storageKey && e.newValue) {
                if (e.newValue === 'light' || e.newValue === 'dark') {
                    this.theme = e.newValue;
                    this.applyTheme(e.newValue);
                }
            }
        });
    }
}

// Create singleton instance
export const themeManager = new ThemeManager();
themeManager.watchSystemPreference();

// Global access for easy testing and future UI
window.toggleTheme = () => themeManager.toggleTheme();
