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


// calling the priceChange function every 15 seconds
function everyFifteen() {
	setInterval(priceChange, 2000); 

	// randomly changing the fruit price
	function priceChange(specificFruit) {
		//var newPrice = randomNumber(.01, .5);
		fruit[i][1] += randomNumber(-50, 50) / 100;
		// if(fruit > 9.99 || fruit < .5) {
		// 	;
		// }
		console.log(fruit[i][1]);
	}
}



function buyFruit() {
	console.log("buy fruit!!")
}

// everyFifteen();

for(i=0; i < fruits.length; i++) {
	everyFifteen(fruits[i]);
}



	// need name and market price of each piece of fruit
	// display these on the DOM

	

	//market price fluctuates up or down 50 cents (between 1 cent and 50 cents) every 15 seconds
	// fruits cannot go below 50 cents or above $9.99
	// > .5 and < 9.99

	// Each fruit has a button: 'button like'

	//