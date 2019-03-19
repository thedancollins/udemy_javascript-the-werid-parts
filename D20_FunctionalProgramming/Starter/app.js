function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr
}

var arr = [1, 2, 3];

console.log(arr);

var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
}
console.log(arr2);
var arr3 = mapForEach(arr, function (item) {
    return item * 2;
});
console.log(arr3);
var arr4 = mapForEach(arr, function (item) {
    return item > 2;
});
console.log(arr4);

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr, checkPastLimit.bind(this, 1));
console.log(arr5);

var checkPastLimit2 = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr6 = mapForEach(arr, checkPastLimit2(3));
console.log(arr6);