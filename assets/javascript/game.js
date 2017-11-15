//sets default values
var randomNumber = Math.ceil(Math.random()*100);
var wins = 0;
var losses = 0;
var userScore = 0;
var gemoneNumber =  Math.ceil(Math.random()*12);
var gemtwoNumber =  Math.ceil(Math.random()*12);
var gemthreeNumber =  Math.ceil(Math.random()*12);
var gemfourNumber =  Math.ceil(Math.random()*12);

//prints out default values
$("#losses").html("Losses: "+ losses);
$("#wins").html("Wins: "+ wins);
$("#randomnumber").html(randomNumber);
$("#userscore").html(userScore);


//function that checks if random and user scores are the same or not
var check = function(){
	if(randomNumber === userScore){
		wins++;
		$("#wins").html("Wins: "+ wins);
		reset();
	}else if(randomNumber < userScore){
		losses++;
		$("#losses").html("Losses: "+ losses);
		reset();

	}
}
//reset function that puts everything back to default values except win or loss 
var reset = function(){
	randomNumber = Math.ceil(Math.random()*100);
	userScore = 0;
	gemoneNumber =  Math.ceil(Math.random()*12);
	gemtwoNumber =  Math.ceil(Math.random()*12);
	gemthreeNumber =  Math.ceil(Math.random()*12);
	gemfourNumber =  Math.ceil(Math.random()*12);
	$("#randomnumber").html(randomNumber);
	$("#userscore").html(userScore);



}



//click event of when clicked user score gets added by the gems score at the time
$("#gemone").on("click", function() {
  	
  	userScore = userScore + gemoneNumber;
  	$("#userscore").html(userScore);
  	check();
});
$("#gemtwo").on("click", function() {
  	
  	userScore = userScore + gemtwoNumber;
  	$("#userscore").html(userScore);
  	check();
});
$("#gemthree").on("click", function() {
  	
  	userScore = userScore + gemthreeNumber;
  	$("#userscore").html(userScore);
  	check();
});
$("#gemfour").on("click", function() {
  	
  	userScore = userScore + gemfourNumber;
  	$("#userscore").html(userScore);
  	check();
});


