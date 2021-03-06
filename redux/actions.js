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
	animateChipIn: function() {
		return {
			type: 'ANIMATE CHIP IN'
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
	animateCardIn: function() {
		return {
			type: 'ANIMATE CARD IN'
		}
	},
	hitNstay: function(user,card) {
		return {
			type: 'HIT AND STAY',
			user: user,
			card: card
		}
	},
	score: function(obj) {
		return {
			type: 'SCORE',
			user: obj.user,
			sum: obj.sum
		}		
	},
	clearBet: function() {
		return {
			type: 'CLEAR BET'
		}
	},
	roundEnd: function() {
		return {
			type: 'ROUND END'
		}
	},
	result: function(winner,multiply) {
		return {
			type: 'RESULT',
			winner: winner,
			multiply: multiply
		}
	},
	message: function(message) {
		return {
			type: 'MESSAGE',
			message: message
		}
	},
	gameOver: function(message) {
		return {
			type: 'GAME OVER'
		}
	}
};