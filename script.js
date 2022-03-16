const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordConfirmationError = document.querySelector(".confirm-password-error");

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "email-error";
    } else {
        showEmailError();
    };
});
email.addEventListener("blur", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "email-error";
    } else {
        showEmailError();
    };
});

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "password-error";
    } else {
        showPasswordError();
    };
});

password.addEventListener("blur", () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "password-error";
    } else {
        showPasswordError();
    };
});

passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.validity.valid) {
        passwordConfirmationError.textContent = "";
        passwordConfirmationError.className = "confirm-password-error";
    } else {
        showPasswordConfirmationError();
    };
});

passwordConfirmation.addEventListener("blur", () => {
    if (passwordConfirmation.validity.valid) {
        passwordConfirmationError.textContent = "";
        passwordConfirmationError.className = "confirm-password-error";
    } else {
        showPasswordConfirmationError();
    };
});

form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        showEmailError();
        showPasswordError();
        showPasswordConfirmationError();
        e.preventDefault();
    } else if (!password.validity.valid) {
        showPasswordError();
        showPasswordConfirmationError();
        e.preventDefault();
    } else if (!passwordConfirmation.validity.valid) {
        showPasswordConfirmationError();
        e.preventDefault();
    };
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter your email address";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please make sure you entered a valid email address";
    };
    emailError.className = "email-error active-error";
};

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter your desired password";
    } else if (password.validity.tooShort) {
        passwordError.textContent = "Please make sure your password is at least 8 characters long"
    };
    passwordError.className = "password-error active-error";
};

function showPasswordConfirmationError() {
    if (passwordConfirmation.validity.valueMissing) {
        passwordConfirmationError.textContent = "Please re-enter your desired password to confirm";
    } else if (passwordConfirmation.value !== password.value) {
        passwordConfirmationError.textContent = "Please make sure your password confirmation matches your password above";
        console.log("is active")
    };
    passwordConfirmationError.className = "confirm-password-error active-error";
};