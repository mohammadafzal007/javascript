//         // console.log("Hello Bond");
//         // let string="HellO i m Bond      ";
//         // console.log(string.trim());
//         // console.log(string.length);
//         // console.log(string.trim());
//         // string template interpolation
//         let firstname = "Mohammad";
//         let lastname = "Afzal";
//         //  let fullname=`My Full Name is ${firstname} ${lastname}`;
//         //  console.log(fullname);
//         // console.log(`My Full Name is ${firstname} ${lastname}`);

//         // null is a object not a primitive because it is a bugg  in javascript
//         // let x=null;
//         // console.log(typeof x);

//         // BigInt
//         // let number=BigInt(2373864874736);
//         // let num2=6538724324632n;
//         // console.log(typeof num2);
//         // console.log(typeof number);

//         // callback function

//         // function mydisplay(something) {                       //here mydiplay is callback function
//         //     document.getElementById("para").innerHTML = something;
//         // }
//         // function sum(x, y, mycallback) {
//         //     let sum = x + y;
//         //     mycallback(sum);
//         // }
//         // sum(5, 5, mydisplay);

//         // spread operator
//         let arr1 = [1, 2, 4, 5];
//         let arr2 = ["afzal", "daman", 5];
//         let arr3 = [...arr1, ...arr2];
//         console.log(arr1);
//         console.log(arr2);
//         console.log(arr3);
//         let arr = [..."afzal"];

//         console.log(arr);

//         let obj1 = {
//             name: "afzal",
//             department: "BCA",
//             fees: 40000
//         };
//         let obj2 = {
//             name: "daman",
//             department: "BCom",
//             fees: 40000
//         };
//         console.log(obj1);
//         console.log(obj2);
//         const obj3 = { ...obj1, ...obj2 };

//         console.log(obj3);

//         //object destructuring
//         let  obj = { name: "Tony Stark", weapon: "Iron Suit", strength: 1000 };
//       let obj4={...obj,strength:5000};
//      console.log(obj4);
//      let {name,weapon,strength}=obj1;
//      console.log(name);
//      console.log(weapon);
//      console.log(strength);

// //spread operator is also used to make array elemnnt as parameterusing ()...arr1);
//         function sum(a, b, c,d,e,f) {
//             return (a + b + c+d+e+f);
//         }
//         console.log(sum(...arr1,...arr1));

//         // aysnc naure f javascript
//         console.log("HELLO ITZ AFZAL");
//         setTimeout(() => {
//             console.log("Im in settimeout")

//         }, 1000);
//         console.log("I m ou of settimeout");

// let fs= require("fs");
// fs.readFile("test.txt","utf-8",(err,data)=>{
//     console.log(err,data);
// })
// console.log("I m out of file");

// async and awaIT
// const readfile=async (file1,file2,file3)=>{
//     let a1=fs.readFile(file1,"utf-8");
//     let a2=fs.readFile(file2,"utf-8");
//     let a3=fs.readFile(file3,"utf-8");
//     let c1=await a1;
//     console.log(a1);
//     let c2=await a2;
//     console.log(a2);
//     let c3=await a3;
//     console.log(a3);

// }
// readfile("file1.txt","file2.txt","file3.txt");

// .split() method     //it splits the string into characters
const string = "Hello Itz Jamesbond";
let words = string.split(" ");
let no_ofwords = string.split(" ").length;
console.log(string);
console.log(words);
console.log(no_ofwords);

// map,filter,reduce

// map is used to do a same task with all elements of an array.it gives you a new rray
// *it does not change the original array
let arr = [1, 2, 4, 6, 7];
let arr2 = arr.map((value, value1) => {
  return `index is ${value1},${value + 4}`;
});
console.log(arr);
console.log(arr2);

// console.log(show);

// filter
// it is used to filter the values of an Array it gives you a new array of elements on which the condition is applied
// *it does not change the original array
let arr3 = arr.filter((value) => {
  return value > 3;
});

console.log(arr3);

//reduce
// *it does not change the original array
let arr5 = arr.reduce((value1, value2) => {
  return value1 + value2;
});
console.log(arr5);

// == and ===
let a = 1;
let b = "1";
console.log(a == b); //this is because == is compare only value
console.log(a === b); //this is because === is compare value and datatype too.

