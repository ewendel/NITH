// Utilize the prototype property to have Car instances share the honk method rather than each creating their own.

var Car = function Car () {
    this.honk = function () {
        console.log('Honk!');
    };
};

// Car.proto..

var bmw = new Car();
bmw.honk();

var honda = new Car();
honda.honk();

test("Car", function() {
    ok(bmw.honk === honda.honk);
}); 