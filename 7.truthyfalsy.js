//truthy values reprenst an actual value

//falsy value represent an absence of value



/*truthy values*/

// booleamn = true

//number other than zero = 23

//non empty string = 'namra'

// arrays ['namra',20] and empty []

// object {name : 'namra'} and empty {}


/*falsy values*/

//boolean = false

//zero = 0

//empty string = ''

//null

//undefined 

//Nan


/*examples*/

let coupen = 'NEWYEAR20';   

if(coupen){
    console.log(`applying coupen code : ${coupen} `);
}
else{
    console.log(`no coupen entered`);
}

//use : it allows us to write simple conditional check without directly comparing true or false value (like we did in comparision )


//example
let darkMode = true;

if(darkMode){
    console.log(`showing a dark mode`);
}


//example

let userLoggedIn = false;

if(userLoggedIn){
    console.log(`discount : $20`);
}
else{
    console.log(`discount : $10`);
}

