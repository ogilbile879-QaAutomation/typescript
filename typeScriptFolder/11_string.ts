//String basic

let name:string="shammi"

let city:string="Mumbai"

console.log(name);
console.log(city);


//String Indexing
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);


//length property in string
console.log(name.length);

//String methods

let message:string="Hello shammi";
console.log(message.toUpperCase);
console.log(message.toLowerCase);
console.log(message.includes("Hello"));
console.log(message.startsWith("Hello"));
console.log(message.endsWith("shammi"));
console.log(message.substring(0,7));
console.log(message.replace("Hello","Hi"));

//trim()-remove leading and trailing spaces

let username:string=" shammi jha "
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

//split function

let tech:string="java,typescript,playwright,selenium"
let res=tech.split(",")
console.log(res[0]);
console.log(res[3]);

//String concatination
let fullname=name+" "+city
console.log(fullname);
//Modern techniques
let a:string = "shammi"
let b:number=35
console.log(`My name is ${a} and my age is ${b}`);
















 
