export const loadTheme = () => {
    var theme = localStorage.getItem('theme');
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme);
    }

    // Switch the button if theme is dark
    if (theme === 'dark') {
        toggleTheme();
        document.getElementById('toggle-theme-input').setAttribute('checked', '');
    }

    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        toggleTheme();
    });
};

export const toggleTheme = () => {
    if (document.body.classList.contains('light')) {
        // Switch to dark theme
        localStorage.setItem('theme', 'dark');
        document.body.classList.replace('light', 'dark');
    } else {
        // Switch to light theme
        localStorage.setItem('theme', 'light');
        document.body.classList.replace('dark', 'light');
    }
};