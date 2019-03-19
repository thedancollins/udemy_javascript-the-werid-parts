function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Invoked');

    //return "I got in the way";
    /*return {
        greeting: "in the way"
    };*/
}

var john = new Person('John', 'Doe');
console.log(john);
var jane = new Person('Jane', 'Doe');
console.log(jane);