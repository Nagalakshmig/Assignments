

let env : string = "uat";


switch (env)
{
    case "qa" :
    console.log("launch the application with qa.amazon.com");
    break;
    case "dev" :
    console.log("launch the application with dev.amazon.com");
    break;
    case "uat" :
    console.log("launch the application with uat.amazon.com");
    break;
    default:
        console.log("please provide the correct environment");

}