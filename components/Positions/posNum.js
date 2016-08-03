module.exports = function(style, distance) {
	style.push({left: distance});
	style.push({right: distance});
	return style
}