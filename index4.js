//array methods

// let animals = ['cat', 'dog', 'lion']
// console.log(animals)


// animals[3] = 'bird'

// animals.push('snake')
// console.log(animals)

// animals.pop()
// console.log(animals)

// animals.shift()
// console.log(animals)

// animals.unshift('elephant')
// console.log(animals)

// let index = animals.indexOf('dog');
// console.log(index)

// let string = animals.join(' - '); 
// console.log(string)

// animals.splice(1,3)
// console.log(animals)


let nums = [1,2,3,4,5]

let newNum = nums.map((num)=>{
    return num+100;
})
console.log(newNum);

console.log(nums);


let names = ['john', 'chris', 'lwin']

names = names.map((name)=>{
    // console.log(name)
    return "Mr"+name
})
console.log(names)