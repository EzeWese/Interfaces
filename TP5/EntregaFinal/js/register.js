document.getElementById("inputName").addEventListener("keyup", function() {
    checkRegister();
});

document.getElementById("inputSurname").addEventListener("keyup", function() {
    checkRegister();
});

document.getElementById("inputUser").addEventListener("keyup", function() {
    checkRegister();
});

document.getElementById("inputPassword").addEventListener("keyup", function() {
    checkRegister();
});

document.getElementById("inputPassword2").addEventListener("keyup", function() {
    checkRegister();
});

function checkRegister () {
    var nameInput = document.getElementById('inputUser').value;
    var loginInput = document.getElementById('inputPassword').value;
    if (nameInput != "" && loginInput != "") {
        document.getElementById('loginButton').removeAttribute("disabled");
    } else {
        document.getElementById('loginButton').setAttribute("disabled", null);
    }
}

function validateUser (){
    console.log("entro");
    var userInput = document.getElementById('inputUser').value;
    if (userInput != ""){
        document.getElementById('userErrorMessage').classList.add("hide");
    } else {
        document.getElementById('userErrorMessage').classList.remove("hide");
    }
}

function validatePassword (){
    var passwordInput = document.getElementById('inputPassword').value;
    var regularExpresion = /^([a-zA-Z0-9_-]){8,}$/ ;
    var checkPassword = regularExpresion.test(passwordInput);
    if (! checkPassword){
        document.getElementById('passwordErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('passwordErrorMessage').classList.add("hide");
    }
}