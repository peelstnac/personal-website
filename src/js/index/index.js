import fade from '../common/fade';
import { toggleTheme } from '../common/theme';
import '../../css/common.css';
import '../../css/index.css';

window.addEventListener('load', () => {
    // Fade in upon load
    fade();

    // Add theme switching event listener
    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        toggleTheme();
    });
});