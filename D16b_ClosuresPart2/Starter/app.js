function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log("Well that is not right is it:  " + i);
        })
    }
    return arr;
}

/*
This works but it is nothing more than queueing functions for execution and would not allow for a parameter to be passed in.
*/
var fs = buildFunctions()
fs[0]();
fs[1]();
fs[2]();

function buildFunctionsa() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log("First thing I thought of, works but is a patetic solution: " + i);
        }())
    }
    return arr;
}

var fsa = buildFunctionsa()
fsa[0];
fsa[1];
fsa[2];

//This works in ES6
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        let j = i;
        arr.push(function () {
            console.log("the ES6 version: " + j);
        })
    }
    return arr;
}

var fs2 = buildFunctions2()
fs2[0]();
fs2[1]();
fs2[2]();


//To make this work with ES5 you need to use an IIFE
function buildFunctions3() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log("The ES5 version: " + j);
                }
            }(i))
        )
    }
    return arr;
}

var fs3 = buildFunctions3()
fs3[0]();
fs3[1]();
fs3[2]();

//This is the same thing I tried to do above but in ES5
function buildFunctions4() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {

                console.log("The ES5 version pathetic attempt: " + j);

            }(i))
        )
    }
    return arr;
}

var fs4 = buildFunctions4()
fs4[0];
fs4[1];
fs4[2];