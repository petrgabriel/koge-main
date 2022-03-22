//START OF JAVASCRIPT//
var fontSize = 1;
function zoomIn() {
	fontSize += 0.3;
	document.body.style.fontSize = fontSize + "em";
}
function zoomOut() {
	fontSize -= 0.3;
	document.body.style.fontSize = fontSize + "em";
}
//MAP//
function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(51.508742,-0.120850),
	  zoom:5,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
