const car = {
    model: "Toyota Etios",
    year: 2013,
    color: "White",
    new: false
};

if (car.new === true) {
    console.log("I'm looking for a " + car.year + " " + car.model + "that is " + car.color + " and new.");
} else {
    console.log("I'm looking for a " + car.year + " " + car.model + "that is " + car.color + " and used.");
}