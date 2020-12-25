import { toggleTheme } from '../common/theme';

window.addEventListener('load', () => {
    // Add theme switching event listener
    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        console.log(1);
        toggleTheme();
    });
});