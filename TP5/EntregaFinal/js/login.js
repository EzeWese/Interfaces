document.getElementById("inputUser").addEventListener("keyup", function () {
    checkLogin();
});

document.getElementById("inputPassword").addEventListener("keyup", function () {
    checkLogin();
});

function checkLogin() {
    var nameInput = document.getElementById('inputUser').value;
    var passwordInput = document.getElementById('inputPassword').value;
    if (nameInput != "" && passwordInput != "" && passwordInput.length == 8) {
        document.getElementById('loginButton').removeAttribute("disabled");
    } else {
        document.getElementById('loginButton').setAttribute("disabled", null);
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
    var regularExpresion = /^([a-zA-Z0-9_-]){8,}$/;
    var checkPassword = regularExpresion.test(passwordInput);
    if (!checkPassword) {
        document.getElementById('passwordErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('passwordErrorMessage').classList.add("hide");
    }
}