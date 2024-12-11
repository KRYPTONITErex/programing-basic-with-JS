// while loop

let people = [ 'mm', 'aa', 'kk', 'ss', 'seint']
// console.log(people[0])

// let x = 0
// while (x<10){
//     console.log('hi' + x)
//     x++
// }

// let x = 0;
// while (x < people.length){
//     console.log(people[x])
//     x++
// }

// do{
//     console.log('work')
// }while(false){

// }


// let x=0;
// do{
//     console.log('work')
//     x++
// }while(x<5){
//     console.log('condition stop')
// }

// for(i=0; i<5; i++){
//     console.log('hello world' + i)
// }

// for ( i=0; i<people.length; i++){
//     console.log(people[i])
// }

//for of loop (arr looping)
// for (person of people){
//     console.log(person)
// }


// for in loop (obj looping)
let myInfo={
    name : 'Lwin Phyo',
    age : '30'
}

for (key in myInfo){
    console.log(myInfo[key])
}

for(key in people){
    console.log(people[key])
}

for(person of people){
    console.log(person)
}