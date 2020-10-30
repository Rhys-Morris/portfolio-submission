// ----- VARIABLES -----
const scrollRight = document.querySelector('.slideshow-container__right');
const scrollLeft = document.querySelector('.slideshow-container__left');
const imageContainer = document.querySelector('.slideshow-container__image');
const selectors = Array.from(document.querySelectorAll('.slideshow-selector')); 
const images = Array.from(document.querySelectorAll('.slideshow-container__post'))
const headers = Array.from(document.querySelectorAll('.slideshow-container__post__header'))
let currentImageNumber = 1;

// ----- FUNCTIONS -----

// Update slideshow selectors
function updateSelected() {
    selectors.forEach(selector => selector.style["background-color"] = '#040721')

    let toSelect = currentImageNumber -1;
    selectors[toSelect].style["background-color"] = '#7accff';
}

/*function timedScroll() {
    setTimeout(() => {
        let currentImage = images[currentImageNumber - 1];
        let nextImage = images[currentImageNumber];
        let currentSelector = selectors[currentImageNumber - 1];
        let nextSelector = selectors[currentImageNumber];
        let currentHeader = headers[currentImageNumber - 1];
        let nextHeader = headers[currentImageNumber];

        if (currentImageNumber == 5) {
            nextHeader = headers[0];
            nextImage = images[0];
            nextSelector = selectors[0]
            currentImageNumber = 0;
        }
        
        currentImage.style.flex = '0';
        nextImage.style.flex = '6';
        currentSelector.style["background-color"] = "#040721";
        nextSelector.style["background-color"] = "#7accff";
        currentHeader.style.visbility = 'hidden';
        nextHeader.style.visibility = 'visible';
        
        currentImageNumber++;     

        timedScroll();
    }, 10000);
} */

// ----- EVENT LISTENERS -----
scrollRight.addEventListener('click', () => {
    console.log(currentImageNumber);
    const currentImage = document.querySelector(`.post--${currentImageNumber}`);
    const currentHeader = document.querySelector(`.header--${currentImageNumber}`);
    currentImage.style.flex = '0';
    currentHeader.style.visibility = 'hidden';

    currentImageNumber++;
    if (currentImageNumber == 6) { currentImageNumber = 1 }

    const nextImage = document.querySelector(`.post--${currentImageNumber}`);
    const nextHeader = document.querySelector(`.header--${currentImageNumber}`);
    nextImage.style.flex = '6';
    nextHeader.style.visibility = 'visible';

    updateSelected();
})

scrollLeft.addEventListener('click', () => {
    const currentImage = document.querySelector(`.post--${currentImageNumber}`);
    const currentHeader = document.querySelector(`.header--${currentImageNumber}`);
    currentImage.style.flex = '0';
    currentHeader.style.visibility = 'hidden';

    currentImageNumber--;
    if (currentImageNumber == 0) { currentImageNumber = 5 }

    const nextImage = document.querySelector(`.post--${currentImageNumber}`);
    const nextHeader = document.querySelector(`.header--${currentImageNumber}`);
    nextImage.style.flex = '6';
    nextHeader.style.visibility = 'visible';

    updateSelected();
})

selectors.forEach(selector => selector.addEventListener('click', () => {
    const currentlySelectedimage = document.querySelector(`.post--${currentImageNumber}`);
    const currentSelectedHeader = document.querySelector(`.header--${currentImageNumber}`);
    const imageSelected = images[selectors.indexOf(selector)];
    const headerSelected = headers[selectors.indexOf(selector)]

    currentlySelectedimage.style.flex = '0';
    currentSelectedHeader.style.visibility = 'hidden';
    imageSelected.style.flex = '6';
    headerSelected.style.visibility = 'visible';
    

    selectors[currentImageNumber - 1].style["background-color"] = '#040721';
    selector.style["background-color"] = '#7accff';

    currentImageNumber = selectors.indexOf(selector) + 1; 
}));

// ----- INITIALISE -----
updateSelected();

timedScroll();  