const input = document.getElementById('input');
const btn = document.getElementById('btn');
let num = Math.floor(Math.random() * 100);
let ma=10;

function m(){
    ma--;
}
function reset(){
    ma=10;
}
btn.addEventListener("click", (e)=>{
    if(ma>0){
        if(input.value == num){
            document.getElementById('text1').innerHTML= "You Won !!";
        }
        
        else if(input.value == ""){
            alert("Guess a number");
        }
        
        else if(input.value > 100){
            alert("Number guessed should't exceed a value of 100");
        }
        
        else if(input.value < 0){
            alert("Number guessed should't exceed a value below 0");
        }
        
        else if(input.value < num){
            document.getElementById('text1').innerHTML = "Your guess is too low.";
            m();
            document.getElementById("topp").innerHTML=ma;
        }
        
        else if(input.value > num){
            document.getElementById('text1').innerHTML = "Your guess is too high.";
            m();
            document.getElementById("topp").innerHTML=ma;
            
        }
    }else{
        reset();
        document.getElementById('text1').innerHTML = "BETTER LUCK NEXT TIME";
    }
}
)