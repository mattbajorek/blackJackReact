module.exports = function(cards) {
	let sum = 0, user = Object.keys(cards)[0];
	// Loop through each card
	cards[user].map(x => {
		switch(x.number) {
			case 'A':
				if (sum < 11) sum += 11
				else sum += 1
				break;
			case 'J':
			case 'Q':
			case 'K':
				sum += 10;
				break;
			default:
				sum += Number(x.number);
		}
	});
	// Return obj
	return {
		user: user,
		sum: sum
	};
}