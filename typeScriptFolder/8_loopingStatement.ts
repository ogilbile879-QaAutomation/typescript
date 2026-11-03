//for loop-Used when iterations are fixed
const num=17;
let isPrime=true;
for(let i=2;i<num/2;i++){
    if(num%i==0){
    isPrime=false;
    break;
    }
}

if(isPrime){
    console.log("given number is prime");
    
}else{
    console.log("given number is not prime");
    
}

//Reverse for loop

for(let i=10;i>=1;i--){
    console.log((i));
    
}

//Loop through the array

let name=["c","java","typescript"]

for(let i=0;i<name.length;i++){
    console.log(name[i]);
    
}

//while loop-When iteration is not fixed then it is recommended to use while loop

let count=1;
while(count<4){
    console.log(count);
    count++;
    
}
console.log("======================================");

//do while loop-do block is used for clean up code which s always executed
let d=1
do{
console.log("do block"+d);
d++
}while(d<10){

}