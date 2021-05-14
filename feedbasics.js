//in Js we use "var" keyword here it is replaced with "let"
//since we know js is asynchronus, we prefer typescript.
//Main difference is scoping rules. Variables declared by "var" keyword are scoped to the immediate function body (hence the function scope) 
//while "let" variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
//We can redeclare varaiable when "var" is used
//While "let" will expect only the type of value which was declared earlier.
//eg: 
var a = "new";
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 200 * i);
};
// you can't assig numbers to this a=6
//here we are going to write once script using var keyword to show why it is not preferred.
// for (var i=0;i<5;i++)
// {
//     setTimeout(function(){console.log(i);}, 200*i);
// }
//we expected out in such a manner it should print like
// 0
// 1
// 2
// 3
// 4
//But actually it printed like
// 5
// 5
// 5
// 5
// 5
//Now I write script using let keyword
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
//Now in typescript we got expected output using "let" keyword
// ******Const is a keywords ****** if a variable is declared as "const" their value can't be changed or redeclared.
var n = 4;
