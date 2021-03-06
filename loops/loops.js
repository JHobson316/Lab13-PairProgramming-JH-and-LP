"use strict";

// ATTENTION: Please create functions for each exercise and test them with your function calls.


// 1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let total1 = 0;
let total2 = 0;
function addArrays(array1,array2){
    for(let i = 0; i<array1.length; i++){
        total1 = total1 + array1[i];
    }
    for(let i = 0; i<array2.length; i++){
        total2 = total2 + array2[i];
    }
    let arraySum = total1 + total2;
    let finalMessage = `Array 1's total was ${total1}. Array 2's total was ${total2}. The sum of both totals is ${arraySum}.`;
    console.log(finalMessage);

}

addArrays(arr_1,arr_2);
// 2) Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

function allEven(number){
    for (let i = number; i > 0; i=i-2 ){
        console.log(i);
    }
}
allEven(22);


// 3) Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
arr.slice().reverse()
    .forEach(function(item) {
            console.log(item);
        });



// 4) Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
function squishSums(array1, array2){
    let sumArray = [];
    for (let i = 0; i<array1.length;i++){
        sumArray.push(array1[i]+array2[i]);
    }
    console.log(sumArray);
}
squishSums(arr_3,arr_4);



// 5) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1


// 6) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
