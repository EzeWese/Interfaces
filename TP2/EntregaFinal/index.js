import { Vertex } from './Vertex.js';
import { Figure } from './Figure.js';

let canvas, context;
let objetoActual = null;
let figure, figures;
let posClickDownX;
let posClickDownY;
let ColorCenter;
let ColorLine;
let ColorVertex;

let btnCanvas = document.getElementsByClassName('clean');

let btnCloseFigure = document.getElementsByClassName('cerrar');

window.onload = function () {
    
    btnCanvas[0].addEventListener('click', cleanCanvas);
    btnCloseFigure[0].addEventListener('click', closeFigure);

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    figure = new Figure();
    figures = [];
    ColorCenter = [0, 255, 0];
    ColorLine = [255, 255, 0];
    ColorVertex = [255, 0, 0];

    redrawEverything();

    canvas.onmousedown = clickDown;
    canvas.onmouseup = clickUp;
    canvas.onmousemove = clickMove;


    window.onkeypress = function (event) {
        if(event.key == 'c'){
            this.document.onwheel = function (event2) {
                
                if(event2.deltaY > 0) {
                    changeColor(10);
                    redrawEverything();
                }
                else{
                    changeColor(-10);
                    redrawEverything();
                }
            }
        }
    }

    canvas.ondblclick = function (event) {
        
        let array = [];
        array = getCoordinates(event);
        let x = array[0];
        let y = array[1];

        ifDobleCLickOnVertex(x, y);

        if(objetoActual !== null){
            objetoActual.deleteVertexOnDbClick(x, y);
        }

        afterDeleteVertex();
        redrawEverything();
        

        objetoActual = null;

    }

    function afterDeleteVertex() {
        for (let i = 0; i < figures.length; i++) {
            
            if(figures[i].vertices.length === 0){
                figures.splice(i, 1);
            }
            
        }
    }

    function changeColor(numero) {
        for (let i = 0; i < figures.length; i++) {
            figures[i].changeColorFigure(numero);
        }
    }

    function clickDown(event) {
        
        let array = [];
        array = getCoordinates(event);
        let x = array[0];
        let y = array[1];

        if (!(clickOnVertices(x, y))) {
            drawVertex(x, y);
        }

        ifMouseInsideCenter(x, y);

        posClickDownX = x;
        posClickDownY = y;

    }

    function clickUp(event) {

        objetoActual = null;
    }

    function ifDobleCLickOnVertex(x, y) {

        for (let i = 0; i < figures.length; i++) {
            
            if (figures[i].clickOnVertices(x, y)) {
                objetoActual = figures[i];
                break;
            }
            
        }
    }

    function ifMouseInsideCenter(x, y) {

        for (let i = 0; i < figures.length; i++) {
            
            if (figures[i].clickOnCenter(x, y) || figures[i].clickOnVertices(x, y)) {
                objetoActual = figures[i];
                break;
            }
            
        }
    }

    function clickMove(event) {
        
        if(objetoActual != null) {

            let arr = [];
            arr = getCoordinates(event);
            let posMoveX = arr[0];
            let posMoveY = arr[1];

            let moveDownX = posMoveX - posClickDownX;
            let moveDownY = posMoveY - posClickDownY;

            if (objetoActual.clickOnCenter(posClickDownX, posClickDownY)) {
                
                objetoActual.center.x = posMoveX;
                objetoActual.center.y = posMoveY;
                objetoActual.modifyVerticesFromCenter(moveDownX, moveDownY);    
            }
            else {
                objetoActual.modifyVertexOnClick(posClickDownX, posClickDownY, posMoveX, posMoveY);
            }

            redrawEverything();

            posClickDownX = posMoveX;
            posClickDownY = posMoveY;
        }

    }
}


function getCoordinates(event) {
    let arr = [];
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = canvas;

    do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    // Para que funcione modificando el ancho del canvas
    canvasX = Math.round( canvasX * (canvas.width / canvas.offsetWidth) );
    canvasY = Math.round( canvasY * (canvas.height / canvas.offsetHeight) );

    arr.push(canvasX);
    arr.push(canvasY);
    return arr;  
}

function drawVertex(x, y) {
    
    let vertex = new Vertex();
    vertex.setPropieties(x, y, 5, ColorVertex[0], ColorVertex[1], ColorVertex[2]);
    vertex.redraw(context);
    figure.r = ColorLine[0];
    figure.g = ColorLine[1];
    figure.b = ColorLine[2];
    figure.addVertex(vertex);
    figure.redrawLines(context);
}

function closeFigure() {
    figure.center.r = ColorCenter[0];
    figure.center.g = ColorCenter[1];
    figure.center.b = ColorCenter[2];
    figure.closePolygon(context);
    figures.push(figure);
    figure = new Figure();
}

function redrawEverything() {
    context.fillStyle='rgb(245, 222, 179)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < figures.length; i++) {
        
        figures[i].redrawVertex(context);
        figures[i].redrawLines(context);
        figures[i].closePolygon(context);
    }
}

function cleanCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle='rgb(245, 222, 179)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < figures.length; i++) {
        figures.splice(i, 1);
    }
}

function clickOnVertices(x, y) {
    if(figures.length > 0){
        for (let i = 0; i < figures.length; i++) {
            
            if (figures[i].clickOnCenter(x, y)) {
                return true;
            }
            else if (figures[i].clickOnVertices(x, y)) {
                return true;
            }
            
        }
        return false;

    }
    return false;
}