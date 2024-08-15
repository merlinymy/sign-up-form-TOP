let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phoneNum = document.querySelector("#phone-num");
let password = document.querySelector("#password");
let confirmPass = document.querySelector("#confirm-pass");
let submitBtn = document.querySelector(".button-wrapper > button");
let form = document.querySelector("form");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (confirmPass.value !== password.value) {
        confirmPass.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(confirmPass).textContent = "password does not match";
    } else {
        form.reset();
    }
});

function getErrorMsgSpan(inputElement) {
    return inputElement.parentElement.nextElementSibling;
}

firstName.addEventListener("input", () => {
    if (firstName.value.trim() === "" || firstName.validity.valueMissing) {
        firstName.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(firstName).textContent = "please enter your first name";
    } else {
        firstName.parentElement.className = "input-wrapper";
        getErrorMsgSpan(firstName).textContent = "";
    }
})

lastName.addEventListener("input", () => {
    if (lastName.value.trim() === "" || lastName.validity.valueMissing) {
        lastName.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(lastName).textContent = "please enter your first name";
    } else {
        lastName.parentElement.className = "input-wrapper";
        getErrorMsgSpan(lastName).textContent = "";
    }
})

email.addEventListener("input", () => {
    if (email.value.trim() === "" || email.validity.valueMissing) {
        email.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(email).textContent = "please enter your email";
    } else {
        email.parentElement.className = "input-wrapper";
        getErrorMsgSpan(email).textContent = "";
    }
})

email.addEventListener("focusout", () => {
    if (email.validity.typeMismatch) {
        email.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(email).textContent = "please enter a valid email address";
    }
})

phoneNum.addEventListener("input", () => {
    if (phoneNum.value.trim() === "" || phoneNum.validity.valueMissing) {
        phoneNum.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(phoneNum).textContent = "please enter your phone number";
    } else {
        phoneNum.parentElement.className = "input-wrapper";
        getErrorMsgSpan(phoneNum).textContent = "";
    }
})

password.addEventListener("input", () => {
    if (password.value.trim() === "" || password.validity.valueMissing) {
        password.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(password).textContent = "please enter your phone number";
    } else {
        password.parentElement.className = "input-wrapper";
        getErrorMsgSpan(password).textContent = "";
    }
})

confirmPass.addEventListener("input", () => {
    if (confirmPass.value.trim() === "" || passwconfirmPassord.validity.valueMissing) {
        confirmPass.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(confirmPass).textContent = "please enter your phone number";
    } else {
        confirmPass.parentElement.className = "input-wrapper";
        getErrorMsgSpan(confirmPass).textContent = "";
    }
})

password.addEventListener("focusout", () => {
    if (password.validity.tooShort) {
        password.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(password).textContent = "password must be at least 8 characters long";
    }
})

confirmPass.addEventListener("focusout", () => {
    if (confirmPass.value !== password.value) {
        confirmPass.parentElement.className="input-wrapper-invalid";
        getErrorMsgSpan(confirmPass).textContent = "password does not match";
    } else {
        confirmPass.parentElement.className = "input-wrapper";
        getErrorMsgSpan(confirmPass).textContent = "";
    }
})