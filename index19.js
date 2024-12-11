//api fetch


// let userInput = prompt("tell me user id?")

// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response)=>{
//     return response.json()
// })

// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


async function funFetch(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log('hi')
    let datas = await response.json()
    console.log(datas)
    }
    catch(err){
        console.log(err)
    }
}

funFetch()
