

let a=5;
let b=5;

if(a==b){
    console.log(" a and b values are same");
    
}

//if else

let age=17;

if(age >=18){
    console.log(" you are eligible for voting");
    
}else{
    console.log("you are too young need not to vote");
    
}

//if else if

let score=65;

if(score>=85){
    console.log("Grade A");
    
}else if(score<=85 && score>=75){
    console.log("Grade B");
    
}else if( score<=75 && score>=65){
    console.log("Grade c");
    
}

//Nested if - if inside another if


let personAge =25,weight =50

if(personAge>=18){
    if(weight>=50){
        console.log("you are eligible for blood donation");
        
    }else{
        console.log("you need to gain weight");
        
    }
}else{
    console.log("you are too young need not to donate blood");
    
}

//switch

let day=5;
let dayname;

switch(day){
    case 1:
        dayname="monday"
        console.log(dayname);
        break
    case 2:
        dayname="Tuesday"
        console.log(dayname);
        break
    case 3:
        dayname="wensday"
        console.log(dayname);
        break
    case 4:
        dayname="thursday"
        console.log(dayname);
        break
    default:
        console.log("its holiday");
            
            
            
            
        
}