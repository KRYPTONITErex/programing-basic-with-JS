
let nums = [1,2,3,4,5,6]

// nums = nums.filter((num)=>{
//     // console.log(num)
//     return num%2 === 0;
// })
// console.log(nums)


// let oddNumb = nums.filter((num)=>{
//     return num!=2;
// })
// console.log(oddNumb)

let Nums = nums.reduce((prev,curr)=>{
    return prev * curr;
})
console.log(Nums)
