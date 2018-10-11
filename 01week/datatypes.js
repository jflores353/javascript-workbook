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
  const numberToString = (num) => {
    const n = num.toString();
  }
  
  // Write a JavaScript program to convert a string to the number.
  const stringToNumber = (x) => {
    const x = 1;
    parseInt(x);
  }
  
  // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  const dataType = (arg1) => {
  // Boolean
    if(typeof arg1 == 'true' || typeof arg1 == 'false'){
      return 'Boolean'
    }
  // Null
    else if(typeof arg1 == 'Null' ){
      return 'Null'
    }
  // Undefined
    else if(typeof arg1 == 'Undefined'){
      return 'Undefined'
    }
  // Number
    else if(typeof arg1 == 'Number'){
      return 'Number'
    }
  // NaN
    else if(typeof arg1 != 'Number'){
      return 'Not a number'
    }
  // String
    else(typeof arg1 == string){
      return 'String'
    };
  }
  // Write a JavaScript program that adds 2 numbers together.
  const addTwoNumbers = (num1, num2) => {return num1 + num2};
  // Write a JavaScript program that runs only when 2 things are true.
  const twoThingsTrue = (arg1, arg2) => {
    if (arg1 = 'True' && arg2 == 'True'){
      return 'Both are true!'
    }else{
      return 'One or both are false.';
    }
  }
  // Write a JavaScript program that runs when 1 of 2 things are true.
  const oneOfTwoTrue = (arg1, arg2) => {
    if(arg1 = 'True' || arg2 == 'True'){
    return console.log(oneOfTwoTrue)
  }else{ 
    return 'Neither are true';
    }
  }
  // Write a JavaScript program that runs when both things are not true.
  const bothAreNotTrue = (arg1, arg2) => {
    if(arg1 != 'True' && arg2 != 'True'){
      return 'Both things are not true.'
    }else{
      return 'One or both things are true.'
    };
  }
  