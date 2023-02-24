{/* <script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js"></script> */}

var image;
var gray;
var sunny;
var rodeo;
// var photo;
var isLoaded = false;
var isOriginal = false;


function upload(){
    var img = document.getElementById("upload-image-button");
    image = new SimpleImage(img);
    gray = new SimpleImage(img);
    sunny = new SimpleImage(img);
    rodeo = new SimpleImage(img);
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

function setHavana(){
    for(var pixel of rodeo.values()){
        var redPixel = pixel.getRed();
        var greenPixel = pixel.getGreen();
        var bluePixel = pixel.getBlue();
        var average = (redPixel + greenPixel + bluePixel)/3;
        pixel.setRed(average);
        pixel.setGreen(average /1.33);
        pixel.setBlue(average/1.26);

        // var red = 240;
        // var green = 66;
        // var blue = 196;
        // if(redPixel > red){
        //     pixel.setRed(red);
        //     pixel.setGreen(red /3.38);
        //     pixel.setBlue(red/7.5);
        // }
        // else if(redPixel < greenPixel && greenPixel > bluePixel && greenPixel > green){
        //     pixel.setRed(green * 2.41);
        //     pixel.setGreen(green);
        //     pixel.setBlue(green *1.97);
        // }
        // else if (bluePixel < redPixel && greenPixel < bluePixel && bluePixel > blue){
        //     pixel.setRed(blue *1.26);
        //     pixel.setGreen(blue / 6.125);
        //     pixel.setBlue(blue);
        // }
    }
}

function havana(){
    if(isLoaded == true){
        setHavana();
        var photo = document.getElementById("phone-screen");
        rodeo.drawTo(photo);
        isOriginal = false;
    } 
}