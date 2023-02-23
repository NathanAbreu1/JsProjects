let buttons = Array.from(document.getElementsByClassName("button"));
let display = document.getElementById("display");
const sound = new Audio("Calculator.mp3");

for(let i = 0; i < buttons.length; i++){
  
   buttons[i].onclick = function playsnd(){
    sound.play();
   }
}

buttons.map( button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;
      case '⌫':
        if(display.innerText){
           display.innerText = display.innerText.slice(0, -1);
        }
      case '=':
        try{
        display.innerText = eval(display.innerHTML);
        }catch{
          display.innerText = "Error!";
        }
        break;
        default:
          display.innerText += e.target.innerText;
    }
  })
})