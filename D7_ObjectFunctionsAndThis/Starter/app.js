console.log(this);

function a() {
    console.log(this);
    this.newVariable = "Hi";
}
//console.log(newVariable); <- will throw an error
a();
console.log(newVariable);
var b = function () {
    console.log(this);
}
b();

var c = {
    name: "The c object",
    log: function () {
        var self = this;
        self.name = "updated C Object";
        console.log(self);

        function setName(newName) {
            self.name = newName;
        };
        setName('Updated again');
        console.log(self);
        //console.log(this.log);

    }
}

c.log();