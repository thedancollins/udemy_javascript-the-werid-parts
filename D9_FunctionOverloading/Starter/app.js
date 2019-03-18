function greet(firstname, lastname, language) {
    language = language || "en";
    if (language === "en") {
        console.log("Hello " + firstname + " " + lastname);
    } else if (language === "es") {
        console.log("Hola " + firstname + " " + lastname);
    }

}
greet("John", "Doe");
greet("Jose", "Doe", "es");

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "en");
}
greetEnglish("john", "doe");