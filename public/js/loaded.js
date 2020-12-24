const loaded = () => {

    document.body.style.opacity = "1";

    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        var page = document.getElementById('front-title-page');
        if (page.classList.contains('light')) {
            page.classList.replace('light', 'dark');
        } else {
            page.classList.replace('dark', 'light');
        }
    });
}