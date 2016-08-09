module.exports = function(player,dealer) {
	let result, winner, multiply;
	if (player > 21 && dealer > 21) {
		result = 'Player busts and dealer busts! No winner!';
	} else if (player === 21 && dealer > 21) {
		result = 'Player has blackjack! Dealer busts! Player wins double!';
		winner = 'player'; multiply = 4;
	} else if (player > 21 && dealer === 21) {
		result = 'Dealer has blackjack! Player busts! Dealer wins!';
		winner = 'dealer';
	} else if (player === 21 && dealer === 21) {
		result = 'Player and Dealer both have blackjack! No winner!';
    winner = 'tie';
	} else if (player === 21 && dealer < 21) {
		result = 'Player has blackjack! Player wins double!';
		winner = 'player'; multiply = 4;
	} else if (player < 21 && dealer === 21) {
		result = 'Dealer has blackjack! Dealer wins!';
		winner = 'dealer';
	} else if (player > 21 && dealer < 21) {
		result = 'Player busts! Dealer wins!';
		winner = 'dealer';
	} else if (player < 21 && dealer > 21) {
		result = 'Dealer busts! Player wins!';
		winner = 'player'; multiply = 2;
	} else if (player > dealer) {
		result = 'Player wins by ' + (player-dealer);
		winner = 'player'; multiply = 2;
	} else if (player < dealer) {
		result = 'Dealer wins by ' + (dealer-player);
		winner = 'dealer';
	} else {
		result = 'Tie! No winner!';
    winner = 'tie';
	}
	return {
    result: result,
    winner: winner,
    multiply: multiply
  }
}