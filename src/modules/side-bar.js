import Icon from '../assets/logo.png';

function createNavbar() {
    const container = document.createElement('div');
    container.setAttribute('id', 'navbar');

    const logo = new Image();
    logo.src = Icon;
    logo.alt = 'Logo';
    logo.setAttribute('id', 'logo');

    const home = document.createElement('a');
    home.setAttribute('href', '#');
    home.textContent = 'home';
    home.setAttribute('id', 'home-link');
    home.classList.add('nav-link');
    const homeDiv = document.createElement('div');
    homeDiv.appendChild(home);

    const menu = document.createElement('a');
    menu.setAttribute('href', '#');
    menu.textContent = 'menu';
    menu.setAttribute('id', 'menu-link');
    menu.classList.add('nav-link');
    const menuDiv = document.createElement('div');
    menuDiv.append(menu);

    const contact = document.createElement('a');
    contact.setAttribute('href', '#');
    contact.textContent = 'contact';
    contact.setAttribute('id', 'contact-link');
    contact.classList.add('nav-link');
    const contactDiv = document.createElement('div');
    contactDiv.append(contact);

    container.append(logo, homeDiv, menuDiv, contactDiv);
    return container;
}

export default createNavbar