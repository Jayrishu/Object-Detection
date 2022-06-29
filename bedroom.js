img = "";
objects=[];
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
    if (status != "") {
        for (let i = 0; i < objects.length; i++) {
            
            document.getElementById("status").innerHTML = "Objects Detected";
            fill(255,0,0);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label +" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(255,0,0);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
}
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        objects = results
    }
}