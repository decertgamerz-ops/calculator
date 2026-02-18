let display=document.querySelector("#display");

let one=document.querySelector(".one");
        one.addEventListener("click",()=>{
            display.value+=1;
        });

let two=document.querySelector(".two");
        two.addEventListener("click",()=>{
            display.value+=2;
        });

let three=document.querySelector(".three");
        three.addEventListener("click",()=>{
            display.value+=3;
        });

let four=document.querySelector(".four");
        four.addEventListener("click",()=>{
            display.value+=4;
        });

let five=document.querySelector(".five");
        five.addEventListener("click",()=>{
            display.value+=5;
        });

let six=document.querySelector(".six");
        six.addEventListener("click",()=>{
            display.value+=6;
        });
 
let seven=document.querySelector(".seven");
        seven.addEventListener("click",()=>{
            display.value+=7;
        });
        
let eight=document.querySelector(".eight");
        eight.addEventListener("click",()=>{
            display.value+=8;
        });


let nine=document.querySelector(".nine");
        nine.addEventListener("click",()=>{
            display.value+=9;
        });

let zero=document.querySelector(".zero");
        zero.addEventListener("click",()=>{
            display.value+=0;
        });

let dot=document.querySelector(".dot");
        dot.addEventListener("click",()=>{
            display.value+=".";
        });
         
        
let plus=document.querySelector(".plus");
        plus.addEventListener("click",()=>{
            display.value+="+";
        });           

let minus=document.querySelector(".minus");
        minus.addEventListener("click",()=>{
            display.value+="-";
        });           

let multiply=document.querySelector(".multiply");
        multiply.addEventListener("click",()=>{
            display.value+="*";
        }); 
        
let divide=document.querySelector(".divide");
        divide.addEventListener("click",()=>{
            display.value+="/";
        });
        
let clear=document.querySelector(".clear");
        clear.addEventListener("click",()=>{
             document.getElementById("display").value = '';
        }); 

let resultString = "";


let equal=document.querySelector(".equal");
        equal.addEventListener("click",()=>{

         resultString = display.value;
         let final=seperation(resultString);
         display.value=final;

        });           

function seperation(resultString){

    let operators=[];
    let numbers=[];
    let currentNumber = "";
    for(i=0;i<resultString.length;i++){
        let char=resultString[i];
        if(char==="+" || char==="-" || char==="*" || char==="/"){
                numbers.push(currentNumber);   // save first number
                currentNumber = "";  
               operators.push(char);

        }
        else{
                  currentNumber += char;     
        }
    }

    numbers.push(currentNumber); 
     

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
}



console.log(numbers)
console.log(typeof(numbers))

////////////////////////////////
    // let num1=Number(numbers[0]);
    // let num2=Number(numbers[1]);




   
      
     
    for (let i = 0; i < operators.length; i++){
        
        if(operators[i]==="*" || operators[i]==="/"){

            let temp;
            if(operators[i]==="*"){
            temp=numbers[i]*numbers[i+1];
        }
          else{
            temp=numbers[i]/numbers[i+1];
        }

        numbers[i]=temp;
        numbers.splice(i+1,1);
        operators.splice(i,1);
        i--;

    }
}

 let result =numbers[0];

 for(i=0;i<operators.length;i++){
    
     let operator=operators[i];
     let nextNumber=numbers[i+1];

     if(operator==="+"){
        result=result+nextNumber;
     }
     if(operator==="-"){
        result=result-nextNumber;
     }

 }

//     if(operators==="+"){
//         result=num1+num2;
//     }

//    else if(operators==="-"){
//         result=num1-num2;
//     }

//    else if(operators==="/"){
//         result=num1/num2;
//     }

//    else if(operators==="*"){
//         result=num1*num2;
//     }
   
   return result;
}

