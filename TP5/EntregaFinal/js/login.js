document.getElementById("inputUser").addEventListener("keyup", function() {
    checkLogin();
});

document.getElementById("inputPassword").addEventListener("keyup", function() {
    checkLogin();
});

function checkLogin () {
    var nameInput = document.getElementById('inputUser').value;
    var loginInput = document.getElementById('inputPassword').value;
    if (nameInput != "" && loginInput != "") {
        document.getElementById('loginButton').removeAttribute("disabled");
        document.getElementById('loginLink').classList.remove("loginLink");
    } else {
        document.getElementById('loginButton').setAttribute("disabled", null);
        document.getElementById('loginLink').classList.add("loginLink");
    }
}


