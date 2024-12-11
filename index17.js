//inheritance

class Animal{
    #age = 2
    constructor(name){
        this.Name = name
    }
    run(){
        console.log(`${this.Name} is running`)
    }
}

// class Dog extends Animal{
//     bark(){
//         console.log(this.Name +' sounds woof woof')
//     }
// }

// let dg = new Dog("Jet")
// dg.run()
// dg.bark()

let ani = new Animal;
ani.#age=4
console.log(ani.#age)


