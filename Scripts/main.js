//START OF JAVASCRIPT//
//Zoom-in & Zoom-out buttons//
var fontSize = 1;
function zoomIn() {
	fontSize += 0.3;
	document.body.style.fontSize = fontSize + "em";
}
function zoomOut() {
	fontSize -= 0.3;
	document.body.style.fontSize = fontSize + "em";
}
