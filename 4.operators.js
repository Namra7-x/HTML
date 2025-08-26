//1)arithmetic ops

/*

1.addition (+)         2+8=10
2.subtraction (-)      8-5=3  
3.multiplication (*)   3*4=12
4.division (/)         10/2=5
5.modulus (%)          5%3=2
6.exponentiation (**)  2**3=8
7.increment (++)       let a = 10; a++;
8.decrement (--)       a--;

*/

/*================================================================*/
/*================================================================*/

//2)assignment ops (=) and compound operators(+=)

/*
1. let x = 5 , x+=2 ans = 7
2. let x = 3 , x-=2 ans = 1
3. let x = 2 , x*=3 ans = 6
4. let x = 6 , x/=2 ans = 3
5. let x = 8 , x%=3 ans = 2
5. let x = 2 , x**=3 ans = 8
*/


/*================================================================*/
/*================================================================*/

//3)comparision ops

/* relational comparision
1.greater than (>)
2.less    than (<)
3.greater than or equal to (>=)
4.less    than or equal to (<=)
*/

let a = 10;

console.log(a>0);  //true
console.log(a>10); //false
console.log(a>=10); //true

console.log(a<12); //true
console.log(a<=4); //false

/* equality comparision
1.loosy equality (==)   //check two values are equal and ignores datatype
2.strict equality (===) //check tow values are equal and type is same
3.loose inequality (!=) //check two values are not equal and ignores the type
4.strict inequality(!==) //check two values are not equal and type is same
*/

let b = 5;

console.log(b=='5'); //true 
console.log(b==5);  //true
console.log(b==7);  //false


console.log(b==='5'); //false
console.log(b===5);   //true

console.log(b!='5');  //false
console.log(b!=6);    // true

console.log(b!=='5');//true
console.log(b!==5); //false


/*================================================================*/

/*================================================================*/

//4)logical operators

//1.logical and (&&) (both condition must be true)


//total price greater than 50 and person is club member gets free shipping
let totalPrice=51;
let isMember=true;

if(totalPrice>50 && isMember === true){
    console.log("you are eligible for free shipping");
}
else{
    console.log("you are not eligible for the free shipping");
}

//2.logical or (||) (either one of the condition needed to true)

let Price=50;
let Member=false;

if(Price>50 || Member === true){
    console.log("you are eligible for free shipping");
}
else{
    console.log("you are not eligible for the free shipping");
}

//3.logical not (!)

let isPaidUsr=false;

//evalution like if(!false===true) -> (true===true) !false converted into true 

if(!isPaidUsr===true){  
    console.log("you have got a access to free content");
}
else{
    console.log("you got a access to premium content ");
}
