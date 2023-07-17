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
    }
    if (!lastNameInput.value) {
        lastNameError.classList.remove("hide")
        lastNameInput.value = ""
    }
    if (!emailInput.value) {
        emailError.classList.remove("hide")
        emailInput.value = ""
    }
    if (!phoneNumberInput.value) {
        phoneError.classList.remove("hide")
        phoneNumberInput.value = ""
    }
    if (!passwordInput.value) {
        passwordError.classList.remove("hide")
        passwordInput.value = ""
    }
    if (!confirmPasswordInput.value) {
        confirmPasswordError.classList.remove("hide")
        confirmPasswordInput.value = ""
    } else {
        if (
            firstNameInput.value === firstNameInput.value &&
            lastNameInput.value === lastNameInput.value &&
            emailInput.value === emailInput.value &&
            phoneNumberInput.value === phoneNumberInput.value &&
            passwordInput.value === passwordInput.value &&
            confirmPasswordInput.value === passwordInput.value
        )
            alert("You have now created your account")
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
phoneNumberInput.addEventListener("click", () => {
    phoneError.classList.add("hide")
})
passwordInput.addEventListener("click", () => {
    passwordError.classList.add("hide")
})
confirmPasswordInput.addEventListener("click", () => {
    confirmPasswordError.classList.add("hide")
})

const goToLogin = () => {
    alert("Great to see you again!")
}
//clicking the 'log in' button
logInButton.addEventListener("click", () => goToLogin())
