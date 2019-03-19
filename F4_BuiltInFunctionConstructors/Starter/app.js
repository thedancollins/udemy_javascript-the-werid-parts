String.prototype.isLngthGreaterThan = function (limit) {
    return this.length > limit;
}
console.log("John".isLngthGreaterThan(3));

Number.prototype.isPositive = function () {
    return this > 0;
}
//3.isPositive(); throws an error because 3 is not automatically "boxed" by the parser
var a = new Number(3);
console.log(a.isPositive());

//WARNING
var a = 3;
var b = new Number(3);
console.log("a == b: " + (a == b));
console.log("a === b: " + (a === b));