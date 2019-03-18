function greet(firstname, lastname, language) {
    if (arguments.length == 0) {
        console.log("missing parameters");
        console.log('---------');
        return;
    }
    language = language || "es";
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log("arg 0 = " + arguments[0]);
    console.log('---------');

}
greet();
greet("john");
greet("john", "doe");
greet("john", "doe", "pig latin");