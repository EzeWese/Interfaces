document.getElementById("inputEmail").addEventListener("keyup", function() {
    checkLogin();
});

function checkLogin () {
    var emailInput = document.getElementById('inputEmail').value;
    var regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail = regularExpresion.test(emailInput);
    if (emailInput != "" && checkEmail) {
        document.getElementById('forgotPasswordButton').removeAttribute("disabled");
    } else {
        document.getElementById('forgotPasswordButton').setAttribute("disabled", null);
    }
}

function validateEmail (){
    var emailInput = document.getElementById('inputEmail').value;
    var regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail = regularExpresion.test(emailInput);
    if (! checkEmail){
        document.getElementById('emailErrorMessage').classList.remove("hide");
    } else {
        document.getElementById('emailErrorMessage').classList.add("hide");
    }
}