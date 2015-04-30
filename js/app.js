$(document).ready(function(){

	fizzbuzz();

	});



function fizzbuzz(num){
	
	var num = prompt("Please enter a number between 1 and 100.", "1,2...");
	num = parseFloat(num);
	
	if (isNaN(num)){
		alert("You will type a number or nothing at all!");
	}
	else if (num % 1 != 0) {
		alert("No decimal numbers!");
	}
	else {
		for(var i = 1; i <= num; i++){
			if (i % 15 == 0){
				$('.numbers').append('<li>FIZZBUZZ!</li>');
			}
			else if (i % 5 == 0){
				$('.numbers').append('<li>Buzz</li>');
			}
			else if (i % 3 == 0){
				$('.numbers').append('<li>Fizz</li>');
			}
			else {
				$('.numbers').append('<li>' + i + '</li>');
			}
		}
	}
}