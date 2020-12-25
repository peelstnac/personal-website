import fade from './fade';
import { toggleTheme } from '../common/theme';

window.addEventListener('load', () => {
    // Fade in upon load
    fade();

    // Add theme switching event listener
    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        toggleTheme();
    });
});