// First Class Functions

// can be passed as an argument

function sayHello(){
 return 'Hello';
}

function mainFunction(argFn, name){
 console.log(argFn(), name);
}

mainFunction(sayHello, 'gichuki');

// can be returned by another function

// can be assigned as a value to a variable, object or array
