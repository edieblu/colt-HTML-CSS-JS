var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function(){
	button.style.background = "purple";
	isPurple = !isPurple;
})