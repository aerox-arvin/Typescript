//Here we learn class, properties, methods and constructors

export class newClass
{
    //inside the calss variables are called as properties.
    //No need to use "let" keyword since it is inbuild in the class.

    //properties

    appName:string;
    appId:number;

    //methods

    setAppName()
    {

    //"this" keyword refers to the current class    
    this.appName="WhatsApp";

    }

    getAppName()
    {
        return this.appName;
    }

    //method with argument
    insertAppName(name:string)
    {
        this.appName=name;
    }
}

//Now we have to create object for this class
//To create object use "new" keyword
//new newClass();
//Then store that object in variable

let app=new newClass();
//then call the setAppName method to set the name of the app

app.setAppName();

//Then call the getAppName to bring the name of App

//Also we are going to print it

console.log(app.getAppName());