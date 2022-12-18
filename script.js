let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number =Math.floor(Math.random()*100)+1
btn.addEventListener('click',function(){
    let input = document.getElementById('userInput').value;
    if(input==number){
        output.innerHTML = 'You Guessed Right!';
    }
    else if(input<number){
     output.innerHTML = 'You Guessed too Low!';
    }
    if(input>number){
        output.innerHTML = 'You Guessed too High!';
    }
})