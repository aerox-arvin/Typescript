class newconstr
{
    //First constructor will be executed in class
    //constructors are of three types
    //Default : This will exist implicitly inside the class 
    //No argument : We will define inside the class like:
     // constructor()
    // {
    //     console.log("test");
    // }
    //Parameterized : We will pass arguments through constructor like: 
    // constructor(name:string)
    // {
    //     console.log(name);
    // }
    constructor(name:string)
    {
    console.log(name);
    }

    printMe(sno:number)
    {
        console.log("Execute first");
        return sno;
    }
    
}

let cst=new newconstr("Aravind Arnold");
cst.printMe(8);
console.log(cst.printMe(7));