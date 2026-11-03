for(let i=0;i<10;i++){
    console.log(i);
    
    if(i==4) break;
}
console.log("===============================");

//continue- skip the iteration when condition is match

for(let i=1;i<10;i++){
    if(i==8){ 
        
        continue;

    }
    console.log(i);
}