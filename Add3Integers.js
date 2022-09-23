//Question:::4==>Write a Program to show Sum of three Integer adds to ZERO
//we can take numbers into an array
let numberArr = [2, 3, -7];
let sum = 0;
for(i=0; i<numberArr.length; i++) 
{
    sum += numberArr[i];
}
//By using if loop we can conform that the integer is 0 or Not
if(sum == 0) 
{
    console.log("Sum of 3 Integer is ZERO")
} else 
{
    console.log("Sum of 3 Integer is Not ZERO");
}