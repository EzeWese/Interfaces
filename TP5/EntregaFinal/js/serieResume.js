var userSelection = document.getElementsByClassName('temporadaItem');
for (let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function () {
        showSeries();
    })
}

function showSeries() {
    var serie = document.getElementsByClassName('seriesList');
    for (let i = 0; i < serie.length; i++) {
        serie[i].classList.remove("hide");
    }
}