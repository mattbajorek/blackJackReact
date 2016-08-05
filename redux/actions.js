export default {
	select: function(total) {
		return { // Action creators
			type: 'TOTAL',
			total: total
		}
	},
	play: function() {
		return {
			type: 'PLAY'
		}
	},
	bet: function(obj) {
		return {
			type: 'BET',
			currentChip: {
				color: obj.color,
				value: obj.value
			},
			index: obj.index
		}
	},
	animateChip: function() {
		return {
			type: 'ANIMATE CHIP'
		}
	},
	clearBet: function() {
		return {
			type: 'CLEAR BET'
		}
	},
	placeBet: function(card) {
		return {
			type: 'PLACE BET',
			card: card
		}
	},
	addCard: function(user,card) {
		return {
			type: 'ADD CARD',
			user: user,
			card: card
		}
	},
	hitNstay: function(result) {
		return {
			type: 'HIT AND STAY',
			result: result
		}
	},
	score: function(user,sum) {
		return {
			type: 'SCORE',
			user: user,
			sum: sum
		}
	}
};