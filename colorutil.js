// Part II: require

var luminosity = function(r, g, b){
	return 0.2126*r + 0.7152*g + 0.0722*b;
};

module.exports = {
	luminosity: luminosity
};

