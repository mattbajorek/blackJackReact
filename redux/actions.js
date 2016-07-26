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
	bet: function(color) {
		return {
			type: 'BET',
			src: color
		}
	}
};