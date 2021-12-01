const cards = document.querySelector('.cards');
const styles = [
    // 'expanded',
    'fanned',
    // 'circles',
    // 'circles-expanded'
];
let colors = ['#fa4d56', '#78a9ff', '#6fdc8c'];

let current = 0;

openCards();

setInterval(() => {
    styles.forEach(className => {
        cards.classList.remove(className);
    });
    openCards();
}, 1000 * 60); // open for 1 minute

function openCards () {
    const randomColor = randomizeColors();

    setTimeout(() => {
        cards.style.setProperty('--left-card-color', randomColor[0]);
        cards.style.setProperty('--center-card-color', randomColor[1]);
        cards.style.setProperty('--right-card-color', randomColor[2]);

        document.querySelector('.cards').classList.add(getCurrentStyle());
    }, 300); 
}

function getCurrentStyle () {
    current += 1;

    if (current >= styles.length) {
        current = 0;
    }

    return styles[current];
}

function randomizeColors () {
    const copyOfColors = [...colors];
    const randomColors = [];

    while (copyOfColors.length > 0) {
        const randomNum = getRandomInt(0, copyOfColors.length - 1);
        randomColors.push(copyOfColors.splice(randomNum, 1))
    }

    colors = randomColors;
    return randomColors;
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}