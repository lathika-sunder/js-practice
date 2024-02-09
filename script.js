console.log("Hi")

var a=45
var b=8
console.log(a+b)

//Change value in html file
document.getElementById("btn").innerHTML="Hey"

//On click functon
// document.getElementById("change-btn").onclick = function() {
//     alert("You just clicked me")
// }

// //use prompt to get input
// var color=prompt("What is your favourite colour")

//Funtions and arguments with while loop and for loop
function fun(num){
    
   
    while(num<=100)
    {
        num++;
    }
    for(let i=0;i<100;i++)
    {
        num++;
    }
    document.getElementById("demo").innerHTML = num;

}

