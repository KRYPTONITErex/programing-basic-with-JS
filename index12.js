//if else expression ( tenery operator )

// let age = 20;
// let permission = age > 18? 'authorized' : 'unauthorized'

// console.log(permission)

// if(age>18){
//     permission = 'authorized'
// }else{
//     permission = 'unauthorized'
// }
// console.log(permission)

switch ( 100 ){
    case 1: console.log('one')
    break;
    case 2: console.log('two')
    break;
    case 3: console.log('three')
    break;
    
    default: console.log('default case')
}

let people = [
    {name:'john', age:25},
    {name:'lwin', age:30, gender:'f'},
    {name:'phyo', age:35, gender:'m'}
]

let editPeople = people.map((person)=>{
    switch(person.gender){
        case 'm': person.gender='male'
        break;
        case 'f': person.gender='female'
        break;
        default: person.gender='this is unknown'
    }

    return person
})

console.log(editPeople)