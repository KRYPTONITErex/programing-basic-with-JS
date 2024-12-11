class Calculator{
    PI = 3.142
    Name = 'casio'
    area(r){
        return this.PI*r**2
    }
    volume(r,h){
        return this.area(r)*h
    }
    static info(){
        let calculator = new Calculator
        console.log('i am '+ calculator.Name + ' calculator')
    }
    INF(){
        console.log('HI there guy')
    }
}

// Calculator.info()
Calculator.info()

let cal = new Calculator
cal.INF()
