objects=[];
status="";
function setup(){
canvas=createCanvas(400,400);
canvas.position(550,250);
}
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
    if(status!=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status Object Detected";
            document.getElementById("objects").innerHTML="Number of Objects Detected are:"+objects.length;
            fill("red");
            stroke("red");
            noFill();
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            rect(objects[i].x,objects[i].y,object[i].width,objects[i].height);
        }
    }}
function gotResult(error,result){
    if(error){
        console.log(error);

    }
    else{
        console.log(result);
    }
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
