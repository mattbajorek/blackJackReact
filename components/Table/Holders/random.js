let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let symbols = ['\u2660', '\u2663', '\u2665', '\u2666'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function() {
	return {
		number: numbers[0],
		symbol: symbols[getRandomInt(0,3)]
	}
}