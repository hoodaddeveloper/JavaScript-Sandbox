console.log("This message will be printed to the console.");

function throwError() {
  return notDefinedVar;
}

throwError();

console.log("Because of the error, this will not printed!");
console.log(Error("User missing name"));
console.log("Will logging the error stop our program from running?");

throw Error('Username or password does not match');

/* try {
  throw Error('Practicing throwing');
} catch (e) {
  console.log(e);
} */

function capAllElements(arr){
  try{
  	arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch(e) {
    console.log(e);
  }
}

/* capAllElements('Incorrect argument'); */