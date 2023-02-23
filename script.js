{/* <script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js"></script> */}

var image;
var gray;

function upload(){
    var img = document.getElementById("upload-image-button");
    image = new SimpleImage(img);
    gray = image;
    var photo = document.getElementById("phone-screen")
    image.drawTo(photo);
}

// function grayscale(){
//     for(var pixel of gray.values()){
//         var redPixel = pixel.getRed();
//         var greenPixel = pixel.getGreen();
//         var bluePixel = pixel.getBlue();
//         var average = redPixel + greenPixel + bluePixel
//     }
// }