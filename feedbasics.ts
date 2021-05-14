//in Js we use "var" keyword here it is replaced with "let"

//since we know js is asynchronus, we prefer typescript.

//here we are going to write once script using var keyword to show why it is not preferred.

for (var i=0;i<5;i++)
{
    setTimeout(function(){console.log(i)}, 200*i);
}