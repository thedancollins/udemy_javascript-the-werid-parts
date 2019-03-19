//using a function statement
function greet(name) {
    console.log("Hello " + name);
}
greet("Dan");

//using a function expression
var greetFunction = function (name) {
    console.log("Hello 2 " + name);
}
greetFunction("Danny");

//the parentheses at the end immediately invoke the function expression
var greeting = function (name) {
    return "Hello 2 " + name;
}('Dan');
console.log(greeting);

var greeting2 = function (name) {
    return "Hello 3 " + name;
};
console.log(greeting2('Dan'));

//notice
3;
"I am a string"; {
    name: "Dan"
};

/*
This will error
function () {console.log('Test');}
*/

//this will work
(
    function (name) {
        var greeting = "Hello";
        console.log(greeting + " " + name);
    }("Daniel")
); //Classic example of an IIFE
//this alsowill work
(
    function (name) {
        var greeting = "Hello";
        console.log(greeting + " " + name);
    }
)("Daniel"); //Classic example of an IIFE