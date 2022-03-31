import createNavbar from './modules/side-bar.js';
import createHomePage from './modules/home.js';
import createMenu from './modules/menu.js';
import './style.css';

const mainContainer = document.querySelector('#content');
window.addEventListener('load', () => {
    mainContainer.append(createNavbar());
});
