//numero al azar
let randomNumber = Math.floor(Math.random()*100) + 1;  //to add the 100 to the range


let numberEntered = document.getElementById('numberEntered');
let message = document.getElementById('message');
let attempt = document.getElementById('attempt');
let attempts = 0;


//function
function checkResult(){

    //adding attempst to the DOM
    attempts++;
    attempt.textContent = attempts;

    //operating the input
    let numberParsed = parseInt(numberEntered.value);
    console.warn(typeof numberParsed);

    if(numberParsed < 1 || numberParsed > 100 || isNaN(numberParsed) ){
        message.textContent = "Please enter a valid number ( From 1 to 100)";
        message.style.color = 'red';
        return
    }

    if(numberParsed === randomNumber){
        message.textContent = "You got it! You have guessed the number!";
        message.style.color = 'green';
        numberEntered.disabled = true;
    } else if (numberParsed < randomNumber){
        message.textContent = "Give me more! The number is higher";
        message.style.color = "orange";
    }else{
        message.textContent = "Too much! The number is smaller"
    }





}