
//Interface why
//Is to validate the structure of object
//It can be template or blue print to say how the object is expected

interface empDetails
{
    id:number
    name:string
    gender:string
    age:number
    native?:string
}

//here ? indicates that the property is option
//--------------------------------------

//I create object literal

let emp=
{
    id:103,
    name:"Arav",
    gender:"Male",
    age:29

}

let empOne=
{
    id:85,
    name:"Arav",
    gender:"Male",
    age:29

}

function validate(employe:empDetails)
{
    console.log(employe.id);
}

validate(emp);
validate(empOne);