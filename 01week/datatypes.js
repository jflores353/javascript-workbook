// Write a JavaScript program to display the current day and time.
const displayDateAndTime = () =>{
  //Display day  
    const todaysName = newDate();
    const today = todaysName.getDay();
  //Display time
    const t = newTime();
    const time = t.getTime();  
} 
// Write a JavaScript program to convert a number to a string.
const numberToString = (num1) => {
  return toString(num1);
}

// Write a JavaScript program to convert a string to the number.
const stringToNumber = (x) => {
  return parseInt(x);
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const dataType = (arg1) => {
// Boolean
  if(typeof arg1 == true || typeof arg1 == false){
    return 'Boolean'
  }
// Null
  else if(typeof arg1 === null ){
    return null
  }
// Undefined
  else if(typeof arg1 == 'undefined'){
    return 'Undefined'
  }
// Number
  else if(typeof arg1 == 'number'){
    return 'Number'
  }
// NaN
  else if(typeof arg1 != 'number'){
    return 'Not a number'
  }
// String
  else if(typeof arg1 == 'string'){
    return 'String'
  }
}
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {return num1 + num2};
// Write a JavaScript program that runs only when 2 things are true.
const twoThingsTrue = (arg1, arg2) => {
  if(arg1 > 0 && arg2 > 0){
    return 'True'
  } else {
    return 'False'
  }
}
// Write a JavaScript program that runs when 1 of 2 things are true.
const oneOfTwoTrue = (arg1, arg2) => {
  if(arg1 > 0 || arg2 > 0){
    return 'At least 1 is true'
  }
}
// Write a JavaScript program that runs when both things are not true.
const bothAreNotTrue = (arg1, arg2) => {
  if(arg1 == '' && arg2 == ''){
    return 'Both are not truthy'
  }
}
