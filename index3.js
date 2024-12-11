// // let mixture = new Array ("dog" , 1, 1.2, true )


// let mixture = ["dog" , 1, 1.2, true] 

// let bobo = console.log (mixture[0])
// let isAnimal = console.log(mixture[3])


// mixture[4] = "KLP";
// console.log(mixture)

// mixture[3] = false; //override
// console.log(mixture) 

// let fruits = [ "apple", "orange" ]
// console.log(fruits)

// fruits[2] = "mango";
// console.log(fruits[fruits.length-1])


// let arr = [
//     ['a','b','c'],
//     [1,2,3]
// ]

// console.log(arr)
// console.log(arr[0][2])

// arr[0][3] = 'd'
// console.log(arr)


// //spread operator

// let data1 = [1,2,3]
// let data2 = [4,5,6]

// let res1 = [data1,data2]

// let res = [...data1,...data2]
// console.log(res1)
// console.log(res)


// function add (a,b){
//     console.log(a+b);
// }
// let nums = [1,2];
// add(...nums)


// //destructuring

// let datas = ['mg mg', 20, 'ttu']
// // let name = datas[0]; let age = datas[1]; let school = datas[2];
// let [name,age,school] = datas
// console.log(name,age,school);

function add([a,b]){
    [a,b]=[1,2]
    console.log(a+b);
}
add([1,2])


