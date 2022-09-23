//Extend the above program to sort the array and then find the 2nd largest
//and the 2nd smallest element.

function getRandomNo() 
{
                //generating the random numbers 

    return Math.floor(Math.random()*(999-100+1)+100);
}
let n = 10;
         //storing the random numbers into an array 
   randomNoArr = new Array();

for(i = 0; i < n; i++) {
    randomNoArr.push(getRandomNo());
}
        //Printing the random numbers into an array

console.log("Random No. :"+randomNoArr);

for(i = 0; i < n; i++) {
    for(j = 0; j < n; j++) {
        if(randomNoArr[i]<=randomNoArr[j]){
            temp = randomNoArr[i];
            randomNoArr[i] = randomNoArr[j];
            randomNoArr[j] = temp;
        }
    }
}
    //Printing the sorted array 
console.log("Sorted Ranodm Numbers Array are :" + randomNoArr);

console.log("Second Largest Number is:"+randomNoArr[n-1]);
console.log("Second Smallest Number is: :"+randomNoArr[n-9]);