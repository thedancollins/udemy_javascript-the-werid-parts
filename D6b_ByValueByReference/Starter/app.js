var a = 3;
var b;

b = a;
console.log(a == b);
console.log(a === b);
a = 2;
console.log("a = " + a);
console.log("b = " + b);
console.log(a == b);
console.log(a === b);

var c = {
    greeting: "Hi"
};
var d;

d = c;
console.log(c == d);
console.log(c === d);
c.greeting = "hello"; //mutate the object
console.log(c);
console.log(d);
console.log(c == d);
console.log(c === d);

function changeGreeting(obj) {
    obj.greeting = "Hola";
}
changeGreeting(d);
console.log(c);
console.log(d);

c = {
    greeting: "Howdy"
};
console.log(c);
console.log(d);