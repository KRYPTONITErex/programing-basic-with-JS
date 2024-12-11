//conditions (if else)

// let con = prompt ("are you tired , 'y' or 'n'")

// if (con==='y'){
//     console.log('take rest')
// }
// else if(con==='n'){
//     console.log('get work')
// }else{
//     console.log('write y or n only')
// }


let product_prices = [100,500,300,100,200,600,700]

let discPrice = product_prices.map(price=>{
    // console.log(price)
    if(price>=300){
        price -= 30
    }
    return price
})

console.log(discPrice)


let people = [
    {name:'john', age:25},
    {name:'lwin', age:30, gender:'f'},
    {name:'phyo', age:35, gender:'m'}
]

people.map(person=>{
    // console.log(person)
    if(person.gender==='m'){
        person.gender='male'
    }else if(person.gender==='f'){
        person.gender='female'
    }
    else{
        person.gender="unknown"
    }

    return person
})

console.log(people)
