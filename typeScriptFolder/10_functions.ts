//Scope of variables-Local and global variable
let company= "abc";
console.log("Outside method body");

//function
/*
Function	                                Method
Independent block of code	                Belongs to a class or object
Can be called independently	                Called through an object or class, depending on its type
Not necessarily associated with a class	    Associated with a class or object
Common in procedural programming	        Common in object-oriented programming
*/

function employee(){
    console.log("Inside method body");
    let name="shammi"
    let id=56123
    console.log("name -"+name+" id ="+id);
    
    
}

employee()

function add( a:number, b:number):number{
return a+b
}

console.log(add(10,20));

