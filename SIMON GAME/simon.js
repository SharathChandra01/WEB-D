let gameseq =  [];
let userseq =  [];

let buttons = ["red","green","orange","blue"];

let started = false;
let level = 0;
let highscore = 0;
let h1=document.querySelector(".highscore");

let h3 = document.querySelector("h3");

 document.addEventListener("keypress",function () {
    if (started == false){
        console.log("Game Started");
        started = true;
        levelup();
        
      }
   });
   
   function btnflash(btn){
      btn.classList.add("flash");
      setTimeout(function() {
         btn.classList.remove("flash");
      },300);
   }
   
   function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
       btn.classList.remove("userflash");
    },300);
   }
   
   function levelup(){
      userseq = [];
      level++;
      h3.innerText = `Level ${level}`;
      
      let random = Math.floor(Math.random()*4);
      let randcolor = buttons[random];
      let randbtn = document.querySelector(`.${randcolor}`);
      //  console.log(random);
      //  console.log(randcolor);
      //  console.log(randbtn);
      gameseq.push(randcolor);
      btnflash(randbtn);
   }
   
   function checkAns(idx){
      console.log("curr level: ",level);
      
      if(userseq[idx] === gameseq[idx]){
         if(userseq.length == gameseq.length){
            console.log("same value");
            setTimeout(levelup,1000);
         }
      }
      else{
         // let defaultt = 0;
         h3.innerHTML=(`Game over! Your score was <b>${level}</b> <br> press any key to start again`);
         started = false;
         gameseq=[];
         warning();
         setTimeout(()=>{
            warning();
         },200);
         while (highscore <= level){
            highscore = level;
            h1.innerText = `HighScore : ${highscore}`;
            break;
         }
         level = 0;
         // else{
         //    h1.innerText = `HighScore : ${highscore}`;
         //    setTimeout(()=>{
         //       level = 0;
         //    },200);

         // }
         
   }
}





function warning(){
   let body = document.querySelector("body");
         body.classList.add("bodyred");
         setTimeout(()=>{
            body.classList.remove("bodyred");
         },100);
}

 function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
 };
 
 let allBtns = document.querySelectorAll(".inner");
 for(btns of allBtns){
    btns.addEventListener("click",btnpress);
 }



