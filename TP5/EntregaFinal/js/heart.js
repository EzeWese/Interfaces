var hearts = document.getElementsByClassName('whiteHeart');

for(let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function() {
        modifyRegularSolid(hearts[i]);
  })
}

function modifyRegularSolid(heart){
    heart.classList.toggle("far");
    heart.classList.toggle("fa");
}