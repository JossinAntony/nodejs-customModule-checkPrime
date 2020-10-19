const myOp = require('./operations');
const myFs = require('fs');

var num = 56;

var s = myOp.checkIfPrime(num);

console.log(s);

myFs.appendFile('IsPrime.txt', s + '\n', (e)=>{
    if(e) throw e;
})