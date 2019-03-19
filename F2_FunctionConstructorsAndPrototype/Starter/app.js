function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    //putting getFiullName on the prototype saves memory space because it is on the prototype
}

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

console.log(john.__proto__);
console.log(john.prototype);
console.log(Person.prototype);