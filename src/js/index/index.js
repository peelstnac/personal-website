import fade from '../common/fade';
import { toggleTheme } from '../common/theme';
import Parallax from 'parallax-js';
import '../../css/common.css';
import '../../css/index.css';

window.addEventListener('load', () => {
    // Fade in upon load
    fade();

    var scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);

    // Add theme switching event listener
    document.getElementById('toggle-theme-input').addEventListener('change', () => {
        toggleTheme();
    });
});