
//npx tsx typeScriptFolder/15_objects.ts

let a:{empName:string,empId:number}={
    empName:"peter",
    empId:25
}

let b:{studName:string,studId?:number}={
    studName:"shammi"

}
b.studId=45
console.log(a);
console.log(b);
