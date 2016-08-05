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
	addPlayerCard: function(card) {
		return {
			type: 'ADD PLAYER CARD',
			card: card
		}
	},
	addDealerCard: function(card) {
		return {
			type: 'ADD DEALER CARD',
			card: card
		}
	},
	hitNstay: function() {
		return {
			type: 'HIT AND STAY'
		}
	}
};