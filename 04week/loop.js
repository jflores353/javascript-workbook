//Use a for loop to console.log each item in the array carsInReverse
const carsInReverse = ['mazda', 'ford', 'honda', 'mazerati'];
carsInReverse.forEach((item, index)=>{
  console.log(item);
})

// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.
const persons = {
  firstName: "Jane ",
  lastName: "Doe ",
  birthDate: "Jan 5, 1925 " ,
  gender: "female"
}

let str = "";
for(let personsProps in persons){
  str += persons[personsProps];
}
console.log(str);

// Then use a for...in loop and if state to console.log the value associated with the key birthDate
for(let birthdateValue in persons){
  str += persons[birthdateValue['birthDate']];
}
// console.log(str)
// while loop
// Use a for loop to console.log the numbers 1 to 1000.
for(x = 0; x <= 1000; x++){
  console.log(x);
}
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let num = 0;
do{
  num += 1;
  console.log(num);
} while (num <= 999);

// When is a for loop better than a while loop?
// a for loop will accept 3 statements instead having to declare a variable 
// before the while loop 

// How is the readability of the code affected?
// makes for an easier to read code

// What is the difference between a for loop and a for...in loop?
// for - loops through a block of code a number of times.
// for/in - loops through the properties of an object.

// What is the difference between a while loop and a do...while loop
// while - loops through a block of code while a specified condition is true.
// do/while - also loops through a block of code while a specified condition is true.