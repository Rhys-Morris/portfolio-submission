// Add ripple effect to heto button when clicked

window.addEventListener('click', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    ripples.style["z-index"] = '-20';
    ripples.className = ('ripple');
    document.body.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 2000);
});