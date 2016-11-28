console.log("JS file is connected to HTML! Woo!");

var cards = ['queen', 'queen', 'king', 'king'];

var card = [];

var cardsInPlay = [];

/*if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	var card;
	for(var i = 0; i < 4; i++ ) {
	card = document.createElement('div');
	card.className = "card";
	gameBoard.appendChild(card);
}
}

var createBoard = function() {
	var card = document.getElementsByClassName('card')
	for(var i=0; i < cards.length; i++) {
		card[i].setAttribute('data-card',cards[i]);
	} 
}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a Match!");
		return true;
	} else {
		alert("Nice try loser!");
		return false;
	}
}


function isTwoCards() {
	var clickedCard = this.getAttribute('data-card');
	if (clickedCard === 'king') {
		this.innerHTML = '<img src="king.png" alt="The King"/>'
	} 
	if (clickedCard === 'queen') {
		this.innerHTML = '<img src="queen.png" alt="The Queen"/>'
	}
	cardsInPlay.push(this.getAttribute('data-card'));
	//console.log(cardsInPlay);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createCards();
createBoard();

var card = document.getElementsByClassName('card');
for(var i=0; i<cards.length; i++) {
	card[i].addEventListener('click', isTwoCards)
}

