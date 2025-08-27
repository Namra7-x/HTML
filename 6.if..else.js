//if

//1
let darkMode=true;

if(darkMode === true){
    console.log("showing a dark mode");
}

//2
let score = 60;

if(score>=35){
    console.log("passed");
}

/*=========================================================================== */
/*=========================================================================== */

//if...else

//1
let userLogged=true;

if(userLogged === true){
    console.log("discount : $20");
}
else{
    console.log("discount : $10");
}

//2
let Score = 30;

if(Score>=35){
    console.log("passed");
}
else{
    console.log("failed");
}

/*=========================================================================== */
/*=========================================================================== */


//if....else if.....else

/*  
ticket prices
up to 12 : $10
standard : $20
65 and above : $12
*/

let age=70;
let ticketPrice;

if(age<=12){
    ticketPrice = 10;
    console.log(`ticket price is ${ticketPrice}`);
}
else if(age>=65){
    ticketPrice = 12;
    console.log(`ticket price is ${ticketPrice}`);
}
else{
    ticketPrice = 20 ;
    console.log(`ticket price is ${ticketPrice}`);
}
