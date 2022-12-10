// Write a program to print count a substring in a Main string

var mainString="My name is kumar, and my friend's name is Dhamu"
var subString="is"
var count =(mainString.match(/is/g) || []).length;
console.log(count," times is in mainstring")
