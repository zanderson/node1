// Part I: Luminosity
// Write a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
console.log(luminosity);



