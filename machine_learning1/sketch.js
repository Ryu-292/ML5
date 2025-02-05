
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let triangles;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(1080, 640);
    // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(1080, 640);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  if (faces.length > 0 && faces[0].lips) {
    fill(0, 255, 100);
    rect(
      faces[0].lips.x,
      faces[0].lips.y,
    );
  }

  drawPartsKeypoints();
  
}


// Draw keypoints for specific face element positions
function drawPartsKeypoints() {
  // If there is at least one face
  if (faces.length > 0) {
    for (let i = 0; i < faces[0].lips.keypoints.length; i++) {
      let lips = faces[0].lips.keypoints[i];
      fill(0, 255, 100);
      circle(lips.x, lips.y, 5);
    }
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}


