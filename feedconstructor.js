var newconstr = /** @class */ (function () {
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
    function newconstr(name) {
        console.log(name);
    }
    newconstr.prototype.printMe = function (sno) {
        console.log("Execute first");
        return sno;
    };
    return newconstr;
}());
var cst = new newconstr("Aravind Arnold");
cst.printMe(8);
console.log(cst.printMe(7));
