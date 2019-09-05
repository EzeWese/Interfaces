let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let wrh = 0;
let newWidth = 0;
let newHeight = 0;
let xOffset = 0;
let yOffset = 0;

let btnCanvas = document.getElementsByClassName('clean');
btnCanvas[0].addEventListener('click', cleanCanvas);

let btnRectContext = document.getElementsByClassName('rectContext');
btnRectContext[0].addEventListener('click', rectContext);

let btnRectImageData = document.getElementsByClassName('rectImageData');
btnRectImageData[0].addEventListener('click', rectImageData);

let btnGradient = document.getElementsByClassName('gradient');
btnGradient[0].addEventListener('click', drawGradient);

let btnGradientThree = document.getElementsByClassName('gradient3');
btnGradientThree[0].addEventListener('click', paintFirstGradient);

let uploadImage1 = document.getElementsByClassName('picture');
uploadImage1[0].addEventListener('click', function () { uploadImage(uploadImage1[0].value) });

let uploadImage2 = document.getElementsByClassName('picture');
uploadImage2[1].addEventListener('click', function () { uploadImage(uploadImage2[1].value) });

let uploadImage3 = document.getElementsByClassName('picture');
uploadImage3[2].addEventListener('click', function () { uploadImage(uploadImage3[2].value) });

let btnFilterGrey = document.getElementsByClassName('filterGrey');
btnFilterGrey[0].addEventListener('click', filterGrey);
btnFilterGrey[1].addEventListener('click', filterGrey);
btnFilterGrey[2].addEventListener('click', filterGrey);


function rectContext() {
    context.fillStyle = "rgba(255, 127, 80, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}

function cleanCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function rectImageData() {
    var imageData = context.createImageData(canvas.width, canvas.height);
    
    // Iterate through every pixel
    for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            setPixel(imageData, x, y, 0, 0, 0, 80);
        }
    }
    // Draw image data to the canvas
    context.putImageData(imageData, 0, 0);
}

function drawGradient() {
    var imageData = context.createImageData(canvas.width, canvas.height);
    let r = 0; 
    let g = 0;
    let b = 0;

    for (let x = 0; x < imageData.width; x++) {
        
        for (let y = 0; y < imageData.height; y++) {
            r = (y / imageData.height) * 255;
            g = (y / imageData.height) * 255;
            b = (y / imageData.height) * 255;

            setPixel(imageData, x, y, r, g, b, 255);
        }
    }
    context.putImageData(imageData, 0, 0);
}

function paintFirstGradient(){
    var imageData = context.createImageData(canvas.width, canvas.height);
    let r = 0; 
    let g = 0;
    let b = 0;

    for (let x = 0; x < imageData.width/2; x++) {
        
        for (let y = 0; y < imageData.height; y++) {
            r = (x / imageData.height) * 255;
            g = (x / imageData.height) * 255;
            b = (x / imageData.height) * 0;

            setPixel(imageData, x, y, r, g, b, 255);
        }
    }
    paintSecondGradient(imageData, r, g, b);
    context.putImageData(imageData, 0, 0);
    
}

function paintSecondGradient(imageData, r, g, b){
    let gpx = 255 / (imageData.width / 2);

    for (let x = imageData.width/2; x < imageData.width; x++) {
        g = g - gpx;
        for (let y = 0; y < imageData.height; y++) {
            setPixel(imageData, x, y, r, g, b, 255);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

function uploadImage(source) {
    let image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = source;
    

    image.onload = function() {
        myDrawImageMethod(this);
    }
}

function myDrawImageMethod(image) {
    wrh = image.width / image.height;
    newWidth = canvas.width;
    newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * wrh;
    }
    xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
    yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
    rectImageDataBlack();
    context.drawImage(image, xOffset, yOffset, newWidth, newHeight);
}

function rectImageDataBlack() {
    var imageData = context.createImageData(canvas.width, canvas.height);
    
    // Iterate through every pixel
    for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            setPixel(imageData, x, y, 0, 0, 0, 255);
        }
    }
    // Draw image data to the canvas
    context.putImageData(imageData, 0, 0);
}

function filterGrey() {
   let imageData = context.getImageData(xOffset, yOffset, newWidth, newHeight);
   let pixels = imageData.data;
   let numPixels = pixels.length;

   for (let i = 0; i < numPixels; i+=4) {
       let rpx = pixels[i];
       let gpx = pixels[i+1];
       let bpx = pixels[i+2];
       //let apx = pixels[i+3];

       let grey = (rpx + gpx + bpx) / 3;

       pixels[i] = grey;   
       pixels[i+1] = grey;
       pixels[i+2] = grey;
   }
   context.putImageData(imageData, xOffset, yOffset);
}

let w = 100;
let h = 100;

let matrix = [];

for(let i=0; i<w; i++){
    matrix[i] = [];
    for(let j=0; j<h; j++){
        matrix[i][j] = Math.floor(Math.random()*100);
    
    }
}

for(let i=0; i<w; i++){
    console.log(matrix[i]);
}

function getMaxOfMatrix(){
    let arr = [];
    for(let i=0; i<w; i++){
        arr.push(Math.max.apply(null, matrix[i]));
    }
    
    console.log("Valor maximo de la matriz: "+ Math.max.apply(null, arr));
}

function getMinMax() {
    let arrMax = [];
    let arrMin = [];
    for (let i = 0; i < w; i++) {
        if(i % 2 == 0){
            arrMax.push(Math.max.apply(null, matrix[i]));
        }
        else{
            arrMin.push(Math.min.apply(null, matrix[i]));
        }
    }
    
    console.log("Valor minimo de filas impares: " + Math.min.apply(null, arrMin));
    console.log("Valor maximo de filas pares: " + Math.max.apply(null, arrMax));
}

function getAVG(){
    let arr = [];
    
    for (let i = 0; i < w; i++) {
        let sum = 0;
        let avg = 0;
        for (let j = 0; j < w; j++) {
            sum += matrix[i][j];
        }
        avg = sum / w;
        arr.push(avg);
    }
    
    console.log("Promedios de cada fila: " + arr);
}

getMaxOfMatrix();
getMinMax();
getAVG();