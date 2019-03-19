function greet(whattosay) {
    return function (name) {
        console.log(whattosay + ' ' + name);
    }
}
greet('Hi')('Dan');

//How does the sayHi variable know about "whattosay"? - Closure
var sayHi = greet('Hi');
sayHi('Dan');