//its not too much used compared to if..else but used for speccific usecases

let userRole = "subscriber";

switch(userRole){
    case "admin":
        console.log("redirected to the admin dashboard");
        break;
    
    case "editor":
        console.log("redirected to editing page");
        break;
    
    case "subscriber":
        console.log("redirecting to user dashboard");
        break;
    default:
        console.log("redirecting to log in page");    

}