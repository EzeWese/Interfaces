var userSelection = document.getElementsByClassName('basicSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("basic");
  })
}

var userSelection = document.getElementsByClassName('standarSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("standar");
  })
}

var userSelection = document.getElementsByClassName('premiumSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("premium");
  })
}

var userSelection = document.getElementsByClassName('proSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("pro");
  })
}

function selectPack(packParameter){
    document.getElementById('packButton').removeAttribute("disabled");
    alert(packParameter)
}