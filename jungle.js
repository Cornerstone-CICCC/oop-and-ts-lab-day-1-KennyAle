class Animal {
    static remainingAnimals = 0
    #name
    #species
    #energy
    constructor(name, species) {
        Animal.incAnimals()
        this.#name = name
        this.#species = species
        this.#energy = 100
        this.remainingAnimals++
    }
    get name() {
        return this.#name
    }
    get species() {
        return this.#species
    }
    get energy() {
        return this.#energy
    }
    set name(newName) {
        this.#name = newName
    }
    set species(newSpecies) {
        this.#species = newSpecies
    }
    set energy(newEnergy) {
        this.#energy = newEnergy
    }
    static incAnimals() {
        Animal.remainingAnimals++
    }
    static decAnimals() {
        Animal.remainingAnimals--
    }
    attack(target) {
        this.energy = this.#energy - 10
        target.energy = target.#energy - 10
        console.log(`${this.#name} swoops in to attack ${target.name}!`);
        console.log(`${this.#name}'s Energy: ${this.#energy}`);
        console.log(`${target.#name}'s Energy: ${target.#energy}`);
        if (this.energy <= 0) {
            console.log(`${target.name} Wins`);
            console.log(`${this.name} Loses`);
            Animal.decAnimals()
        } else if (target.energy <= 0) {
            console.log(`${this.name} Wins`);
            console.log(`${target.name} Loses`);
            Animal.decAnimals()
        }
    }
    eat() {
        this.energy = this.#energy + 10
        console.log(`${this.#name} eats and gains energy!`);
        console.log(`${this.#name}'s energy: ${this.energy}`);

    }
}

class Bird extends Animal {
    #canFly
    constructor(name, species, canFly) {
        super(name, species)
        this.#canFly = canFly
    }
    get canFly() {
        return this.#canFly
    }
    set canFly(newValue) {
        this.#canFly = newValue
    }
    attack(target) {
        const currentEnergy = this.energy
        const targetEnergy = target.energy
        this.energy = currentEnergy - 20
        target.energy = targetEnergy - 20
        console.log(`${this.name} swoops in to attack ${target.name}!`);
        console.log(`${this.name}'s Energy: ${this.energy}`);
        console.log(`${target.name}'s Energy: ${target.energy}`);
        if (this.energy <= 0) {
            console.log(`${target.name} Wins`);
            console.log(`${this.name} Loses`);
            Animal.decAnimals()
        } else if (target.energy <= 0) {
            console.log(`${this.name} Wins`);
            console.log(`${target.name} Loses`);
            Animal.decAnimals()
        }
    }
}

class Mammal extends Animal {
    #furColor
    constructor(name, species, furColor) {
        super(name, species)
        this.energy = 200
        this.#furColor = furColor
    }
    get furColor() {
        return this.#furColor
    }
    set furColor(newFurColor) {
        this.#furColor = newFurColor
    }
    attack(target) {
        const currentEnergy = this.energy
        const targetEnergy = target.energy
        this.energy = currentEnergy - 50
        target.energy = targetEnergy - 50
        console.log(`${this.name} lunges to attack ${target.name}!`);
        console.log(`${this.name}'s Energy: ${this.energy}`);
        console.log(`${target.name}'s Energy: ${target.energy}`);
        if (this.energy <= 0) {
            console.log(`${target.name} Wins`);
            console.log(`${this.name} Loses`);
            Animal.decAnimals()
        } else if (target.energy <= 0) {
            console.log(`${this.name} Wins`);
            console.log(`${target.name} Loses`);
            Animal.decAnimals()
        }
    }
    eat() {
        const currentEnergy = this.energy
        this.energy = currentEnergy + 20
        console.log(`${this.name} eats and gains energy!`);
        console.log(`${this.name}'s energy: ${this.energy}`);
    }
}

class Reptile extends Animal {
    #coldBlooded
    constructor(name, species, coldBlooded) {
        super(name, species)
        this.#coldBlooded = coldBlooded
    }
    get coldBlooded() {
        return this.#coldBlooded
    }
    set coldBlooded(newValue) {
        this.#coldBlooded = newValue
    }
    attack(target) {
        const currentEnergy = this.energy
        const targetEnergy = target.energy
        this.energy = currentEnergy - 30
        target.energy = targetEnergy - 30
        console.log(`${this.name} strikes ${target.name}!`);
        console.log(`${this.name}'s Energy: ${this.energy}`);
        console.log(`${target.name}'s Energy: ${target.energy}`);
    }
    eat() {
        const currentEnergy = this.energy
        this.energy = currentEnergy + 15
        console.log(`${this.name} eats and gains energy!`);
        console.log(`${this.name}'s energy: ${this.energy}`);
    }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.
const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);


// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`\nRemaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`\nRemaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
