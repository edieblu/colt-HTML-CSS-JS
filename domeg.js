var body = document.querySelector("body");
var isBlue = false;

// setInterval(function(){
// 	if (isBlue) {
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "#3498db";
// 	}
// 	isBlue = !isBlue;
// }, 1000)

var tag = document.getElementById("highlighted");
tag.style.color = "yellow"

var tags = document.getElementsByClassName("bold");
tags.style.font = "bold"