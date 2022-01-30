const quote  = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');
const message = document.getElementById('message');
let highlightPosition;
let wordQueue;
let startTime;


function startGame(){
            console.log('game started!');

            quoteText = 'THE QUICK BROWN FOX JUMPS OVER A LAZY DOG';
            wordQueue = quoteText.split(' ');
            quote.innerHTML = wordQueue.map(word=>(`<span>${word}</span>`)).join('');

            highlightPosition = 0;
            quote.childNodes[highlightPosition].className = 'highlight';
            startTime = new Date().getTime();
}

function checkInput (){
    console.log('checking input');
    const currentWord = wordQueue[0]; //sets the first word in array to currentWord
    const typedValue = input.value.trim();//gets value from input and removes spaces.

    if (currentWord !== typedValue){
        input.className = currentWord.startsWith(typedValue) ? "" : 'error';
        return;
    }

    wordQueue.shift(); //removes the first item in the word queue
    input.value = '';

    quote.childNodes[highlightPosition].className = "";
       

    if (wordQueue.length === 0){
        gameOver();
        return;
    }

    highlightPosition++;
    quote.childNodes[highlightPosition].className = "highlight"; 
}


function gameOver(){
    const endGameTime = new Date().getTime() - startTime;
    document.body.className = "winner";
    message.innerHTML = `<span class="congrats">Congratulations</span>
    </br>
    You finished in ${endGameTime/1000} seconds`;

}

start.addEventListener('click',startGame);
input.addEventListener('input',checkInput);