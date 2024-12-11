// console.log(1)
// console.log(2)

// setTimeout(()=>{
//     console.log(3)}
// ,3000)

// console.log(4)

//promise

function asynchronous(){

    return new Promise((resolve,reject)=>{
        let result = 0
        for(let i=0; i<1000000000; i++){
            result += i +undefined
        }
        if(result){
            resolve(result)
        }else{
            reject ('GOT SOME ERROR')
        }
    })
    
}
console.log('work')
asynchronous()
.then((res)=>{
    console.log(res)
    console.log('after async task')
})
.catch((err)=>{
    console.log(err)
})
console.log('imp work')