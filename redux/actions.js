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
	placeBet: function() {
		return {
			type: 'PLACE BET'
		}
	},
	addCard: function() {
		return {
			type: 'ADD CARD'
		}
	}
};