$(document).ready(function () {
//randomize the logo values on page load 1-12
	soccerValue1 = Math.floor((Math.random() * 7) + 1);
	console.log("random number for USA Logo is: " + soccerValue1);
	soccerValue2 = Math.floor((Math.random() * 9) + 1);
	console.log("random number for Chelsea Logo is: " + soccerValue2);
	soccerValue3 = Math.floor((Math.random() * 11) + 1);
	console.log("random number for Orlando Logo is: " + soccerValue3);
	soccerValue4 = Math.floor((Math.random() * 13) + 1);
	console.log("random number for FCB Logo is: " + soccerValue4);
//load up some variables that start at 0
	var myGoals = 0;
	var myWins = 0;
	var myLosses = 0;
//set mins and maxs	
	var minNum = 25;
	var maxNum = 109;
//sound clips 	
	var audioWin = new Audio('assets/cheersound.wav');
	var audioLose = new Audio('assets/boosound.wav');
	
//load the 0 values and place them on the page
	$('#player').html('<h6>' + myGoals + '</h6>');
	$('#wins').html('<h6>' + myWins + '</h6>');
	$('#losses').html('<h6>' + myLosses + '</h6>');

//fuction that generates the random number between 25-109
	function targetNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	};
	//assign generated number to var and display it on page
	var randomNumb = targetNumber(25, 109);
	$('#target').html('<h6>' + randomNumb + '</h6>');
	console.log("random number between 25-109 is: " + randomNumb);

	//when clicked add my goal count to the random number assigned to the logo, display it on the page.
	//check for a win or loss
	//repeat for each logo
	$(".soccer1").click(function () {
		myGoals += soccerValue1;
		$('#player').html('<h6>' + myGoals + '</h6>');
		winorLose()

	});
	$(".soccer2").click(function () {
		myGoals += soccerValue2;
		$('#player').html('<h6>' + myGoals + '</h6>');
		winorLose()

	});
	$(".soccer3").click(function () {
		myGoals += soccerValue3;
		$('#player').html('<h6>' + myGoals + '</h6>');
		winorLose()

	});
	$(".soccer4").click(function () {
		myGoals += soccerValue4;
		$('#player').html('<h6>' + myGoals + '</h6>');
		winorLose()
	});

	
	//win or loss setups
	//if my goals = random then record a win, display on page
	//if you go over, record a loss, display on page
	//cheer sound or boo sound/alert
	//page reload


	var winorLose = function () {
		if (myGoals == randomNumb) {
			myWins++;
			$('#wins').html('<h6>' + myWins + '</h6>');
			audioWin.play()
			alert("You have scored the right number of goals!");
			resetGame();
		}
		if (myGoals > randomNumb) {
			myLosses++;
			$('#losses').html('<h6>' + myLosses + '</h6>');
			audioLose.play();
			alert("You went over!");
			resetGame();


		}
	}
	//set up a restart/reset
	//goals to 0
	//get another random number, display
	
	var resetGame = function () {
		myGoals = 0;

		$("#player").html(myGoals);
		randomNumb = targetNumber(25, 109);
		$('#target').html('<h6>' + randomNumb + '</h6>');

	}

});