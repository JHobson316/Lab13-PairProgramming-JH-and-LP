"use strict";

// Array Todos

// TODO 1
// Creating new array
let chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
// TODO 2
// Creating a function to add an element to an array without altering the original array
function addElementToBeginningOfArray(array,element){
    let newArray = [element,...array];
    // Console logging to show that the original array is
    // untouched and the new array contains the new element
    console.log(array);
    console.log(newArray);
}
function destructivelyAddElementToBeginningOfArray(array,element){
    // Displaying original array passed in
    console.log(`Input array: ${array}`);
    array.unshift(element);
    // Displaying array after the new element has been added
    console.log(`Output array: ${array}`);
}

addElementToBeginningOfArray(chocolateBars,'baby ruth');
destructivelyAddElementToBeginningOfArray(chocolateBars,'Hersheys')

// TODO 3
let fastFoodPlaces = ['WhataBurger',"Wendy's","Sonic","Burger King"];
function addElementToEndOfArray(array,element){
    let newArray = [...array,element];
    // Console logging to show that the original array is
    // untouched and the new array contains the new element
    console.log(array);
    console.log(newArray);
}
function destructivelyAddElementToEndoOfArray(array,element){
    // Displaying original array passed in
    console.log(`Input array: ${array}`);
    array.push(element);
    // Displaying array after the new element has been added
    console.log(`Output array: ${array}`)
}
addElementToEndOfArray(fastFoodPlaces,"McDonald's");
destructivelyAddElementToEndoOfArray(fastFoodPlaces,"Backyard Burger");

//TODO 4
const years = ['2018','2019','2020','2021','2022'];
function accessElementInArray(array,index){
    console.log(array[index]);
    if (index > array.length-1){
        alert('The array is not that long.');
    }
}
accessElementInArray(years, 2);

//TODO 5
function destructivelyRemoveElementFromBeginningOfArray(array){
    console.log(array);
    years.pop();
    console.log(array);
}

destructivelyRemoveElementFromBeginningOfArray(years);

//TODO 6
function removeElementFromBeginningOfArray(array){
    console.log(`Before removed: ${array}`);
    let testArray = array.slice(1);
    console.log(`After removed: ${testArray}`);
}

removeElementFromBeginningOfArray(years);

//TODO 7 (??)
function destructivelyRemoveElementFromEndOfArray(array){
    console.log(array);
    array.pop();
    console.log(array)
}
destructivelyRemoveElementFromEndOfArray(chocolateBars);

//TODO 8
function removeElementFromEndOfArray(array){
    let functionArray = array.slice(0, array.length-1);
    console.log(functionArray);
}
removeElementFromEndOfArray(years);



