// ERROR MESSAGES ON FORM VALIDATION

const form = document.querySelector('.form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');
const send = document.querySelector('.form__submit');
const target = document.querySelector('.error-box');

errorMessageAlready = false;

send.addEventListener('click', (e) => {
    if (errorMessageAlready) { return }

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

    // Check form validity and add error message to DOM
    if (!name.validity.valid || !email.validity.valid || !message.validity.valid) {
        errorMessage.textContent = errorText;
        target.appendChild(errorMessage);
        errorMessageAlready = true;
        e.preventDefault()
    } else {
        return
    }

    // Style invalid elements

    if (!name.validity.valid) {
        name.classList.add('invalid');
    }

    if (!message.validity.valid) {
        message.classList.add('invalid');
    }

    if (!email.validity.valid) {
        email.classList.add('invalid');
    }

    // Remove invalid styling and error message
    setTimeout(() => {
        errorMessage.remove()
        errorMessageAlready = false;
        name.classList.remove('invalid');
        email.classList.remove('invalid')
        message.classList.remove('invalid');
    }, 5000)

})