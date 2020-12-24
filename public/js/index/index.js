import fade from './fade';
import { loadTheme, toggleTheme } from '../common/theme';

window.addEventListener('load', () => {
    // Load theme
    loadTheme();
    // Fade in upon load
    fade();
});