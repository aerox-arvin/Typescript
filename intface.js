//Interface why
//Is to validate the structure of object
//It can be template or blue print to say how the object is expected
//here ? indicates that the property is option
//--------------------------------------
//I create object literal
var emp = {
    id: 103,
    name: "Arav",
    gender: "Male",
    age: 29
};
var empOne = {
    id: 85,
    name: "Arav",
    gender: "Male",
    age: 29
};
function validate(employe) {
    console.log(employe.id);
}
validate(emp);
validate(empOne);
