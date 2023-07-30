const firstNameInput = document.getElementById("first-name")
const firstNameError = document.querySelector("[first-name-error]")

const lastNameInput = document.getElementById("last-name")
const lastNameError = document.querySelector("[last-name-error]")

const emailInput = document.getElementById("email")
const emailError = document.querySelector("[email-error]")

const phoneNumberInput = document.getElementById("phone")
const phoneNumberError = document.querySelector("[phone-number-error]")

const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm")
const passwordError = document.querySelector("[password-error]")

const logInButton = document.getElementById("log-in-button")
const createButton = document.getElementById("submit")
const message = document.getElementById("message")

// generic callback to handle validation at the field level, takes an input element and an error display element
const handleFieldValidation = (input_element, error_element) => {
    if (!input_element.validity?.valid) error_element.style.display = "block"
    else error_element.style.display = "none"
}

// Input listeners for handling field-level validation
// if any field is left empty or entered incorrectly, the inputs will notify the user and the form will not submit
firstNameInput.addEventListener("input", () =>
    handleFieldValidation(firstNameInput, firstNameError)
)
lastNameInput.addEventListener("input", () =>
    handleFieldValidation(lastNameInput, lastNameError)
)
emailInput.addEventListener("input", () =>
    handleFieldValidation(emailInput, emailError)
)
phoneNumberInput.addEventListener("input", () =>
    handleFieldValidation(phoneNumberInput, phoneNumberError)
)

const form = document.getElementById("form")

// actual form listening for submit event which happens when clicking the 'create account' button
form.addEventListener("submit", (event) => {
    // if either or both password fields are empty or are entered but do not fit the valid format...
    // inputs will automatically tell the user they are not entered correctly and the form will not submit
    if (
        !passwordInput.value ||
        !confirmPasswordInput.value ||
        !passwordInput.validity.valid ||
        !confirmPasswordInput.validity?.valid ||
        // if both password values are not equal to each other...
        // the confirmPasswordInput border will turn red, an error message pops up and the form will not submit
        passwordInput.value != confirmPasswordInput.value
    ) {
        passwordError.style.display = "block"
        confirmPasswordInput.style.borderColor = "#f50606"
        event.preventDefault()
    }
    // when everything is entered correctly, the form will submit and the page will refresh
})

const goToLogin = () => {
    alert("Great to see you again!")
}
//clicking the 'log in' button
logInButton.addEventListener("click", () => goToLogin())
