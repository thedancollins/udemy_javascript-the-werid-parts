var person = {
    firstname: "default",
    lastname: "default",
    getFullName: function () {
        return this.firstname + ' ' + this.lastname
    }
}

var john = {
    firstname: "John",
    lastname: "Doe"
};

//don't do this ever, for demo purposes only
john.__proto__ = person;
console.log(john.getFullName());
//notice that you do not get "default" - this is ue to the john.firstname "hiding" the proro's firstname
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());