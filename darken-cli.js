// Bonus I: Luminosity Library
// Add a darken function to your luminosity module which returns the given color in r,g,b, but with each value decreased by 20% in order to return a darker overall color. Write a darken-cli.js to take r,g,b command line arguments like luminosity-cli.js to test your darken function. It should also require colorutil.js. It should output space-separated r,g,b values for the darker color.

var colorutil = require('./colorutil.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var result = colorutil.darken(r, g, b);
console.log(result);

