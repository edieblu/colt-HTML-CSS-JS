var p1Score = 0;
var p2Score = 0
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.getElementById("reset")
var gameOver = false;
var winningScore = 5;
var player1 = document.getElementById("p1");
var player2 = document.querySelector("#p2");
var numInput = document.querySelector("input");
var para = document.querySelector("p span");

p1.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner")
			gameOver = true;
		}
		p1Display.textContent = p1Score
	}
	
	
})

p2.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner")
			gameOver = true;
		}
		p2Display.textContent = p2Score
	}	
	
});

reset.addEventListener("click", function(){
	resetIt();
	
})

function resetIt(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	para.textContent =(this.value);
	winningScore = Number(this.value);
	resetIt();
})
