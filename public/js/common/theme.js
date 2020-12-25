export const loadTheme = (config) => {
    if (config && config['front-title-page']) {
        document.getElementById('front-title-page').classList.add('no-transition');
        document.querySelectorAll('.icon').forEach((el) => {
            el.classList.add('no-transition');
        })
        setTimeout(() => {
            document.getElementById('front-title-page').classList.remove('no-transition');
            document.querySelectorAll('.icon').forEach((el) => {
                el.classList.remove('no-transition');
            })
        }, 100);
    }

    var theme = localStorage.getItem('theme');
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme);
    }

    // Switch the button if theme is dark
    if (theme === 'dark') {
        toggleTheme();
        document.getElementById('toggle-theme-input').checked = true;
    } else {
        document.getElementById('toggle-theme-input').checked = false;
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