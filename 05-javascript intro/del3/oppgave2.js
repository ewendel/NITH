// Hondas cannot honk! Try to fix this so that new Hondas will share Car's honk method, utilizing Hondas prototype property!

function Car () {}
Car.prototype.honk = function () {
    console.log('Honk!');
};

function Honda () {}
// Honda.proto..

var h1 = new Honda();
h1.honk();

var h2 = new Honda();
h2.honk();

test("Car", function() {
    ok(h1.honk === h2.honk, "the Hondas does not share Car's honk method");
}); 