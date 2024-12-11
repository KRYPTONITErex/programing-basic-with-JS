//OOP

// class Car{
//     wheels = 4
//     color = "black"

//     drive(){
//         console.log('car is driving')
//     }
// }
// let car = new Car
// console.log(car.color)

// let car2 = new Car
// car2.color = 'red'
// console.log(car2.color)


// class Calculator{
//     static PI = 3.142
//     plus(n1,n2){
//         return n1+n2
//     }
//     minus(n1,n2){
//         return n1-n2
//     }
//     multiply(n1,n2){
//         return n1*n2
//     }
//     reminder(n1,n2){
//         return n1%n2
//     }
// }

// let cal = new Calculator
// console.log(cal.reminder(3,2))

// console.log(Calculator.PI)


// console.log(Math.PI)


class Calculator{
     PI = 3.142
     area(r){
        return this.PI*r**2
    }
    volume (r,h){
        return this.area(r)*h
    }
}
let cal = new Calculator
console.log(cal.area(2))

console.log(cal.volume(2,4))