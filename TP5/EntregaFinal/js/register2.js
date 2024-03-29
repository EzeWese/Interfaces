document.getElementById("inputCardName").addEventListener("keyup", function () {
    checkRegister2();
});

document.getElementById("inputCardNumber").addEventListener("keyup", function () {
    checkRegister2();
});

document.getElementById("inputCardExpirationMonth").addEventListener("click", function () {
    checkRegister2();
});

document.getElementById("inputCardExpirationYear").addEventListener("click", function () {
    checkRegister2();
});

document.getElementById("inputCardCode").addEventListener("keyup", function () {
    checkRegister2();
});

function checkRegister2() {
    var cardNameInput = document.getElementById('inputCardName').value;
    var cardNumberInput = document.getElementById('inputCardNumber').value;
    var cardExpirationInputMonth = document.getElementById('inputCardExpirationMonth').value;
    var cardExpirationInputMonth = document.getElementById('inputCardExpirationYear').value;
    var cardCodeInput = document.getElementById('inputCardCode').value;
    if (cardNameInput != "" && cardNumberInput != "" && cardNumberInput.length == 16 && inputCardExpirationMonth.value != "" && inputCardExpirationYear.value != "" && cardCodeInput != "" && cardCodeInput.length == 3) {
        document.getElementById('register2Button').removeAttribute("disabled");
    } else {
        document.getElementById('register2Button').setAttribute("disabled", null);
    }
}

function validateCardName() {
    var cardNameInput = document.getElementById('inputCardName').value;
    if (cardNameInput != "") {
        document.getElementById('cardNameErrorMessage').classList.add("hide");
    } else {
        document.getElementById('cardNameErrorMessage').classList.remove("hide");
    }
}

function validateCardNumber() {
    var cardNumberInput = document.getElementById('inputCardNumber').value;
    if (cardNumberInput != "" && cardNumberInput.length == 16) {
        document.getElementById('cardNumberErrorMessage').classList.add("hide");
    } else {
        document.getElementById('cardNumberErrorMessage').classList.remove("hide");
    }
}

function validateCardExpiration() {
    var cardExpirationInputMonth = document.getElementById('inputCardExpirationMonth').value;
    var cardExpirationInputYear = document.getElementById('inputCardExpirationYear').value;
    if (cardExpirationInputMonth != "" && cardExpirationInputYear != "") {
        document.getElementById('cardExpirationErrorMessage').classList.add("hide");
    } else {
        document.getElementById('cardExpirationErrorMessage').classList.remove("hide");
    }
}

function validateCardCode() {
    var cardCodeInput = document.getElementById('inputCardCode').value;
    if (cardCodeInput != "" && cardCodeInput.length == 3) {
        document.getElementById('cardCodeErrorMessage').classList.add("hide");
    } else {
        document.getElementById('cardCodeErrorMessage').classList.remove("hide");
    }
}