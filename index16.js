
// constructor

// class Car {
//     constructor(name,wheels){
//         this.Name = name
//         this.wheels=wheels

//         // this.drive()
//         // this.getWheel()
//     }
//     drive(){
//         console.log(this.Name + ' is driving')
//     }
//     getWheel(){
//         console.log('It has ' + this.wheels + ' wheels.')
//         console.log('_')

//     }
// }

// new Car('BMW',4)
// new Car('Honda',6)
// new Car('MG',3)

// let BYD = new Car('BYD',2)
// BYD.drive()
// BYD.getWheel()



//Access Modifier

// private public 


class Car{
    Name = 'BMW'
    #hp = 500
    getHp(){
        console.log('HP is '+ this.#hp)
    }
}

let car = new Car
car.Name = 'BYD'
// car.#hp = 600

console.log(car)

car.getHp()

console.log(car.Name)

