// ----- ANIMATIONS -----

function animate(target, animation) {
    target.classList.add('animate__animated');
    target.classList.add(`animate__${animation}`);

    setTimeout(() => {
        target.classList.remove(`animate__${animation}`);
    }, 1200)
}

const git = document.querySelector('.git');
const htmlIcon = document.querySelector('.html5');
const cssIcon = document.querySelector('.css3');
const sassIcon = document.querySelector('.sass');
const javascriptIcon = document.querySelector('.javascript-icon');
const rubyIcon = document.querySelector('.ruby');

git.addEventListener('mouseenter', () => {
    animate(git, 'rubberBand')
});

htmlIcon.addEventListener('mouseenter', () => {
    animate(htmlIcon, 'bounce');
})

cssIcon.addEventListener('mouseenter', () => {
    animate(cssIcon, 'jello');
})

sassIcon.addEventListener('mouseenter', () => {
    animate(sassIcon, 'flip');
})

javascriptIcon.addEventListener('mouseenter', () => {
    animate(javascriptIcon, 'tada');
})

rubyIcon.addEventListener('mouseenter', () => {
    animate(rubyIcon, 'swing');
})