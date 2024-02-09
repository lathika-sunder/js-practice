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

//Datatypes - number, string
{key:"value"}//object
let nums=[89,90,88,76]//array
let abc;//undefined
let no= null;//null


//newline
var result="hey\nI am here"

//array operations
console.log(result)
console.log(result.length)
console.log(result.indexOf(89))
console.log(result.toUpperCase());
console.log(result.toLowerCase());
console.log(result.charAt(2));
console.log(result[3])
console.log(result.slice(3,4))
console.log(result.split("\n"));

//array - 2ways to create
let fruits=["banana","apple","mango","peach","melon"]
console.log(fruits)
fruits=new Array("banana","apple","mango","peach","melon")
console.log(fruits)

//array operations
console.log(fruits[0])
console.log(fruits.toString())
console.log(fruits.join(" * "))
console.log(fruits.pop(),fruits)//removes last element
console.log(fruits.push("kiwi"),fruits)//add at the end
fruits[fruits.length]="new fruit"
console.log(fruits)
let veg=['carrot','brinjal','onion']
let allgroceries=fruits.concat(veg)
console.log(allgroceries)
console.log(allgroceries.reverse())
console.log(allgroceries.slice(0,5))
console.log(nums.sort(function(a,b){return a-b}))//sorted in ascending order
console.log(nums.sort(function(a,b){return b-a}))//sorted in descending order

let array=new Array()
for(let num=0;num<10;num++)
{
    array.push(num)
}
console.log(array)