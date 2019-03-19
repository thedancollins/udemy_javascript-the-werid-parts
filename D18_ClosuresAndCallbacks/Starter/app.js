function sayHiLater(name) {
    var greeting = 'Hi';

    setTimeout((_, name) => {
        console.log(greeting + ' ' + name)
    }, 3000);
}
sayHiLater('Dan');

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback();
}
tellMeWhenDone(function () {
    console.log('Done')
});