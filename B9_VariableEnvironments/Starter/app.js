function b2() {
var a;
console.log(a);
}

function b1() {
var a = 3;
    b2();
console.log(a);
}

var a = 4;
console.log(a);
b1();
console.log(a);
