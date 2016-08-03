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
	animate: function() {
		return {
			type: 'ANIMATE'
		}
	},
	clearBet: function() {
		return {
			type: 'CLEAR BET'
		}
	}
};