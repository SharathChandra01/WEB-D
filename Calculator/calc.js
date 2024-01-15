let display = document.querySelector(".display");
function inputvalues(input){
    display.value += input;
}
function Clear(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "ERROR";
        console.log(err);
    }
}