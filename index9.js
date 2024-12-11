// let obj1 = {
//     myName: "LP",
//     myAge: 30
// }

// let obj2 = {
//     myHair: 'Black'
// }

// let obj3 = {...obj1,...obj2}
// console.log(obj3)


// //obj destructuring

// let {name, age} = {
//     name: "KLP",
//     age: 30
// }
// console.log(name,age)

//property shorthand

// let Name = "KLP"
// let Age = 35

// let Person = {
//     Name,
//     Age
// }
// console.log(Person)


// let Person1 = {name: "LLP", age:30, gender:'male'}
// let Person2 = {name: "LLP", age:30, gender:'male'}
let People = [
    {name: "LLP", age:30, gender:'male'},
    {name: "ppp", age:20, gender:'male'},
    {name: "SSS", age:10, gender:'female'}
]

// let eachName = People.map((person)=>{

//     // console.log(person.name)
//     return person.name+ " persons"
// })
// console.log(eachName)

let searchKey = prompt('Search Person : ')

let Males = People.filter((per)=>{
    // console.log(per.gender)
    return per.gender.includes(searchKey)
})
console.log(Males)

