/*let firstName="Sumudu";
let lastName="Herath";
let age = 22;

let fullName = firstName + ' '+lastName;
console.log("My name is " +firstName + " "+lastName+ " "+"and I'm "+age + "years old.");
console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old.`);*/

/*const fruits="bannana,apple,mango,grapes,berry";
console.log(fruits);
console.log(fruits.length);*/

/*const fruit="banana";
console.log(fruit.length);
console.log(fruit.replace("ban",123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());*/

/*const fruit="banana";
console.log(fruit);
console.log(fruit.charAt(2));
console.log(fruit.split(""));*/

/*let num=0;
while(num <10){
    console.log(num);
    num += 1;
}*/

/*for(let i =0; i<=10 ; i++){
    console.log(i);
}*/
/*let selectedColor =["blue","yellow","green"];
let selectedMonth = new Array('may','june','july');
console.log(selectedColor.length);*/

/*let selectedColor=["blue","red","yellow","green"];
let selectedMonth =new Array("may","june","july");
console.log(selectedColor.length);
for(let i=0; i<selectedColor.length; i++){
    console.log(selectedColor[i]);
}*/

// let selectedColor=["blue","red","yellow"];
// console.log(selectedColor[1]);

/*let fruits= ["apple","orange","mango","berry"]
console.log(fruits.pop());
console.log(fruits);*/

/*let fruits=["apple","orange","mango","yellow"];
console.log(fruits.pop()); //print berry ,first pop
let i = fruit.pop();
console.log(i);///print mango ,2nd pop*/

/*let fruits=["apple","orange","mango","berry"];
console.log(fruits);
console.log(fruits.push('pears'));
console.log(fruits);*/

// let fruits=["apple","orange","mango","berry"];
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);

// let fruits=["apple","orange","mango","berry"];
// console.log(fruits);
// console.log(fruits.slice(1,3));
// console.log(fruits);

// let fruits=["apple","orange","mango","berry"];
// console.log(fruits);
// console.log(fruits.unshift("pears"));
// console.log(fruits);

/*let num=[1,3,5,2,20];
console.log(num.reverse());*/

/*let fruits = ["apple","orange","mango","berry"];
let vegitables = ["tomato","potato","carrot"];

let finalArr = fruits.concat(vegitables);
console.log(finalArr);*/
/*
let fruits = ["apple","orange","mango","berry"];
let vegitables = ["tomato","potato","carrot"];
 let finalArr=fruits.concat(vegitables);
 finalArr[8]= "new vegi"; 
 console.log(finalArr);*/

//  let value =prompt("Enter value");
//  console.log(value);

// let newArr = new Array();
// for(let i=0; i<10; i++);{
// let value = prompt(`Enter Value ${i+1}`);
// newArr.push(value);
// }
// console.log(newArr);

/*let newArr = new Array();
for(let i=0;  i<3; i++){
    let value = prompt("Enter Value");
    newArr[i]=value;
}
console.log(newArr);*/

// function add(firstNum,secondNum){
//     console.log(firstNum + secondNum);

// }
// add(1,30);

// function greet (){
//     console.log("Hi")
// }
// greet();

/*function greet(name){
    console.log(`hi ${name}`)
}
greet("amal");*/

// function add(fnum,snum){
//     return fnum+snum;

// }
// let total = add(1,3);
// console.log(total)

//arrow functions
//multiple parameters

/*function add(fnum,snum){
    console.log(fnum+snum);

}add (1,2);
let sum= (fnum,snum) => {
    console.log(fnum+snum);
}*/
// //Objects
// let person ={
//     name:"amara",
//     age:6
// };
// console.log(person);

// let person ={
//     name:"kamal",
//     age:22
// }
// console.log(person.age);
// console.log(person['age']);

// let selected = prompt("what do you want to change name or age?");
// let person={
//     name:"amara",
//     age:22

// };
// person.name= "nayana";
// person.age=30;
// person["name"]="kamal";
// console.log(person["name"]);

let selected =prompt('what do you want to chnage name or age');
console.log(selected)
let value = prompt("Enter value");
console.log(value)

let person={
    name :"amal",
    age:21
};