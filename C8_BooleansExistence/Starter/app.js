var a;
a = "hi";
if (a) {
    console.log('a has a value');
} else {
    console.log('a does not have a value');
}

function greet(name) {
    name = name || 'Your Name Here';
    console.log('Hello ' + name);
}

greet('Dan');
greet();