//collection set
let input=new Set<any>()
input.add("shammi")
input.add("Radha")
input.add(35)
input.add("shammi")//set not allowed duplicate entries
console.log(input);

//another way to create the set
let browser=new Set<any>(["chrome","edge","firefox","edge"]);
console.log(browser);

//has()-return boolean
console.log(browser.has("chrome"));
console.log(browser.has("brave"));

//delete
//console.log(browser.delete("firefox"));
console.log(browser);
browser.delete("safari")
console.log(browser);

//size
console.log(browser.size);

//foreach loop
for(let a of browser){
    console.log(a);
    
}

//clear()
browser.clear()
console.log(browser);







