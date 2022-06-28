img = "";
function preload(){
img = loadImage("bedroom.jpeg");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects..."

}
status ="";
function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}
function draw(){
    image(img, 0,0,500,400);
    
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("status").innerHTML = "Objects Detected"
    }
}