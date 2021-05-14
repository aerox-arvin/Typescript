//in Js we use "var" keyword here it is replaced with "let"

//since we know js is asynchronus, we prefer typescript.

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

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 200 * i);
}

//Now in typescript we got expected output using "let" keyword