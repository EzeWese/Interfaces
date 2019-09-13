export class Vertex{
    x = 0;
    y = 0;
    radius = 0;
    r; g; b;

    constructor() {
    }

    setPropieties(x, y, radius, r, g, b){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    redraw(context) {
    
        context.fillStyle = 'rgb('+this.r+', '+this.g+', '+this.b+')';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        context.fill();
        context.closePath();
    }

    setX(px){
        this.x += px;
    }

    setY(py){
        this.y += py;
    }

    getCoordX(){
        return this.x;
    }

    getCoordY(){
        return this.y;
    }

    getRadius(){
        return this.radius;
    }

    clickOnVertex(x, y) {
            
        if(Math.sqrt((x-this.x)*(x-this.x) + (y-this.y)*(y-this.y)) < this.radius) {
            return true; 
        }
        else {
            return false;
        }   
        
    }

    changeColorVertex(numero) {
        if((this.r += numero) > 0 && (this.r += numero) < 255 ) {
            this.r += numero;    
        }
        if((this.g += numero) > 0 && (this.g += numero) < 255 ) {
            this.g += numero;    
        }
        if((this.b += numero) > 0 && (this.b += numero) < 255 ) {
            this.b += numero;    
        }
        
    }

}