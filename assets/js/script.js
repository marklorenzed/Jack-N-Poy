x = randomize();
var enemypick = 0;
var player = 0;
var playerpick = 0;
var playerscore = 0;
var enemyscore = 0;


function randomize () {
	var x = Math.floor(Math.random()*(3)+1);
	var y;
	if(x === 1){
		y = 'rock'; 
	}
	if(x === 2){
		y = 'paper'; 
	}
	if(x === 3){
		y = 'scissor'; 
	}
	console.log("Enemy pick is "+ y);

	return x;
}


function playerPickRock (){
	player = playerpick + 1;
	play.battle();
	updateScore();
	checkwhowins();
	}
function playerPickPaper (){
	player = playerpick + 2;
	play.battle();
	updateScore();
	checkwhowins();
	}
function playerPickScissor (){
	player = playerpick + 3;
	play.battle();
	updateScore();
	checkwhowins();
	}

var play = {
	playerscore: 0,
	enemyscore: 0,
	battle: function(){

	x = randomize();
		if(x == player){
		// alert("DRAW");
		document.getElementById("battleresult").innerHTML = "It's a Draw!";
		if(x==1) 
			document.getElementById("enemyresult").src = "assets/img/rock.jpg";
		if(x==2)
			document.getElementById("enemyresult").src = "assets/img/paper.jpg";
		if(x==3)
			document.getElementById("enemyresult").src = "assets/img/scissors.jpg";
		if(player == 1)
			document.getElementById("playerresult").src = "assets/img/rock.jpg";
		if(player == 2)
			document.getElementById("playerresult").src = "assets/img/paper.jpg";
		if(player == 3)
			document.getElementById("playerresult").src = "assets/img/scissors.jpg";

		}
		if(x ==1 && player==2){
		document.getElementById("battleresult").innerHTML = "You win!";
		document.getElementById("enemyresult").src = "assets/img/rock.jpg";
		document.getElementById("playerresult").src = "assets/img/paper.jpg";
		// alert("YOU WIN");
		playerscore++
		}
		if(x ==1 && player==3){
		document.getElementById("battleresult").innerHTML = "You lose!";
		document.getElementById("enemyresult").src = "assets/img/rock.jpg";
		document.getElementById("playerresult").src = "assets/img/scissors.jpg";
		// alert("YOU LOSE");
		enemyscore ++
		}
		if(x ==2 && player==1){
		document.getElementById("battleresult").innerHTML = "You lose!";
		document.getElementById("enemyresult").src = "assets/img/paper.jpg";
		document.getElementById("playerresult").src = "assets/img/rock.jpg";
		// alert("YOU LOSE");
		enemyscore ++
		}
		if(x ==2 && player==3){
		document.getElementById("battleresult").innerHTML = "You win!";
		document.getElementById("enemyresult").src = "assets/img/paper.jpg";
		document.getElementById("playerresult").src = "assets/img/scissors.jpg";
		// alert("YOU WIN");
		playerscore++
		}
		if(x ==3 && player==1){
		document.getElementById("battleresult").innerHTML = "You win!";
		document.getElementById("enemyresult").src = "assets/img/scissors.jpg";
		document.getElementById("playerresult").src = "assets/img/rock.jpg";
		// alert("YOU WIN");
		playerscore++
		}
		if(x ==3 && player==2){
		document.getElementById("battleresult").innerHTML = "You lose!";
		document.getElementById("enemyresult").src = "assets/img/scissors.jpg";
		document.getElementById("playerresult").src = "assets/img/paper.jpg";
		// alert("YOU LOSE");
		enemyscore ++
		}
	
	}
}

function updateScore() {
	document.getElementById("playerscore").innerHTML = playerscore;
	document.getElementById("enemyscore").innerHTML = enemyscore;
}

function checkwhowins() {
	if(playerscore === 5){
		$("#battleresult")("CONGRATULATIONS!! YOU WIN!!");
	}
	else if(enemyscore === 5) {
		$("#battleresult").html("Sorry, Better luck next time!");
	}
}


function resetScore () {
	window.location.reload();


}