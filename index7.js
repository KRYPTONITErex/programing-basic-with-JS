let person = {
    name : "john",
    age : 30,
    eat(){
       console.log("person is eating") 
    },
    run(){
        console.log("person is running")
    }
}
//dot.notation
console.log(person.name)

//bracket notation
let propName = 'age';
console.log(person[propName]) //can Console dynamically

console.log(person.propName) //not able to find in person[]

console.log(person.name = "john Doe")
console.log(person)

person.haircolor = "brown"
console.log(person.haircolor)

person.eat()


person.drink = function(){
    console.log("person is drinking")
}

person.drink()

person.run()
