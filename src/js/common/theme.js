export const toggleTheme = () => {
    if (document.body.classList.contains('light')) {
        // Switch to dark theme.
        document.body.classList.replace('light', 'dark');

        fetch('/theme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                theme: 'dark'
            })
        });
    } else {
        // Switch to light theme.
        document.body.classList.replace('dark', 'light');

        fetch('/theme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                theme: 'light'
            })
        });
    }
};