

var image;
var gray;
var sunny;
var rodeo;
var cool;
var isLoaded = false;
var isOriginal = false;


function upload(){
    var img = document.getElementById("upload-image-button");
    image = new SimpleImage(img);
    gray = new SimpleImage(img);
    sunny = new SimpleImage(img);
    rodeo = new SimpleImage(img);
    cool = new SimpleImage(img);
    var photo = document.getElementById("phone-screen");
    image.drawTo(photo);
    isLoaded = true;
    isOriginal = true;
}

function setGrayscale(){
    for(var pixel of gray.values()){
        var redPixel = pixel.getRed();
        var greenPixel = pixel.getGreen();
        var bluePixel = pixel.getBlue();
        var average = (redPixel + greenPixel + bluePixel)/3;
        pixel.setRed(average);
        pixel.setGreen(average);
        pixel.setBlue(average);
        
    }
}

function grayscale(){
    if(isLoaded == true){
        setGrayscale();
        var photo = document.getElementById("phone-screen");
        gray.drawTo(photo);
        isOriginal = false;
    } 
}

function setSunshine(){
    for(var pixel of sunny.values()){
        var redPixel = pixel.getRed();
        var greenPixel = pixel.getGreen();
        var bluePixel = pixel.getBlue();
        var average = (redPixel + greenPixel + bluePixel)/3;
        pixel.setRed(average*2);
        pixel.setGreen(average*1.5);
        pixel.setBlue(average);
    }
}

function sunshine(){
    if(isLoaded == true){
        setSunshine();
        var photo = document.getElementById("phone-screen");
        sunny.drawTo(photo);
        isOriginal = false;
    } 
}

// function setHavana(){
//     for(var pixel of rodeo.values()){
//         var redPixel = pixel.getRed();
//         var greenPixel = pixel.getGreen();
//         var bluePixel = pixel.getBlue();
//         var average = (redPixel + greenPixel + bluePixel)/3;
//         // average /= 1.5;
//         pixel.setRed(average);
//         pixel.setGreen(average /1.33);
//         pixel.setBlue(average/1.26);
//     }
// }

// function havana(){
//     if(isLoaded == true){
//         setHavana();
//         var photo = document.getElementById("phone-screen");
//         rodeo.drawTo(photo);
//         isOriginal = false;
//     } 
// }

function setPalm(){
    for(var pixel of cool.values()){
        var redPixel = pixel.getRed();
        var greenPixel = pixel.getGreen();
        var bluePixel = pixel.getBlue();
        var average = (redPixel + greenPixel + bluePixel)/3;
        // average /= 1.2;
        pixel.setRed(average/1.17);
        pixel.setGreen(average * 1.02);
        pixel.setBlue(average / 1.04);
    }
}

function palmtree(){
    if(isLoaded == true){
        setPalm();
        var photo = document.getElementById("phone-screen");
        cool.drawTo(photo);
        isOriginal = false;
    } 
}


function reset(){
    var photo = document.getElementById("phone-screen");
    if(isOriginal == true){
        image.drawTo(photo);
    }
    else{
        image.drawTo(photo);
    }
}

var paintcanvas = document.getElementById("draw");
var details = paintcanvas.getContext("2d");
var color = 'black';
var radius = 100;
var isDrawing = false;
draw.width = 400;
draw.height= 500;

function strokes(x,y){
    details.beginPath();
    details.arc(x,y,radius, 0,Math.PI * 2, true);
    details.fillStyle = color;
    details.fill();
}

function start(){
    isDrawing = true;
}

function end(){
    isDrawing = false;
}

function paint(x,y){
    if(isDrawing == true){
        strokes(x,y);
    }
}

function colorTulip(){
    color = ' #fc8585';
}

function colorTopaz(){
    color = '#ffc86d';
}

function colorChampagne(){
    color = '#fbdba2';
}

function colorAntique(){
    color = '#f6eadb';
}

function colorSky(){
    color = '#85cbd9';
}

function resizeBrush(newSize){
    radius = newSize;
    document.getElementById("newSize").value = newSize;
}

