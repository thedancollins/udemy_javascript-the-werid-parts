// IIFE
var firstname = 'John';

(function (global, name) {
    global.greeting = "Hello";
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, firstname)); // IIFE