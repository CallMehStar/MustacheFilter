moustacheX=200;
moustacheY=320;

function preload() {
    moustache = loadImage('https://i.postimg.cc/fRg9MJBR/moustache.png');
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 450, 450);
    image(moustache, moustacheX, moustacheY, 70, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("moustache x = " + moustacheX);
        console.log("moustache y = " + moustacheY);
    }
}