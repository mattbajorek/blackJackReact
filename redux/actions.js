export default {
	select: function(num) {
		return { // Action creators
			type: 'SELECT_NUM',
			num: num
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
			}
		}
	},
	animate: function() {
		return {
			type: 'ANIMATE'
		}
	}
};