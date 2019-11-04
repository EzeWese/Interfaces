document.getElementById("inputName").addEventListener("keyup", function () {
    checkRegister();
});

document.getElementById("inputSurname").addEventListener("keyup", function () {
    checkRegister();
});

document.getElementById("inputUser").addEventListener("keyup", function () {
    checkRegister();
});

document.getElementById("inputPassword").addEventListener("keyup", function () {
    checkRegister();
});

document.getElementById("inputPassword2").addEventListener("keyup", function () {
    checkRegister();
    validatePassword2();
});

function checkRegister() {
    var nameInput = document.getElementById('inputName').value;
    var surnameInput = document.getElementById('inputSurname').value;
    var userInput = document.getElementById('inputUser').value;
    var passwordInput = document.getElementById('inputPassword').value;
    var passwordInput2 = document.getElementById('inputPassword2').value;
    if (nameInput != "" && surnameInput != "" && userInput != "" && validPassword(passwordInput) && passwordInput2 != "") {
        if (passwordInput == passwordInput2) {
            document.getElementById('registerButton').removeAttribute("disabled");
        }
    } else {
        document.getElementById('registerButton').setAttribute("disabled", null);
    }
}

function validateName() {
    var userInput = document.getElementById('inputName').value;
    if (userInput != "") {
        document.getElementById('nameErrorMessage').classList.add("hide");
    } else {
        document.getElementById('nameErrorMessage').classList.remove("hide");
    }
}

function validateSurname() {
    var userInput = document.getElementById('inputSurname').value;
    if (userInput != "") {
        document.getElementById('surnameErrorMessage').classList.add("hide");
    } else {
        document.getElementById('surnameErrorMessage').classList.remove("hide");
    }
}

function validateUser() {
    var userInput = document.getElementById('inputUser').value;
    if (userInput != "") {
        document.getElementById('userErrorMessage').classList.add("hide");
    } else {
        document.getElementById('userErrorMessage').classList.remove("hide");
    }
}

function validatePassword() {
    var passwordInput = document.getElementById('inputPassword').value;
    checkPassword = validPassword(passwordInput);
    if (!checkPassword) {
        document.getElementById('passwordErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('passwordErrorMessage').classList.add("hide");
    }
}

function validatePassword2() {
    var passwordInput = document.getElementById('inputPassword').value;
    var passwordInput2 = document.getElementById('inputPassword2').value;
    if (passwordInput != passwordInput2) {
        document.getElementById('password2ErrorMessage').classList.remove("hide");
        console.log("remove");
    } else {
        document.getElementById('password2ErrorMessage').classList.add("hide");
        console.log("add");
    }
}

function validPassword(password) {
    var regularExpresion = /^([a-zA-Z0-9_-]){8,}$/;
    var checkPassword = regularExpresion.test(password);
    return checkPassword;
}