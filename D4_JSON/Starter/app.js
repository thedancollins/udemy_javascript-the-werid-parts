var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true
};
var objectLiteral2 = {
    "firstname": "Mary",
    "isAProgrammer": true
};

console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));
console.log(objectLiteral2);
console.log(JSON.stringify(objectLiteral2));
var JSONValue = JSON.parse('{"firstname": "Mareee", "isAProgrammer": true }');
console.log(JSONValue);