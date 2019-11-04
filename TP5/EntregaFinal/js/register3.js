var userSelection = document.getElementsByClassName('basicSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("basicSelector");
  })
}

var userSelection = document.getElementsByClassName('standarSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("standarSelector");
  })
}

var userSelection = document.getElementsByClassName('premiumSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("premiumSelector");
  })
}

var userSelection = document.getElementsByClassName('proSelector');
for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
        selectPack("proSelector");
  })
}

function selectPack(packParameter){
    var pack = document.getElementsByClassName('basicSelector');
    unselectPack(pack);
    var pack = document.getElementsByClassName('standarSelector');
    unselectPack(pack);
    var pack = document.getElementsByClassName('proSelector');
    unselectPack(pack);
    var pack = document.getElementsByClassName('premiumSelector');
    unselectPack(pack);
    var selectedPack = document.getElementsByClassName(packParameter); 
    for(let i = 0; i < selectedPack.length; i++) {
        selectedPack[i].classList.add("packBackgroundSelected");
    }
    document.getElementById('packButton').removeAttribute("disabled");
}

function unselectPack(packParameter){
    for(let i = 0; i < packParameter.length; i++) {
        packParameter[i].classList.remove("packBackgroundSelected");
    }
}