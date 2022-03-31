import Icon1 from '../cheeseburger.svg';
import Icon2 from '../chocolate-donut.png';
import Icon3 from '../cupcake.png';
import Icon4 from '../hamburger.svg';
import Icon5 from '../hot-dog2.png';
import Icon6 from '../pizza.png';
import Icon7 from '../sandwich.svg';
import Icon8 from '../strawberry-shake.svg';
import Icon9 from '../taco.svg';

function createMenu() {
    const container = document.createElement('div');
    container.setAttribute('id', 'menu-page');
    // item 1
    const item1 = document.createElement('div');/* icon container */
    const food1 = document.createElement('img');/* food icon */
    food1.src = Icon1;
    food1.classList.add('icon');
    const price1 = document.createElement('p');/* display price */
    price1.textContent = '₹ 150';
    item1.append(food1, price1);

    // item 2
    const item2 = document.createElement('div');
    const food2 = document.createElement('img');
    food2.src = Icon2;
    food2.classList.add('icon');
    const price2 = document.createElement('p');
    price2.textContent = '₹ 75';
    item2.append(food2, price2);

    // item 3
    const item3 = document.createElement('div');
    const food3 = document.createElement('img');
    food3.src = Icon3;
    food3.classList.add('icon');
    const price3 = document.createElement('p');
    price3.textContent = '₹ 65';
    item3.append(food3, price3);

    // item 4
    const item4 = document.createElement('div');
    const food4 = document.createElement('img');
    food4.src = Icon4;
    food4.classList.add('icon');
    const price4 = document.createElement('p');
    price4.textContent = '₹ 118';
    item4.append(food4, price4);

    // item 5
    const item5 = document.createElement('div');
    const food5 = document.createElement('img');
    food5.src = Icon5;
    food5.classList.add('icon');
    const price5 = document.createElement('p');
    price5.textContent = '₹ 155';
    item5.append(food5, price5);

    // item 6
    const item6 = document.createElement('div');
    const food6 = document.createElement('img');
    food6.src = Icon6;
    food6.classList.add('icon');
    const price6 = document.createElement('p');
    price6.textContent = '₹ 225';
    item6.append(food6, price6);

    // item 7
    const item7 = document.createElement('div');
    const food7 = document.createElement('img');
    food7.src = Icon7;
    food7.classList.add('icon');
    const price7 = document.createElement('p');
    price7.textContent = '₹ 99';
    item7.append(food7, price7);

    // item 8
    const item8 = document.createElement('div');
    const food8 = document.createElement('img');
    food8.src = Icon8;
    food8.classList.add('icon', 'shake');
    const price8 = document.createElement('p');
    price8.textContent = '₹ 99';
    item8.append(food8, price8);

    // item 9
    const item9 = document.createElement('div');
    const food9 = document.createElement('img');
    food9.src = Icon9;
    food9.classList.add('icon');
    const price9 = document.createElement('p');
    price9.textContent = '₹ 120';
    item9.append(food9, price9);

    container.append(item1, item2, item3, item4, item5, item6, item7, item9, item8);
    return container;
}

export default createMenu