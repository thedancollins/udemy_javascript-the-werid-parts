var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);
var english = {};
var spanish = {};
english.greet = "Hello";
spanish.greet = "Hola";
console.log(english);
console.log(spanish);
//console.log(english.greetings.greet);

var english2 = {
    greetings: {
        greet: "Hello"
    }
};
console.log(english2.greetings.greet);