console.log("hello world");

/*============================================================================================ */

/*dclaration */

/*there are three ways to take and store value in js 1.var 2.let 3.const

1.var => no longer used because oudated and have many issues with it.

2.let => let is part of es6 its safe way to use it. we can reassign value even
once assigned to it means we can change.

3.const => const is constant once assigned its fixed we cant change. */



/*============================================================================================ */



/*============================================================================================ */




/*data types

primitive => number, string , boolean , null , undefined , symbol , bigint
(when we copy the primitive values we can get a real copy)

non-primitive => array , object , functions
(when we copy thr non primitive values we get the reference not real copy) */

// copy

let c =45;
let cpy = c;

c=c+2; //changes in c not in cpy

//reference

let arr = [1,2,3];
console.log(arr);
let ar=arr;

ar.pop(); //change in ar affect the arr as well

//numbers 
let a = 15;  
a=56;       
let b = 12.22;

console.log(a,b);

//strings
let firstname = "namra";            
let lastname='patel';
let football=`jota`;

console.log(firstname,lastname,football);


//booleans
let t= true;
let f = false;

console.log(t,f);

//null
let n = null;

//undefined
let d;


//const
const goat = "cris";

//symbol (shreyins)

//big int 

let big = 9007199254740991n;
big=big + 5n;


//non-primitive , complex , refrence

//array

let arrays=[1,2,3,4,5];
console.log(arrays);

//function

function add(a,b){
    return a+b;
}

let addition =add(4,5);

//object

let human = {
    name : "namra",
    id:"1"
};
