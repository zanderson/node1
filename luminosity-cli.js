//Add your luminosity function from Part I as a method on the module.exports object.

// Create a file luminosity-cli.js which does the same thing as luminosity.js from Part I, but instead requires colorutil.js to include the luminosity function.
// require colorutil.js. Store it on a variable colorutil.
// Call the luminosity method defined on the colorutil module, passing the r, g, b values that are specified on the command line (process.argv[2], process.argv[3], process.argv[4]) and store the calculated result in a variable.
// console.log the result.
// Run node luminosity-cli.js.

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var colorutil = require('./colorutil.js');

console.log(colorutil.luminosity(r, g, b));