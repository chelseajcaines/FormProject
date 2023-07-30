const firstNameInput = document.getElementById("first-name")
const firstNameError = document.querySelector('[first-name-error]');

const lastNameInput = document.getElementById("last-name")
const lastNameError = document.querySelector('[last-name-error]');

const emailInput = document.getElementById("email")
const emailError = document.querySelector('[email-error]');

const phoneNumberInput = document.getElementById("phone")
const phoneNumberError = document.querySelector('[phone-number-error]');

const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm")
const passwordError = document.querySelector('[password-error]');


const logInButton = document.getElementById("log-in-button")
const createButton = document.getElementById("submit")
const message = document.getElementById("message")


// generic callback to handle validation at the field level, takes an input element and an error display element
const handleFieldValidation = (input_element, error_element) => {
    if (!input_element.validity?.valid) error_element.style.display = 'block';
    else error_element.style.display = 'none';
}

// Input listeners for handling field-level validation
firstNameInput.addEventListener('input', () => handleFieldValidation(firstNameInput, firstNameError));
lastNameInput.addEventListener('input', () => handleFieldValidation(lastNameInput, lastNameError));
emailInput.addEventListener('input', () => handleFieldValidation(emailInput, emailError));
phoneNumberInput.addEventListener('input', () => handleFieldValidation(phoneNumberInput, phoneNumberError));

// Checks existing values in password inputs and return a boolean check
const validatePasswords = () => {
    if(
        !passwordInput.value || !confirmPasswordInput.value ||
        !passwordInput.validity.valid || !confirmPasswordInput.validity?.valid
    ) {
        passwordError.style.display = 'block';
        return false
    }
    if(passwordInput.value === confirmPasswordInput.value) 
    {
        passwordError.style.display = 'none';
        return true
    }
    return false
}

// function checkPassword() {
//     if (passwordInput.length != 0) {
//         if (passwordInput != confirmPasswordInput) {
//             message.textContent = "Password does not match"
//             message.style.color = "#f50606"
//         } else {
//             alert("You have created your account")
//         }
//     }
// }

const enterUserInfo = () => {
    //If every field is entered correctly
    if (
        firstNameInput.validity?.valid &&
        lastNameInput.validity?.valid &&
        emailInput.validity?.valid &&
        phoneNumberInput.validity?.valid &&
        validatePasswords()
    ) {
        alert("You have created your account")

        //If something is left out or not entered correctly
    } else {
        // Validation is already being handled here, no need for extra alerts from JS
    }
}

//clicking the 'create account' button
createButton.addEventListener("click", () => enterUserInfo())

const goToLogin = () => {
    alert("Great to see you again!")
}
//clicking the 'log in' button
logInButton.addEventListener("click", () => goToLogin())
