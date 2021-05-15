"use strict";
//Here we learn class, properties, methods and constructors
exports.__esModule = true;
exports.newClass = void 0;
var newClass = /** @class */ (function () {
    function newClass() {
    }
    //methods
    newClass.prototype.setAppName = function () {
        //"this" keyword refers to the current class    
        this.appName = "WhatsApp";
    };
    newClass.prototype.getAppName = function () {
        return this.appName;
    };
    //method with argument
    newClass.prototype.insertAppName = function (name) {
        this.appName = name;
    };
    return newClass;
}());
exports.newClass = newClass;
//Now we have to create object for this class
//To create object use "new" keyword
//new newClass();
//Then store that object in variable
var app = new newClass();
//then call the setAppName method to set the name of the app
app.setAppName();
//Then call the getAppName to bring the name of App
//Also we are going to print it
console.log(app.getAppName());
