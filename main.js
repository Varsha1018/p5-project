function preload(){
}


function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(190,300);
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}

function draw(){
    image(video,50, 50, 550, 400);
    
    tint(tint_colour);

    
    stroke(255, 0, 0);
    fill(250, 0, 0);
    circle(50, 50, 80);

    stroke(0, 128, 0);
    fill(0, 128, 0);
    rect(90, 40, 460, 20);

    stroke(255, 0, 0);
    fill(250, 0, 0);
    circle(590, 50, 80);

    stroke(0, 128, 0);
    fill(0, 128, 0);
    rect(580, 90, 20, 460);

    stroke(255, 0, 0);
    fill(250, 0, 0);
    circle(590, 439, 80);

    stroke(0, 128, 0);
    fill(0, 128, 0);
    rect(90, 430, 460, 20);

    stroke(255, 0, 0);
    fill(250, 0, 0);
    circle(50, 439, 80);

    stroke(0, 128, 0);
    fill(0, 128, 0);
    rect(40, 90, 20, 310);



}

function take_snapshot(){
    save("image.png");
}

function filter_tint(){
    tint_colour=document.getElementById("colour_name").value;
}

