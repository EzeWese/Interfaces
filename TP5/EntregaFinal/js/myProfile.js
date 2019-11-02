document.getElementById("inputName").addEventListener("keyup", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("inputSurname").addEventListener("keyup", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("inputEmail").addEventListener("keyup", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("inputPassword").addEventListener("keyup", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("inputPassword2").addEventListener("keyup", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
    validatePassword2();
});

document.getElementById("inputLanguage").addEventListener("click", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("inputNotification").addEventListener("click", function() {
    document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    checkRegister();
});

document.getElementById("uploadImageMyAccountButton").addEventListener("click", function() {
    browseImage();
});

document.getElementById("cancelMyAccountButton").addEventListener("click", function() {
    document.getElementById("inputName").value = "Juan";
    document.getElementById('nameErrorMessage').classList.add("hide");
    document.getElementById("inputSurname").value = "Rodriguez";
    document.getElementById('surnameErrorMessage').classList.add("hide");
    document.getElementById("inputEmail").value = "juan@rodriguez.com";
    document.getElementById('emailErrorMessage').classList.add("hide");
    document.getElementById("inputPassword").value = "12345678";
    document.getElementById('passwordErrorMessage').classList.add("hide");
    document.getElementById("inputPassword2").value = "12345678";
    document.getElementById('password2ErrorMessage').classList.add("hide");
    document.getElementById("inputLanguage").value = "1";
    document.getElementById("inputNotification").value = "1";
    document.getElementById('acceptMyAccountButton').setAttribute("disabled", null);
    document.getElementById('cancelMyAccountButton').setAttribute("disabled", null);
});

document.getElementById("acceptMyAccountButton").addEventListener("click", function() {
    document.getElementById('acceptMyAccountButton').setAttribute("disabled", null);
    document.getElementById('cancelMyAccountButton').setAttribute("disabled", null);
});

function checkRegister () {
    var nameInput = document.getElementById('inputName').value;
    var surnameInput = document.getElementById('inputSurname').value;
    var emailInput = document.getElementById('inputEmail').value;
    var passwordInput = document.getElementById('inputPassword').value;
    var passwordInput2 = document.getElementById('inputPassword2').value;
    checkPassword = validPassword(passwordInput);
    checkPassword = validPassword(passwordInput2);
    if (nameInput != "" && surnameInput != "" && validateEmail() && validPassword(passwordInput) && passwordInput == passwordInput2) {
            document.getElementById('acceptMyAccountButton').removeAttribute("disabled");
            document.getElementById('cancelMyAccountButton').removeAttribute("disabled");
    } else {
        document.getElementById('acceptMyAccountButton').setAttribute("disabled", null);
    }
}

function validateName (){
    var userInput = document.getElementById('inputName').value;
    if (userInput != ""){
        document.getElementById('nameErrorMessage').classList.add("hide");
    } else {
        document.getElementById('nameErrorMessage').classList.remove("hide");
    }
}

function validateSurname (){
    var userInput = document.getElementById('inputSurname').value;
    if (userInput != ""){
        document.getElementById('surnameErrorMessage').classList.add("hide");
    } else {
        document.getElementById('surnameErrorMessage').classList.remove("hide");
    }
}

function validateEmail (){
    var userInput = document.getElementById('inputEmail').value;
    var regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail = regularExpresion.test(userInput);
    if (! checkEmail){
        document.getElementById('emailErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('emailErrorMessage').classList.add("hide");
    }
    return checkEmail;
}

function validatePassword (){
    var passwordInput = document.getElementById('inputPassword').value;
    var passwordInput2 = document.getElementById('inputPassword2').value;
    checkPassword = validPassword(passwordInput);
    if (! checkPassword){
        document.getElementById('passwordErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('passwordErrorMessage').classList.add("hide");
    }
    if (passwordInput != passwordInput2){
        document.getElementById('password2ErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('password2ErrorMessage').classList.add("hide");
    }
}

function validatePassword2 (){
    var passwordInput = document.getElementById('inputPassword').value;
    var passwordInput2 = document.getElementById('inputPassword2').value;
    if (passwordInput != passwordInput2){
        document.getElementById('password2ErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('password2ErrorMessage').classList.add("hide");
    }
}

function validPassword (password) {
    var regularExpresion = /^([a-zA-Z0-9_-]){8,}$/ ;
    var checkPassword = regularExpresion.test(password);
    return checkPassword;
}

function browseImage() {
    var file = document.getElementById('uploadImageMyAccountButton');
	file.onchange = function(e){
		var img = new Image();
		img.src = URL.createObjectURL(e.target.files[0]);
		img.onload = function(){
            document.getElementById('imageMyAccount').src = img.src;
	  }
	}
}