let cartItems = 5;

let message = cartItems > 0 ? "you have a items in your cart" : "your cart is empty";


// this alo wrriiten like below context truthy falsy value
//let message = cartItems  ? "you have a items in your cart" : "your cart is empty";


console.log(message);

//note : usecase varriable condtional assignment(below ex) and short messages(above ex)

let isMember = true;
let discount = isMember ? 15 : 0; //if its member discount is 15 otheriwise 0.
