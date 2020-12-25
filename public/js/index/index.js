import fade from './fade';
import { loadTheme } from '../common/theme';

window.addEventListener('load', () => {
    // Load theme
    loadTheme({
        'front-title-page': true
    });
    // Fade in upon load
    fade();
});