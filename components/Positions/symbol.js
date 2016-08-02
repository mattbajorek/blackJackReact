module.exports = function(symbol) {
	switch (symbol) {
		case '\u2660':
			return 'spade'
		case '\u2663':
			return 'club'
		case '\u2665':
			return 'heart'
		case '\u2666':
			return 'diamond'
	}
}