// Easter egg script for keyboard input 42

let typeArray = [];
let secretCode = false;

function checkMatch() {
    let check = typeArray.slice(0, 2).reverse().join('');

    if(check === '42') {
        secretCode = true;
    }
}

function handleEasterEgg() {
    document.body.innerHTML = "";

    let eggBox = document.createElement('div');
    eggBox.className = 'easter-egg__box';
    let egg = document.createElement('span');
    egg.className = 'easter-egg';
    egg.textContent = '42';

    eggBox.appendChild(egg);
    document.body.appendChild(eggBox);
}

window.addEventListener('keyup', (e) => {
    typeArray.unshift(e.key);

    checkMatch();

    if (secretCode) {
        handleEasterEgg();
    }
})