// function declaration
// function mul(a,b){
//     return a*b;
// }
// let ans=mul(4,5);
// console.log(ans);

//function expression
// let mul=function(a,b)
// {
//     return a*b;
// }
// let ans=mul(2,5);
// console.log(ans);

// Arrow function
// const mul=(a,b)=>{
//     return a*b;
// }
// let ans=mul(4,7);
// console.log(ans);
const str = "Hello Afzal";
function show() {
  // const str="Hello Afzal";
  return str;
}
console.log(show());

function sum(a, b, ...c) {
  ///here ...c is used to copy rest parameter to an array
  console.log(a);
  console.log(b);
  console.log(c);
}
// sum(1,4,2,6,8,9,23,56,45);

function arr9(...nums) {
  let sum1 = nums.map((item) => {
    return item + 1;
  });
  console.log(sum1);

  let sum2 = nums.filter((item) => {
    return item > 2;
  });
  console.log(sum2);
  let sum3 = nums.reduce((item1, item2) => {
    return item1 * item2;
  });
  console.log(sum3);
  for (let i of nums) {
    console.log(i);
  }
}
// arr9(1,2,3,4,5);

// parameter destructuring
// let marvel={
//     name:"Tony Stark",
//     weapon:"Iron Suit",
//     strength:"infinite"
// };

// function showmarvel({name,weapon,strength})
// {
//     // console.log(`Name of SuperHero is ${name} his weapon is ${weapon} and strength is ${strength}`);
// console.log(name);
// console.log(weapon);
// console.log(strength);
// }

// showmarvel(marvel);

// function returnng function
//         function hello(){
//             return (a,b)=>{
// return a+b;
//             };
//         }
//         let ans=hello();
//         console.log(ans(4,5));
// console.log(sum(3,5));

// function returning anything
// function any()
// {
//     return ({name:"afzal",power:"js",weakness:"love"});
// }
// let get=any();
// console.log(get);
const arr6 = [
  { firstname: "afzal", lastname: "siddiqui" },
  { firstname: "daman", lastname: "jeet" },
  { firstname: "tarun", lastname: "sharma" },
  { firstname: "kunal", lastname: "gupta" },
  { firstname: "manish", lastname: "goswami" },
];
let res = arr6.map((value) => {
  return `${value.firstname} ${value.lastname}`;
});
// console.log(res);

// sort method
// it sorts an array by using ascii value
// * it changes the original array

const arr7 = [1, 34, 12, 89, 123, 45];
const res1 = arr7.sort();
console.log(res1); //it gives an rude array so we use a function for ascendig and descending array

const arr8 = [1, 23, 12, 67, 345, 12];
let res2 = arr8.sort((a, b) => {
  return a - b;
});
console.log(res2); //it gives an array in ascending array

const arr10 = [1, 23, 12, 67, 345, 12];
let res3 = arr8.sort((a, b) => {
  return b - a;
});
console.log(res3); //it gives an array in descending array

// find method
// it gives first occurence of elemt who you want to find
const arr11 = [23, 12, 45, 34, 78, 56];
let res4 = arr11.find((item) => {
  return item % 2 == 0;
});
console.log(res4);
const person1 = [
  { product_id: 1, price: 2000, name: "mobile" },
  { product_id: 2, price: 5000, name: "laptop" },
  { product_id: 3, price: 4000, name: "desktop" },
  { product_id: 4, price: 2500, name: "iphone" },
];
const res6 = person1.find((value) => {
  return value.price == 4000;
});
console.log(res6);

// every method
// it returns a boolean value  when a condition is true with all elements else false

const person = [
  { product_id: 1, price: 2000, name: "mobile" },
  { product_id: 2, price: 4000, name: "laptop" },
  { product_id: 3, price: 1000, name: "desktop" },
  { product_id: 4, price: 2500, name: "iphone" },
];
const res5 = person.every((value) => {
  return value.price < 5000;
});
// console.log(res5);

// some methods
// it gives a boolean iff the condition is even true for a single element then it return true either false
const person3 = [
  { product_id: 1, price: 2000, name: "mobile" },
  { product_id: 2, price: 4000, name: "laptop" },
  { product_id: 3, price: 1000, name: "desktop" },
  { product_id: 4, price: 60000, name: "iphone" },
];
const res7 = person.some((value) => {
  return value.price > 5000;
});
console.log(res7);

