var person = new Object();
var person2 = {};
var person3 = {
    firstname: "Dan",
    lastname: "Collins",
    address: {
        street: "123 Fake St",
        city: "Houston",
        state: "Texas"
    }
};
console.log(person);
console.log(person2);
console.log(person3);
if (person === person2) {
    console.log('They are strictly equal');
}

function greet(person) {
    console.log("hi " + person.firstname);
}
greet(person3);
greet({
    firstname: "dynamic",
    bob: "Dove"
});

person3.address2.str = "street shorthand";