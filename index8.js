// // console.log(window)

// setTimeout(()=>{
//     console.log(" i am call back")
// },3000)

//parent
// console.log(this);

let man = {
    name: 'john',
    age: 30,
    eat(){
        console.log(this)
        setTimeout(()=>{
            console.log(this);
        },3000)
    }
}
man.eat();


//---> this
//----> method => method's object
//---> regular function => window
//----> arrow function => parent's function(lexical scoping)



// function test(){
//     console.log(this)
// }
// test()