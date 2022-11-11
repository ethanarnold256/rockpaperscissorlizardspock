// hands = ['✊', '✋', '✌️', '🤏', '🖖'];
hands = ['🪨','🗞️','✂️','🦎','🖖'];

// session storage
sessionStorage.setItem('winCounter', '0');
sessionStorage.setItem('tieCounter', '0');
sessionStorage.setItem('lossCounter', '0');

// get elements
star = document.querySelector('.star');
starSpan = document.getElementById('star');
winCounter = document.getElementById('winCounter');
tieCounter = document.getElementById('tieCounter');
lossCounter = document.getElementById('lossCounter');
output = document.getElementById('output');

winCount = parseInt(sessionStorage.getItem('winCounter'));
tieCount = parseInt(sessionStorage.getItem('tieCounter'));
lossCount = parseInt(sessionStorage.getItem('lossCounter'));

/*
 * sets values to screen 
 * used as onClick for buttons
 */
function scoreboard(input) {

    let results = referee(input, roll());

    output.innerText = results[1]; // display output

    switch(results[0]) { // set scores
        case -1:
            sessionStorage.setItem('tieCounter', tieCount++);
            tieCounter.innerText = tieCount;
            star.style.backgroundColor = "var(--color-background-star)";
            break;
        case 0:
            sessionStorage.setItem('tieCounter', lossCount++);
            lossCounter.innerText = lossCount;
            star.style.backgroundColor = "var(--color-background-star-loss)";
            break;
        case 1:
            sessionStorage.setItem('winCounter', winCount++);
            winCounter.innerText = winCount;
            star.style.backgroundColor = "var(--color-background-star-win)";
    }
}