//fill method
// it change the original array
// it is used to fill the array as if you want to add some elemt at any position then you can add

// (elemnttoefiled,start,end)
const arr12 = [12, 45, 23, 78, 56, 123];
// const res8=arr12.fill(0); //it fill the array with 4 zeros
const res9 = arr12.fill(0, 2, 5);

console.log(res9);
console.log(arr12);

// splice method
// *it is used to insert and delete the elements in an array

// *it changes the original array
const arr13 = [12, 34, "afzal", "daman", 45, "007"];
console.log(arr13);
// const res10=arr13.splice(1,2);   //here 1 is starting index and 2 is no. of elements deleted
// console.log(arr13);

const res11 = arr13.splice(2, 0, "inseritem1", 234); //here 2 is starting index 0 is no elemnt is deleted inseritem1 and 234 are inserted at index 2 and 3 after that all elements are setts.
console.log(arr13);

// Iterate are those which can iterate and find the length.
// ex:Array,string,set

// Sets
// order not matter
// not indexed,duplicates not allowed
const set = new Set([1, 2, 3]);
console.log(set);
console.log(typeof set);
//if ur set is empty then we can add items using add method;
//we can add anythin to set
const num = new Set();
num.add("afzal");
num.add(23);
num.add({ name: "afzal", subject: "BCA" });
num.add([1, 3, 5, 25, 5]);
console.log(num);
console.log("Set Iterate");

for (let numbers of num) {
  console.log(numbers);
}

// console.log(num.has("afzal")); /has method in set which gives boolean value is elemnt present in set or not
let myfunc = (number) => {
  console.log(this);
};
myfunc();
const my_obj = {
  name: this,
  myfunc: function () {
    console.log(this);
  },
};
// my_obj.myfunc();
// console.log(my_obj.name);

let sttring = "ddhd hdshfsjhfjs hidsds hdhf";
let newarray = sttring.split(" ");
console.log(newarray);
console.log(typeof newarray);
let text = "";
for (let item of newarray) {
  text += item.charAt(0).toUpperCase() + item.slice(1) + " ";
  console.log(text);
}
console.log(text);

//split method : it conver the string into characters
let s = "Hello Itz Afzal";
let res10 = s.split(); //" " it is separator anything in this it separate the string with that
// let res19=s.split(" ");
console.log(res10);

//Regular exPRESSION:

// Note:for finding all occurences use flag :g
// it used to search any word .
//it return an array if word is present and returns null if not present.

// let reg=/Afzal/;  //it search only first occcurence
// console.log(reg.exec(str0));   //it gives the array with index of first occurence

// let reg=/Afzal/g;  //it gives all occurences if you print again and agin and if
// console.log(reg.exec(str0));   //it gives the array with index of first occurence
// console.log(reg.exec(str0));   //it gives the array with index of second occurence
// console.log(reg.exec(str0));   //it gives the null because no afzal is presnt

let reg = /Afzal/g; //it search word and ignore the case sensitivity
let str0 = "Hello Itz Afzal Welcome to Afzal World";
console.log(reg.exec(str0));
// console.log(reg.exec(str0));

//match() in reg   : it gives an array of all occcurences if your flag is g(global) , if no flag is her then it give only first occurence
console.log(str0.match(reg));

//search method  : it gives the index of word if trye else it gives -1
console.log(str0.search(reg));

//replace method use to replace ;
console.log(str0.replace(reg, "James"));

let mystr = "Hello! Welcome to Siddiqui Island 2.0";
// let regx=/\s/g;        //it matches whitespaces characters
// let regx=/\w/g;         //it matches words characters not extrasymbols
// let regx=/\W/g;            //it matches only extrasymbols also whitespaces
// let regx=/\d/g;            //it matches digits
// let regx=/\D/g;            //it matches NON-DIGITS INCUDING SYMBOLS,WHITESPACES ,CHARACTERS
let regx = /\S/g; //it matches NON-WHITESPACES   INCUDING SYMBOLS, ,CHARACTERS
let result = mystr.match(regx);
console.log(result);
let str3 = "Hello It  Z Afzal";
let re = /\s+/;
console.log(str3.search(re));
