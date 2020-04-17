var rand = Math.floor(Math.random() * 4);
var location1 = rand;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false)
{
	guess = prompt("Ready, aim, fire!(enter a number from 0-6):");
	if(guess < 0 || guess > 6){
		alert("Invalid number..");
	}
	else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3)
		{
			alert("HIT!");
			hits = hits + 1;
			if(hits == 3)
			{
				isSunk = true;
				alert("U sank my battleship!");
			}
		}
		else
		{
			alert("MISS");
		}
	}
}
var stats = "U took " + guesses + " guesses to sink the battleship, wich means ur shooting accuracy was " + (3/guesses);
alert(stats);
		