import fade from '../common/fade';
import { toggleTheme } from '../common/theme';
import '../../css/common.css';
import '../../css/projects.css';

window.addEventListener('load', () => {
    // Fade in upon load
    fade();

    // Add theme switching event listener
    // document.getElementById('toggle-theme-input').addEventListener('change', () => {
    //     console.log(1);
    //     toggleTheme();
    // });
});