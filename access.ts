import {newClass} from './feedClasses';

//note: unlike JAVA, In Typescript we write code inside plain file or classes
let ip=new newClass();
ip.insertAppName("Minitool");
console.log(ip.getAppName());

//Now we look into functions

//Difference between function and method

// - Function lives on its own.

// - Method is a function associated with an object property.

function iteration(num:number):number
{
    return num+1
}

//A function can be called directly by its name.

console.log(iteration(5));