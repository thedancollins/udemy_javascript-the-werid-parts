var arr = [1, 2, 3];
var arr2 = [1, '1', false, {
    name: "joe",
    street: "fake"
}, function greeting(name) {
    console.log("Hello " + name);
}];
console.log(arr);
console.log(arr2);
arr2[4](arr2[3].name);