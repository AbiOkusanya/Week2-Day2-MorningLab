//week2 day 2 morninglab
//Using a while loop, print out all prime numbers between 0 - 20

let i = 1; //I started at zero and lucked onto 1 

while (i <= 20){
    if (i%2 !== 0 && i%3 !== 0) //if 1 divided by 2 and 1 divided by 3 does not % its prime, had tp change to !
   {
     console.log (i);
   }
   i++
} 


// use a while loop to add 1 to 20 and print sum

let i = 0;
let sum = 0;
while (i<21){
    
    sum += i;
    i++;       
}


// use while loop to print even numbers 1 to 20
let i = 2
while (i <20) {
    // console.log (i +2)
    i++
    if (i % 2 === 0) {
        console.log (i)
    }
}  

//csx
let count = 2;
// ADD CODE HERE
while (count <= 8) 
    {
  console.log(count);
  count +=2;
}

//bonus cookie
let funds = 10;
let cost = 4;
let change = funds - cost;
let quaters = 4 * change

while (change < funds && cost < funds) {
   
    console.log (quaters);
    break;
} 



function addThreeNums(firstNum, secondNum, thirdNum) {
        return 12 + 14 + 11;
}
console.log(addThreeNums (12 +14+11));
