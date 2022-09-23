//Write a program in the following steps
//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

function getRandomNo()
{
        //generating the random numbers 
    return Math.floor(Math.random()*(999-100+1)+100);
}
         //storing the random numbers into an array 
         let randomNoArr=new Array();
for(i=0;i<10;i++)
{
    randomNoArr.push(getRandomNo());
}
    //Printing the random numbers into an array
console.log("RandomNumber are :"+randomNoArr);

let firstLargest=randomNoArr[0]; 
let secondLargest=randomNoArr[0];
let firstSmallest=randomNoArr[0]; 
let secondSmallest=randomNoArr[0];
    for (i=0; i<10 ; ++i)
     {
        if (firstLargest<randomNoArr[i])
        {
            secondLargest = firstLargest;
            firstLargest = randomNoArr[i];
        }
        if (firstSmallest>randomNoArr[i])
        {
            secondSmallest = firstSmallest;
            firstSmallest = randomNoArr[i];
        }

    }
    //Printing the second largest number
console.log("Second Largest Number is :::::: "+secondLargest)
    //printing the second smallest number
console.log("Second Smallest Number is ::::::"+secondSmallest)