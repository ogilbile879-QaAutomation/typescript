let browsers=new Map<any,any>();
browsers.set(1,"chrome")
browsers.set(2,"firefox")
browsers.set(3,"safari")
browsers.set(4,"edge")
console.log(browsers);


let employee=new Map<any,any>();
employee.set("name","shammi")
employee.set("Role","Automation test engineer")
employee.set("exp",15)

console.log(employee);

//get() returns the value of the key
console.log(browsers.get(4));
console.log(employee.get("Role"));

//has()
console.log(browsers.has("edge"));
console.log(employee.has("manager"));

employee.set("Role","Lead QA")
console.log(employee.get("Role"));

let food=new Map<string,string>([
["food_1","tandoor chicken"],
["food_2","butter cheicken"],
["food_3","soft chicken"]
]);

console.log(food);

//loop through nao using key and value

for(let[key,value] of food ){
    console.log("Using key and value: "+key,value);
    
}

for(let value of food.values()){
    console.log("Using value 2nd way: "+value);
    
}

browsers.forEach((value,key)=>{
    console.log("Key: "+key+" Value: "+value);    
})

browsers.clear();
console.log(browsers);
console.log(browsers.size);






