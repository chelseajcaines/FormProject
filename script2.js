const firstNameInput = document.getElementById("first_name")
const firstNameError = document.getElementById("first-name-error")
const lastNameInput = document.getElementById("last_name")
const lastNameError = document.getElementById("last-name-error")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
const phoneNumberInput = document.getElementById("phone")
const phoneError = document.getElementById("phone-error")
const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("password-error")
const confirmPasswordInput = document.getElementById("confirm")
const confirmPasswordError = document.getElementById("confirm-password-error")
const createButton = document.getElementById("create-button")
const logInButton = document.getElementById("log-in-button")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    if (firstNameInput === "" || firstNameInput == null) {
        firstNameError.classList.remove("hide")
    }
    if (lastNameInput === "" || lastNameInput == null) {
        lastNameError.classList.remove("hide")
    }
    if (emailInput === "" || emailInput == null) {
        emailError.classList.remove("hide")
    }
    if (phoneNumberInput === "" || phoneNumberInput == null) {
        phoneError.classList.remove("hide")
    }
    if (
        passwordInput === "" ||
        passwordInput == null ||
        passwordInput.value.length < 6 ||
        passwordInput.value.length > 20
    ) {
        passwordError.classList.remove("hide")
        passwordInput.value = ""
    }
    if (
        confirmPasswordInput === "" ||
        confirmPasswordInput == null ||
        confirmPasswordInput.value.length < 6 ||
        confirmPasswordInput.value.length > 20 ||
        confirmPasswordInput.value != passwordInput.value
    ) {
        confirmPasswordError.classList.remove("hide")
        confirmPasswordInput.value = ""
    }
})
