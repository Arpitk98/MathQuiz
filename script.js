
const ques = document.getElementById("question");
const score =document.getElementById("score");
const res = document.getElementById("result");
let mark=0;
const submit=document.getElementById("submit");
const nextEle=document.getElementById("next");
let storeAns;
const reviewEle = document.getElementById("review");
let check =false; 
let checking =true;


const generateQuestion = () =>{
    let a =Math.ceil(100*Math.random());  
    let b = Math.ceil(100*Math.random());  
    let c = Math.floor(5*Math.random());  
    
    const arr = ['multiply by' , 'add to' , 'subtract from' , 'divide by' , 'modulo'];
    let question = `<b>Q. What is ${a} ${arr[c]} ${b}</b>` ; 
    let answer ;
      if(arr[c].startsWith('multiply'))
        answer = a*b;
     else if(arr[c].startsWith('subtract'))
        answer=b-a;
    else if(arr[c].startsWith('divide'))
        answer=parseInt( a/b);
    else if(arr[c].startsWith('add'))
        answer =a+b;
    else
    answer=a%b; 

    console.log(question , answer)  

    return {question , answer};
}

const showQuestion =  ()=>{

   let {question , answer} = generateQuestion(); 
    ques.innerHTML =question;
   storeAns = answer; 

}

showQuestion(); 

submit.addEventListener("click", ()=>{
   
    if(res.value!="" && checking){ 
    
    if(res.value==storeAns){
        mark++;
        reviewEle.style.background = "linear-gradient(to right, #00b09b, #96c93d)";
        reviewEle.innerHTML=`Correct and Your score is ${mark}`;
    }
    else{
        mark--; 
        reviewEle.style.background = "linear-gradient(to right, #e33217, #ff001e)";
        reviewEle.innerHTML=`Wrong and Your score is ${mark}<br> Correct Ans ${storeAns}` ;
    }
     
    score.innerText = `Score -> ${mark}`; 
  
     check=true; 
     checking=false; 
       
}
else if(res.value!="")
    {alert("Go to next question");
}  
else
{
    alert("Please Enter your Answer First");
}  

   
})

nextEle.addEventListener("click" , ()=>{

    if(check==true){

        res.value=' ';  
        showQuestion();
        reviewEle.style.background="none";   
        reviewEle.innerHTML="" 
        check = !check;
        checking=true;
    }
    else if(res.value!="")
        alert("Please Submit your Answer First");
    else{
        alert("Please Enter your Answer First"); 
    }

}) 