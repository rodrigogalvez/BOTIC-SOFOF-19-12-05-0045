"use strict";

// http://localhost:5500/index.html

let status = document.getElementById("status");

let video = document.getElementById("videoInput");

let canvas = document.getElementById("canvasOutput");

let height = video.height;
let width = video.width;

let src = new cv.Mat(height, width, cv.CV_8UC4);
let gray = new cv.Mat();//height, width, cv.CV_8UC1);
let dst = new cv.Mat(height, width, cv.CV_8UC4);
let cap = new cv.VideoCapture(video);
let faces = new cv.RectVector();
let eyes = new cv.RectVector();
const rate = 1000 / 30;

let faceCascade = new cv.CascadeClassifier();
let eyeCascade = new cv.CascadeClassifier();

let utils = new Utils(status);

let baseURL = "https://raw.githubusercontent.com/opencv/opencv/3.4.0/data/haarcascades/";

let pending = 0;

pending++;
let faceCascadeFile = 'haarcascade_frontalface_default.xml';
pending++;
let eyeCascadeFile = 'haarcascade_eye.xml';

utils.createFileFromUrl(faceCascadeFile, baseURL + faceCascadeFile, () => {
    faceCascade.load(faceCascadeFile);
    pending--;
});

utils.createFileFromUrl(eyeCascadeFile, baseURL + eyeCascadeFile, () => {
    eyeCascade.load(eyeCascadeFile);
    pending--;
});

navigator
    .mediaDevices
    .getUserMedia(
        {
            video: true,
            audio: false
        }
    )
    .then(function (stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function (err) {
        status.innerHTML = "Error: " + err.message;
        console.error(err);
    });

function onOpenCvReady() {
    status.innerHTML = 'OpenCV.js is ready.';
}

function processVideo() {
    if (pending === 0) {
        cap.read(src);
        src.copyTo(dst);
        cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);

        faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);
        for (let i = 0; i < faces.size(); ++i) {
            let face = faces.get(i);
            // let roiGray = gray.roi(face);
            // let roiSrc = src.roi(face);
            let point1 = new cv.Point(face.x, face.y);
            let point2 = new cv.Point(face.x + face.width, face.y + face.height);
            cv.rectangle(dst, point1, point2, [255, 0, 0, 255]);
            // // detect eyes in face ROI
            // eyeCascade.detectMultiScale(roiGray, eyes);
            // for (let j = 0; j < eyes.size(); ++j) {
            //     let point1 = new cv.Point(eyes.get(j).x, eyes.get(j).y);
            //     let point2 = new cv.Point(eyes.get(j).x + eyes.get(j).width,
            //         eyes.get(j).y + eyes.get(j).height);
            //     cv.rectangle(roiSrc, point1, point2, [0, 0, 255, 255]);
            // }
            // roiGray.delete();
            // roiSrc.delete();
        }

        cv.imshow(canvas, dst);
    }
}

let timer = setInterval(processVideo, rate);
