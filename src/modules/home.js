import Food1 from '../assets/images/food1.jpg';
import Food2 from '../assets/images/food2.jpg';
import Food3 from '../assets/images/food3.jpg';

const foodArr = [Food1, Food2, Food3];

function createHomePage() {
    const container = document.createElement('div');
    container.setAttribute('id', 'home-page');

    const image = document.createElement('img');

    // set interval to change image
    setInterval(() => {
        let random = Math.floor(Math.random() * foodArr.length);
        image.src = foodArr[random];
        container.append(image);
    }, 2500);

    return container;
}

export default createHomePage