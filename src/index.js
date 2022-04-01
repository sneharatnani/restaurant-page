import createNavbar from './modules/side-bar.js';
import createHomePage from './modules/home.js';
import createMenu from './modules/menu.js';
import makeContactPage from './modules/contact.js';
import './style.css';

const mainContainer = document.querySelector('#content');
window.addEventListener('load', () => {
    mainContainer.append(createNavbar(), createHomePage());
});

document.body.addEventListener('click', (e) => {
    // event for home page
    if (e.target.id === 'home-link') {
        mainContainer.textContent = '';
        mainContainer.append(createNavbar(), createHomePage());
    }
    // event for menu page
    else if (e.target.id === 'menu-link') {
        mainContainer.textContent = '';
        mainContainer.append(createNavbar(), createMenu());
    }
    // for contact page
    else if (e.target.id === 'contact-link') {
        mainContainer.textContent = '';
        mainContainer.append(createNavbar(), makeContactPage());
    }
});


