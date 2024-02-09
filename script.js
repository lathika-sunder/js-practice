console.log("Hi");

var a = 45;
var b = 8;
console.log(a + b);



//Funtions and arguments with while loop and for loop
function fun(num) {
  while (num <= 100) {
    num++;
  }
  for (let i = 0; i < 100; i++) {
    num++;
  }
}

//Datatypes - number, string
{
  key: "value";
} //object
let nums = [89, 90, 88, 76]; //array
let abc; //undefined
let no = null; //null

//newline
var result = "hey\nI am here";

//string operations
console.log(result);
console.log(result.length);
console.log(result.indexOf(89));
console.log(result.toUpperCase());
console.log(result.toLowerCase());
console.log(result.charAt(2));
console.log(result[3]);
console.log(result.slice(3, 4));
console.log(result.split("\n"));

//array - 2ways to create
let fruits = ["banana", "apple", "mango", "peach", "melon"];
console.log(fruits);
fruits = new Array("banana", "apple", "mango", "peach", "melon");
console.log(fruits);

//array operations
console.log(fruits[0]);
console.log(fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits); //removes last element
console.log(fruits.push("kiwi"), fruits); //add at the end
fruits[fruits.length] = "new fruit";
console.log(fruits);
let veg = ["carrot", "brinjal", "onion"];
let allgroceries = fruits.concat(veg);
console.log(allgroceries);
console.log(allgroceries.reverse());
console.log(allgroceries.slice(0, 5));
console.log(
  nums.sort(function (a, b) {
    return a - b;
  })
); //sorted in ascending order
console.log(
  nums.sort(function (a, b) {
    return b - a;
  })
); //sorted in descending order

let array = new Array();
for (let num = 0; num < 10; num++) {
  array.push(num);
}
console.log(array);

//object operations
let student = {
  firstName: "Lathika",
  lastName: "Sunder",
  age: 19,
  city: "Chennai",
  studentInfo:function()
  {
    return this.firstName+'\n'+this.lastName
  }
};
console.log(student.firstName); //access obj elements
console.log(student.studentInfo())

//color changer
function changeColour() {
  var box = document.getElementById("box");
  var color = getRandomColour();
  box.style.backgroundColor = color;
}
function getRandomColour() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Conditionals & Control flows
var age=9

if((age>=18))
{
    console.log("Eligible to vote")
}
else{
    console.log("not eligible")
}

switch(4){
    case 0:
        console.log("monday");
        break;
    
    case 4:
        console.log("wednesday")
        break;
    default:
        console.log( "unknown day") 
}


//JSON
// JSON data representing student information
var students= [
      {
        "name": "John Doe",
        "age": 20,
        "grade": "A",
        "major": "Computer Science",
        "email": "john.doe@example.com",
        "city": "New York"
      },
      {
        "name": "Jane Smith",
        "age": 22,
        "grade": "B+",
        "major": "Mathematics",
        "email": "jane.smith@example.com",
        "city": "Los Angeles"
      },
      {
        "name": "Alice Johnson",
        "age": 21,
        "grade": "A-",
        "major": "Biology",
        "email": "alice.johnson@example.com",
        "city": "Chicago"
      },
      {
        "name": "Bob Brown",
        "age": 23,
        "grade": "B",
        "major": "History",
        "email": "bob.brown@example.com",
        "city": "Houston"
      },
      {
        "name": "Eva Garcia",
        "age": 20,
        "grade": "B-",
        "major": "English",
        "email": "eva.garcia@example.com",
        "city": "Miami"
      },
      {
        "name": "Michael Lee",
        "age": 24,
        "grade": "C+",
        "major": "Chemistry",
        "email": "michael.lee@example.com",
        "city": "San Francisco"
      }
    ]
    console.log(students)
  // Parse the JSON string into a JavaScript object 
  var studentData = JSON.parse(students[1].age);
  
  // Now, you can work with the parsed data
  console.log(studentData); // You can log it to see the parsed object
  