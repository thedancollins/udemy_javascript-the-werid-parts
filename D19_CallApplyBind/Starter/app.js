var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + ', ' + lang2);
    console.log('----------------');
}

var logPersonName = logName.bind(person);

//logname(); <- fails because the execution context of logName is the global execution and so this is global as oppposed to the person object's execution context
logPersonName();

var logName2 = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName())
}.bind(person);
logName2();
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + ', ' + lang2);
    console.log('----------------');
}).apply(person, ['en', 'erss']);


//function borrowing
var person2 = {
    firstname: "Jane",
    lastname: "Doe"
};

console.log(person.getFullName.apply(person2));

//function currying "hard-coding" parameters
function multiply(a, b) {
    return a * b;
}
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));