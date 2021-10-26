function setup() {
	canvas = createCanvas(400, 400);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	classifier = ml5.imageClassifier("MobileNet", modelFired);
}

function modelFired() {
	console.log("Starting...");
}

function draw() {
	image(video, 0, 0, 400, 400);
	classifier.classify(video, gotres);
}

function gotres(error,result) {
	if (error) {
		console.error("ERROR!!!!");
	} else {
		console.log(result);
		document.getElementById("result").innerHTML = result[0].label;
		document.getElementById("accr").innerHTML = result[0].confidence.toFixed(2);
	}
}
// link: https://storage.googleapis.com/tm-model/9Lf86XFIm/model.json MobileNet
