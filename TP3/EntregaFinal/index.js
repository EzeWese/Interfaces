import { Objeto } from './objeto.js';

let obstaculos = document.getElementsByClassName('destroy');
let human = document.getElementById('player');
let humanUp = 0;
let gameFinished = false;

let destroyInterval;
let divDestroyInterval;
let checkTouchMoneda1;
let checkTouchMoneda2;
let checkTouchDestroy;
let monedaInterval;
let divMoneda;
let moneda2Interval;
let divMoneda2;
let points = 0;

let divCoin;
let divCoin2;
let divDestroy;

function jump(event) {
    if (event.keyCode == 38) {
        human.classList.add('jump');
    }
}

function down(event) {
    if (event.keyCode == 38) {
        setTimeout(function () {
            human.classList.remove('jump');
        }, 600)
    }
}

function cycleGame(cleanGame, player) {
    if(gameFinished){
        clearInterval(checkTouchDestroy);
        clearInterval(checkTouchMoneda1);
        clearInterval(checkTouchMoneda2);
        clearInterval(destroyInterval);
        clearInterval(divDestroyInterval);
        clearInterval(monedaInterval);
        clearInterval(divMoneda);
        clearInterval(moneda2Interval);
        clearInterval(divMoneda2);
        for (let i = 0; i < divCoin.length; i++) {
            divCoin[i].remove();  
        }
        for (let i = 0; i < divCoin2.length; i++) {
            divCoin2[i].remove();
        } 
        for (let i = 0; i < divDestroy.length; i++) {
            divDestroy[i].remove();
        }

        player.classList.remove('human');
        let puntosGame = document.getElementById('info');
        puntosGame.innerHTML = '<h2 id="info" class="puntaje">Press intro to start game...</h2>';
        points = 0;
        clearInterval(cleanGame);
    }
}


function  generarMoneda1() {
    monedaInterval = setInterval( () => {
        let moneda = new Objeto({class: "moneda"});
    }, 3000);
    divMoneda = setInterval( () => {
        divCoin = document.getElementsByClassName('moneda');
        divCoin[0].remove();
    }, 5000);

    checkTouchMoneda1 = setInterval(() => {
        divCoin = document.getElementsByClassName('moneda');
        for(let i=0; i < divCoin.length; i++){
        let rect1 = divCoin[i].getBoundingClientRect();
        let rect2 = document.getElementById('player').getBoundingClientRect();

        if(!(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom)){
                divCoin[i].remove();
                points += 1;
                let puntos = document.getElementById('info');
                puntos.classList.remove('puntaje');
                puntos.innerHTML = '<h2 class="puntaje2" id="puntos">Coins '+points+'</h2>';
            }
        }
    }, 200);
}

function  generarMoneda2() {
    moneda2Interval = setInterval( () => {
        let moneda = new Objeto({class: "moneda2"});
    }, 2000);
    divMoneda2 = setInterval( () => {
        divCoin2 = document.getElementsByClassName('moneda2');
        divCoin2[0].remove();
    }, 4000);

    checkTouchMoneda2 = setInterval(() => {
        divCoin2 = document.getElementsByClassName('moneda2');
        for(let i=0; i < divCoin2.length; i++){
        let rect1 = divCoin2[i].getBoundingClientRect();
        let rect2 = document.getElementById('player').getBoundingClientRect();

        if(!(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom)){
                divCoin2[i].remove();
                points += 1;
                let puntos = document.getElementById('info');
                puntos.classList.remove('puntaje');
                puntos.innerHTML = '<h2 class="puntaje2" id="puntos">Coins '+points+'</h2>';
            }
        }
    }, 200);
}

function  generarDestroy() {
    destroyInterval = setInterval( () => {
        let destroy = new Objeto({class: "destroy"});
    }, 1700);
    divDestroyInterval = setInterval( () => {
        divDestroy = document.getElementsByClassName('destroy');
        divDestroy[0].remove();
    }, 2500);

    checkTouchDestroy = setInterval(() => {
        divDestroy = document.getElementsByClassName('destroy');
        for(let i=0; i < divDestroy.length; i++){
        let rect1 = divDestroy[i].getBoundingClientRect();
        let rect2 = document.getElementById('player').getBoundingClientRect();

        if(!(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom)){
                gameFinished = true;
                let gameOver = document.getElementById('gameOver');
                gameOver.style.zIndex = '1';
            }
        }
    }, 500);
    
}

function startGame() {
    gameFinished = false;
    
    let gameOver = document.getElementById('gameOver');
    gameOver.style.zIndex = '-1';

    let game = document.getElementById('capa');
    game.style.animation = 'fondo 10s steps(500) infinite';

    let info = document.getElementById('info');
    info.classList.remove('puntaje');
    info.innerHTML = '<h2 class="puntaje2" id="puntos">Coins</h2>';

    let player = document.getElementById('player');
    player.className = 'human';

    document.onkeydown = jump;
    document.onkeyup = down;

    generarDestroy();
    generarMoneda1();
    generarMoneda2();
    let gameInterval = setInterval( () => {
        cycleGame(gameInterval, player);
    }, 100);    
}

window.onkeypress = startGame;

