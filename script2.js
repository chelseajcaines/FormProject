const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const phoneNumberInput = document.getElementById("phone")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm")
const logInButton = document.getElementById("log-in-button")
const createButton = document.getElementById("submit")
const message = document.getElementById("message")

function checkPassword() {
    if (passwordInput.length != 0) {
        if (passwordInput != confirmPasswordInput) {
            message.textContent = "Password does not match"
            message.style.color = "#f50606"
        }
        if (passwordInput == confirmPasswordInput) {
            message.textContent = ""
        }
    }
}
const enterUserInfo = () => {
    //If every field is entered correctly
    if (
        firstNameInput.value &&
        lastNameInput.value &&
        emailInput.value &&
        phoneNumberInput.value &&
        passwordInput.value &&
        passwordInput == confirmPasswordInput.value
    ) {
        alert("You have created your account")

        //If something is left out or not entered correctly
    } else {
        alert("Please enter every field correctly")
    }
}

//clicking the 'create account' button
createButton.addEventListener("click", () => enterUserInfo())

const goToLogin = () => {
    alert("Great to see you again!")
}
//clicking the 'log in' button
logInButton.addEventListener("click", () => goToLogin())
