
//callback function

// function sayName(name,fun){
//    let res = fun ("LP")
//    console.log(res)
// }
// sayName("Lwin Phyo",function(name) {return name;} )

function twice(num,modNum){
    
    let res = modNum(num) * 2 ;
    console.log(res)
}
twice(5,function(num){ 
    return num + 6 ; 
});

//Arrow function

let sayHi = function(){
    console.log("Hi")
}
sayHi();

let sayHello = word =>  word;

console.log(sayHello("hello Guys"));

//why

let sayGF = (gf,gf2) => gf2;

console.log(sayGF("KhaingZar","EP"))

let sayGFF = gff => gff ;
console.log(sayGFF("MayYM"))



let twce = num => num*2;

console.log(twce(3))