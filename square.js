var prompt = require('readline-sync');
var n = prompt.questionInt('enter the num ');
d = {}
for (let i = 0; i <= n; i++) {
   d[i] = i ** 2
}
console.log(d);