// ----- HTML ELEMENTS -----

const hamburger = document.querySelector('.hamburger-div');
const navList = document.querySelector('.nav__list');
const resume = document.querySelector('.resume');
const navItem = Array.from(document.querySelectorAll('.nav__item'));
const navLink = Array.from(document.querySelectorAll('.nav__link'));
const navBar = document.querySelector('.nav');
const main = document.querySelector('main');
const hamburgerLines = Array.from(document.querySelectorAll('.hamburger-line'));
const scrollDownIcon = document.querySelector('.hero__scroll-down');
const header = document.querySelector('header');
const sections = [
    document.querySelector('.about'),
    document.querySelector('.work'),
    document.querySelector('.contact')
];

// ----- OPEN/CLOSE HAMBURGER MENU -----

let hamburgerOpened = false;
let hamburgerOpen = false;

hamburger.addEventListener('click', () => {
    
    // First time opened --> Restyle bar
    if (!hamburgerOpened) {
        navList.style.display = 'flex';
        navList.style['flex-direction'] = 'column';
        navList.style['position'] = 'absolute';
        navList.style['top'] = '15vh';
        navList.style['left'] = '2vw';

        // Style links
        navLink.forEach(link => {
            link.style['font-size'] = '2rem';
        });

        // Pad links
        navItem.forEach(item  => {
            item.style['padding-bottom'] = '8vh';
        });

        // Style resume
        resume.style['font-size'] = '2rem';

        hamburgerOpened = true;
    }

    function closeNav() {
        navList.style.display = 'none';
        main.style.opacity = '1';

        hamburgerLines.forEach(line => line.classList.remove('active'));
        hamburgerOpen = false;
    }

    // Subsequent opening/closes
    if (hamburgerOpen) {
        closeNav()
    } else {
        navList.style.display = 'flex';
        navList.style['z-index'] = '100';
        main.style.opacity = '.1';

        hamburgerLines.forEach(line => line.classList.add('active'));
        hamburgerOpen = true;
    }

    // Close drop down when link clicked
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        })
    })

    // Close nav when touch outside links
    window.addEventListener('click', (e) => {
        if (navLink.includes(e.target)) {
            return
        } else if (e.target == hamburger || hamburgerLines.includes(e.target)) {
           return
        } else {
            closeNav();
        }
    })
})

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