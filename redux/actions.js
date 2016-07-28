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
			src: obj.color,
			chipValue: obj.value
		}
	},
	animate: function() {
		return {
			type: 'ANIMATE'
		}
	}
};