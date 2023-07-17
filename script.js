const firstNameInput = document.getElementById("first-name-input")
const firstNameError = document.getElementById("first-name-error")
const lastNameInput = document.getElementById("last-name-input")
const lastNameError = document.getElementById("last-name-error")
const emailInput = document.getElementById("email-input")
const emailError = document.getElementById("email-error")
const phoneNumberInput = document.getElementById("phone-number-input")
const phoneError = document.getElementById("phone-error")
const passwordInput = document.getElementById("password-input")
const passwordError = document.getElementById("password-error")
const confirmPasswordInput = document.getElementById("confirm-password-input")
const confirmPasswordError = document.getElementById("confirm-password-error")
const createButton = document.getElementById("create-button")
const logInButton = document.getElementById("log-in-button")

const enterUserInfo = () => {
    //if input bars are empty when submitting information
    if (!firstNameInput.value) {
        firstNameError.classList.remove("hide")
        firstNameInput.value = ""
        return false
    }
    if (!lastNameInput.value) {
        lastNameError.classList.remove("hide")
        lastNameInput.value = ""
        return false
    }
    if (!emailInput.value) {
        emailError.classList.remove("hide")
        emailInput.value = ""
        return false
    }
    if (!phoneNumberInput.value) {
        phoneError.classList.remove("hide")
        phoneNumberInput.value = ""
        return false
    }
    if (!passwordInput.value) {
        passwordError.classList.remove("hide")
        passwordInput.value = ""
        return false
    }
    if (!confirmPasswordInput.value) {
        confirmPasswordError.classList.remove("hide")
        confirmPasswordInput.value = ""
        return false
    }
}

//clicking the 'create account' button
createButton.addEventListener("click", () => enterUserInfo())

//hitting enter after typing user information in input bars
firstNameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})
lastNameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})
emailInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})
phoneNumberInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})
passwordInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})
confirmPasswordInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        createButton.click()
    }
})

//removing error message when clicking input bar
firstNameInput.addEventListener("click", () => {
    firstNameError.classList.add("hide")
})
lastNameInput.addEventListener("click", () => {
    lastNameError.classList.add("hide")
})
emailInput.addEventListener("click", () => {
    emailError.classList.add("hide")
})
phoneNumberInputInput.addEventListener("click", () => {
    phoneError.classList.add("hide")
})
passwordInputInput.addEventListener("click", () => {
    passwordError.classList.add("hide")
})
confirmPasswordInput.addEventListener("click", () => {
    confirmPasswordError.classList.add("hide")
})
