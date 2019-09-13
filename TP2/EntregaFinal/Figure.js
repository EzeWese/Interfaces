import { Vertex } from './Vertex.js';

export class Figure {
    vertices = [];
    center;

    //Color Lines
    r; g; b;

    constructor() {
        this.center = new Vertex();
    }

    redrawLines(context){
        if(this.vertices.length > 1) {
            
            for (let i = 0; i < this.vertices.length-1; i++) {

                context.lineWidth= 2;
                context.strokeStyle = 'rgb('+this.r+', '+this.g+', '+this.b+')';
                context.beginPath();
                context.moveTo(this.vertices[i].getCoordX(), this.vertices[i].getCoordY());
                context.lineTo(this.vertices[i+1].getCoordX(), this.vertices[i+1].getCoordY());
                context.stroke();    
            }
            //context.moveTo(this.vertices[this.vertices.length-2].getCoordX(), this.vertices[this.vertices.length-2].getCoordY());
            //context.lineTo(this.vertices[this.vertices.length-1].getCoordX(), this.vertices[this.vertices.length-1].getCoordY());
            
        }
    }

    redrawVertex(context) {
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].redraw(context);

        }
    }

    modifyVerticesFromCenter(x, y) {
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x += x;
            this.vertices[i].y += y;
        }
    }

    resetCenter(context) {
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.vertices.length; i++) {
            x += this.vertices[i].getCoordX();
            y += this.vertices[i].getCoordY();
        }

        x = x / this.vertices.length;
        y = y / this.vertices.length;

        
        this.center.x = x;
        this.center.y = y;
        this.center.radius = 3.5;
        this.center.redraw(context);
    }

    closePolygon(context) {
        context.lineWidth= 2;
        context.strokeStyle = 'rgb('+this.r+', '+this.g+', '+this.b+')';
        context.beginPath();
        context.moveTo(this.vertices[0].getCoordX(), this.vertices[0].getCoordY());
        context.lineTo(this.vertices[this.vertices.length-1].getCoordX(), this.vertices[this.vertices.length-1].getCoordY());
        context.stroke();
        if(this.center !== undefined){
            this.resetCenter(context);
        }
    }

    addVertex(vertex){
        this.vertices.push(vertex);
    }

    getCenter() {
        return this.center;
    }

    clickOnCenter(x, y) {
        if (this.center !== undefined) {
            
            if(this.center.clickOnVertex(x, y)) {
                return true; 
            }
            else {
                return false;
            }   
        }
        else {
            return false;
        }
    }

    clickOnVertices(x, y) {
        for (let i = 0; i < this.vertices.length; i++) {
            
            if (this.vertices[i].clickOnVertex(x, y)) {
                return true;
            }
        }
        return false;
    }

    modifyVertexOnClick(xDown, yDown, xMove, yMove) {
        for (let i = 0; i < this.vertices.length; i++) {
            
            if (this.vertices[i].clickOnVertex(xDown, yDown)) {
                this.vertices[i].x = xMove;
                this.vertices[i].y = yMove;
                break;
            }
        }
    }

    deleteVertexOnDbClick(x, y) {
        for (let i = 0; i < this.vertices.length; i++) {
            
            if (this.vertices[i].clickOnVertex(x, y)) {
                this.vertices.splice(i, 1);
                break;
            }
        }
        if(this.vertices.length < 3){
            this.center = undefined;
        }
    }

    changeColorFigure(numero) {
        if((this.r += numero) > 0 && (this.r += numero) < 255 ) {
            this.r += numero;    
        }
        if((this.g += numero) > 0 && (this.g += numero) < 255 ) {
            this.g += numero;    
        }
        if((this.b += numero) > 0 && (this.b += numero) < 255 ) {
            this.b += numero;    
        }
        
        this.center.changeColorVertex(numero);
        for (let i = 0; i < this.vertices.length; i++) {
            
            this.vertices[i].changeColorVertex(numero);
        }
    }

}