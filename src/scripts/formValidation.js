// ERROR MESSAGES ON FORM VALIDATION

const form = document.querySelector('.form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');
const send = document.querySelector('.form__submit');
const target = document.querySelector('.error-box');

send.addEventListener('click', (e) => {
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error';
    let errorText = '';

    if (name.validity.valueMissing || 
        email.validity.valueMissing ||
        message.validity.valueMissing) {
            errorText = 'Please fill out all fields!'
    }

    if (email.validity.typeMismatch) {
        errorText = 'Invalid email address!'
    }

    // Add error message to DOM
    errorMessage.textContent = errorText;
    target.appendChild(errorMessage);

})