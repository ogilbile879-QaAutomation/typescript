//Array defining syntax1:Using datatype[]-index will start with 0
let x:number[]=[1,2,3,4,5]//number[]-numbers array
let y:string[]=["shammi","peter","mummy"]//string array

//Array defining syntax2:using Array<datatype>
let a:Array<number>=[6,7,8]
let b:Array<string>=["India","USA","china"]

//length of Array
console.log("length of string Array: "+b.length);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);

//Array with different data types

let data:any=[1,"shammi",true,'g',12.5]
console.log(data[0]);
data[0]=12;
console.log(data);
data.push(null);//add value at the the end
console.log(data);
data.pop()//remove the last entry
console.log(data);
data.unshift("Ravi");//add entry at the 0 index
console.log(data);
data.shift()//remove first entry
console.log(data);

//includes inexOf
let fruits:string[]=["apple","banana","orange","guava"]
console.log(fruits.includes("pears"));
console.log(fruits.indexOf("apple"));








