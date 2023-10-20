// 1.   ways to print in JavaScript

    //console.log("Hello World");
// alert("me")

// document.write("this is warning");



// 2.  JavaScript console API(Application programming interface )
// console.log("Hello World" ,4+6,"Another log");
// console.warn("this is warning");
// console.error("this is an error");


//3.  JavaScript Variables
// what are variables?  -  Containers to store data values 
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2); 


// 4. Data types in javaScript
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a string";
var str2 = "This is also a string"

// Object
var marks = {
    ravi : 34,
    shubham : 78,
    harry: 99.977
}

// console.log(marks);

// Booleans
var a = true;
var b= false;
// console.log(a);
// console.log(b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(null);




// At a very high level, thre are two types od data in JavaScript
// 1. Primitive data types: undefined, null,number,string,boolean,symbol
// 2. Reference data types: Arrays and objects



var arr = [1,2,"bablu",4,5]
// console.log(arr)

// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ",a+b);
// console.log("The value of a - b is ",a+b);
// console.log("The value of a * b is ",a+b);
// console.log("The value of a / b is ",a+b);


// Assingnment Operators

// var c=b;
// c += 2;
//c -= 2; // c = c-2;
// c *=2;
// c /= 2;
// console.log(c);

// Comparision Operator

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x == y);
// console.log(x <= y);
// console.log(x < y);

// Logical Operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// Logical not

// console.log(!false);
// console.log(!true);

function avg(a,b){
    c = (a + b)/2;
    return c;
}
    
c1 = avg(4,6);
c2 = avg(14,16);
// console.log(c1,c2);

// Conditionals in JavaScript

var age = 11;
// Single if statement
if(age > 18){
    console.log('You can drink rasna  water');
}


// If - else statement

// if(age > 18){
//     console.log('You can drink rasna  water');
// }

// else{
//     console.log('You cannot drink rasna water');
// }


// age = 31;

// if - else Ladder
// if(age > 32){
//     console.log("You are not a kid");
// }
// else if(age > 26){
//     console.log("Bachhe nahi rhe");
// }
// else if(age > 22){
//     console.log("Yes Bachhe nahi rhe");
// }
// else if(age > 18){
//     console.log("18 Bachhe nahi rhe");
// }
// else{
//     console.log("Bachhe rahe")
// }
//  console.log("End of ladder");



var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
// ac++;
// ac = ac +1;


// let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan","Camera",34,null,true];
// Array Methods
// console.log(myArr.length);

// myArr.pop();
// myArr.push("harry")
// console.log(myArr);
// myArr.shift()

// const newlen = myArr.unshift("Harry")
// console.log(newlen);
// console.log(myArr);




// String Method in JavaScript

let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString. indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))


//  console.log(myLovelyString.slice(1,4))
// d =  myLovelyString.replace("Harry","Rohan");
// d = d.replace("good","bad");
//  console.log(d,myLovelyString);



let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullyear());
// console.log(myDate.getday());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container")
// console.log(elemclass);
// elemclasss[0].classlist.add("bg-primary");
// elemclasss[0].classlist.remove("bg-primary");
// console.log(elem.innerHTML);
// console.log(elem.innerText);


// console.log(elem.innerHTML);
// console.log(elem.innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendchild(createdElement);

// removeChild(element); ------> removes an element



// Selecting using Query
sel = document .querySelector('.container')
console.log(sel)
sel = document .querySelectorAll('.container')
console.log(sel)


// Events in JavaScript
// firstContainer.addEventListener('click',function(){
//     console.log("Clicked on container")
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container")
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container")
// })
// firstContainer.addEventListener('mouseup',function(){
//     console.log("Mouse up when clicked on  container")
// })
// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse down when clicked on container")
// })

// Arrow Functions
// function summ(a,b){
//     return a+b;
// }

summ = (a,b)=>{
    return a+b;
} 

logKaro = ()=>{
    console.log("I am your log")
}

// SetTime out and setinterval

SeTimeout(logKaro,2000);
// setInterval(logKaro,2000);

clr = setInterval(logKaro,2000);







