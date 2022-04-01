
function makeContactPage() {
    const container = document.createElement('div');
    container.setAttribute('id', 'contact-page');

    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Get In Touch';
    subHeading.classList.add('sub-hading');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Contact Us';
    mainHeading.classList.add('main-heading');

    const contactNumber = document.createElement('p');
    contactNumber.textContent = `📞 +917428730894`;

    const address = document.createElement('p');
    address.textContent = `🏠 123, Mittal Chambers, Nariman Point, Maharashtra`;

    const email = document.createElement('p');
    email.textContent = `email : cuisinestreet@gmail.com`;

    container.append(mainHeading, subHeading, contactNumber, address, email);
    return container;
}

export default makeContactPage
