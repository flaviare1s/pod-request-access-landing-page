const emailInput = document.querySelector('#email')
const errorSpan = document.querySelector('#error')
const submitButton = document.querySelector('#submit')

function formValidation(event) {
    event.preventDefault()
    if(!emailInput.checkValidity()) {
        errorSpan.innerText = 'Oops! Please check your email'
    } else {
        errorSpan.innerHTML = ''
        emailInput.value = ''
        emailInput.placeholder = ''
    }
}

submitButton.addEventListener('click', formValidation)