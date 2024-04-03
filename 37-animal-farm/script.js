pig = {
    name: "Humberto",
    type: "pig",
    age: 8,
    makeSound() {
        console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes OINC!");
    }
}

sheep = {
    name: "Doisberto",
    type: "sheep",
    age: 6,
    makeSound() {
        console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes BÉÉÉÉÉEH!");
    }
}

dog = {
    name: "Tresberto",
    type: "dog",
    age: 90,
    makeSound() {
        console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes Uuuh!");
    }
}

dog.makeSound();