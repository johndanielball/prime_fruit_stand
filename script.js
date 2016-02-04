var apple = ['apple', 1];
var orange = ['orange', 1]; 
var banana = ['banana', 1]; 
var grape = ['grape', 1]; 
var userTotalCash = 100;

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var fruits = [apple, orange, banana, grape];

// jquery document ready listener
$(document).ready(function() {

	$('#apple').append('<button class="apple-button">Buy Apple</button>');
	$('.apple-button').on('click', buyFruit);

	$('#banana').append('<button class="banana-button">Buy Banana</button>');
	$('.banana-button').on('click', buyFruit);

	$('#orange').append('<button class="orange-button">Buy Orange</button>');
	$('.orange-button').on('click', buyFruit);

	$('#grapes').append('<button class="grapes-button">Buy Grapes</button>');
	$('.grapes-button').on('click', buyFruit);








})



setInterval(priceChange, 15000);

// randomly changing the fruit price
function priceChange() {
	for (var i = 0; i < fruits.length; i++) {
		var randomPrice = randomNumber(-.50, .50);
		var currentPrice = fruits[i][1];
		var newPrice = randomPrice + currentPrice;
		if (newPrice < .50) {
			newPrice = .50;
		} else if (newPrice > 9.99) {
			newPrice = 9.99;
		}
		fruits[i][1] = newPrice;
	}
}




function buyFruit() {
	console.log("buy fruit!!")
}

// everyFifteen();

// We can use just 1 interval for every fifteen seconds to change the price for all of the fruit's at once. - John
//for(i=0; i < fruits.length; i++) {
//	everyFifteen(fruits[i]);
//}



	// need name and market price of each piece of fruit
	// display these on the DOM

	

	//market price fluctuates up or down 50 cents (between 1 cent and 50 cents) every 15 seconds
	// fruits cannot go below 50 cents or above $9.99
	// > .5 and < 9.99

	// Each fruit has a button: 'button like'

	//