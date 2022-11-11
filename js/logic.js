// checks if win or loss
function referee(you, it) {

    you = parseInt(you);
    it = parseInt(it);
    
    switch(you) {
        case 0: // rock
            switch(it) {
                case 0: // rock
                    return [-1, "Tie."];
                case 1: // paper
                    return [0, "Paper covers Rock."];
                case 2: // scissor
                    return [1, "Rock smashes Scissor."];
                case 3: // lizard
                    return [1, "Rock crushes Lizard."];
                case 4: // spock
                    return [0, "Spock vaporizes rock."];
            }
        case 1: // paper
            switch(it) {
                case 0: // rock
                    return [1, "Paper covers Rock."];
                case 1: // paper
                    return [-1, "Tie."];
                case 2: // scissor
                    return [0, "Scissor cuts Paper."];
                case 3: // lizard
                    return [0, "Lizard eats Paper."];
                case 4: // spock
                    return [1, "Paper disproves Spock."];
            }
        case 2: // scissor
            switch(it) {
                case 0: // rock
                    return [0, "Rock smashes Scissor."];
                case 1: // paper
                    return [1, "Scissor cuts Paper."];
                case 2: // scissor
                    return [-1, "Tie."];
                case 3: // lizard
                    return [1, "Scissor beheads Lizard."];
                case 4: // spock
                    return [0, "Spock smashes Scissor."];
            }
        case 3: // lizard
            switch(it) {
                case 0: // rock
                    return [0, "Rock crushes Lizard."];
                case 1: // paper
                    return [1, "Lizard eats Paper."];
                case 2: // scissor
                    return [0, "Scissor beheads Lizard."];
                case 3: // lizard
                   return [-1, "Tie."];
                case 4: // spock
                    return [1, "Lizard poisons Spock."];
            }
        case 4: // spock
            switch(it) {
                case 0: // rock
                    return [1, "Spock vaporizes Rock."];
                case 1: // paper
                    return [0, "Paper disproves Spock."];
                case 2: // scissor
                    return [1, "Spock smashes Scissor."];
                case 3: // lizard
                    return [0, "Lizard posions Spock."];
                case 4: // spock
                   return [-1, "Tie."];
            }
    }
}

// opponents random pick
function roll() {
    let value = Math.floor(Math.random()*hands.length);
    starSpan.innerHTML = hands[value];
    return value;
}