//question 3:::Extend the Prime Factorization Program to store all the Prime Factors of a
//number n into an array and finally display the output.

const readline = require("readline-sync");

console.log("Enter Any Number do you want :");
var number = Number(readline.question());

console.log(number);
//store the Prime Factor into an array
let primeFactArr = new Array();
for(i=1; i<number; i++){
    if(number%i==0) {
        let temp=1;

        for(j=2; j<i; j++) {
            if(i%j==0){
                temp=0;
                break;
            }
        }

        if(temp==1){
            primeFactArr.push(i);
        } else {
            temp=1;
        }
    }
}
//Print the prime facator
console.log(primeFactArr);