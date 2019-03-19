//Polyfills - in case of an older js engine in use
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only acepts the first parameter');
        }

        function F() {}
        F.prototype = o;
        return new F();
    }
}

var person = {
    firstname: "default",
    lastname: "default",
    greet: function () {
        return 'Hi ' + this.firstname
    }
}

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

console.log(john);
console.log(john.greet());