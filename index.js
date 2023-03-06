// //main scope 
// game();

function playRound(input) 
{
    //SELECT user answer
    const selectedAnswer = document.getElementById(input).id
    console.log(selectedAnswer);
    const compSelect = getComputerChoice();

    //RETURN the result of win or lose per round from gameRound() function
    let result = gameRound(selectedAnswer, compSelect);

    //UPDATE result display

    //1.UPDATE default image of result
    //CHANGE user selected image choice w/ selectedAnswer var
    document.getElementById("userImg").src = "./assets/" + `${selectedAnswer}` + ".svg";
    //CHANGE bot selected image choice w/ compSelect var
    document.getElementById("botImg").src = "./assets/" + `${compSelect}` + ".svg";

    //2. ASSIGN var to user and bot score elements
    let userScore = document.querySelector('.user-score');
    let botScore = document.querySelector('.bot-score');
    console.log(userScore, typeof userScore);
    console.log(botScore, typeof botScore);
        

    //3. UPDATE final outcome text 
    let resultDisplay = document.querySelector('.final-text');
    if (result === 'win'){
        resultDisplay.innerHTML = 'You have won this round!';
        let userScoreUpdate = parseInt(userScore.textContent) + 1;
        userScore.innerHTML = userScoreUpdate;
    }
    else if (result === 'tie'){
        resultDisplay.innerHTML = 'Draw this round!';
    }
    else
    {
        resultDisplay.innerHTML = 'You have lost this round!';
        let botScoreUpdate = parseInt(botScore.textContent) + 1;
        botScore.innerHTML = botScoreUpdate;

    }
    console.log(resultDisplay, typeof resultDisplay)
    //GAME OVER and reset count
    if ( userScore.innerHTML === '3' )
    {
        resultDisplay.innerHTML = 'You have won majority of the rounds, you are the winner!';
        userScore.innerHTML = '0';
        botScore.innerHTML = '0';
    }

    else if (botScore.innerHTML === '3')
    {
        resultDisplay.innerHTML = 'Bot has won majority of the rounds, you lose!';
        userScore.innerHTML = '0';
        botScore.innerHTML = '0';
    }



}


// //1. The function will return random string of either 'rock || paper || scissors'
function getComputerChoice() {
    //STORE the strings in array
    const selectionArray = ['rock','paper','scissors']; 
    // variable to store random selected string of 'ROCK', 'Paper', 'SCISSORS'
    let compChoice = selectionArray[Math.floor(Math.random()*selectionArray.length)];
    //RETURN the selected string
    console.log(compChoice);
    return compChoice;
}

// //2. Now implement a round of the game function that takes 2 parameters (playerSelect & compSelect)
function gameRound(selectedAnswer, compSelect) {
    //CHECKS paperselection with computer selection and determine the winner of the round
    switch(selectedAnswer)
    {
        case 'rock':
                if (compSelect === 'scissors'){
                    console.log("Bot picked scissors, you win!")
                    return result = 'win'
                }
                else if (compSelect === 'paper') {
                    console.log("Bot picked paper, you lose!")
                    return result = 'lose'
                }
                else
                {
                    console.log("Bot picked rock, it's a tie!")
                    return result = 'tie'
                }
                break;
        case 'paper':
            if (compSelect === 'rock'){
                console.log("Bot picked rock, you win!")
                return result = 'win'
            }
            else if (compSelect === 'scissors') {
                console.log("Bot picked scissors, you lose!")
                return result = 'lose'
            }
            else
            {
                console.log("Bot picked paper, it's a tie!")
                return result = 'tie'
            }
            break;

            case 'scissors':
                if (compSelect === 'paper'){
                    console.log("Bot picked paper, you win!")
                    return result = 'win'
                }
                else if (compSelect === 'rock') {
                    console.log("Bot picked rock, you lose!")
                    return result = 'lose'
                }
                else
                {
                    console.log("Bot picked scissors, it's a tie!")
                    return result = 'tie'
                }
                break;
             default:
                console.log('Please type one of the following choices to play the game: rock OR paper OR scissors');
                return result = 'lose'
                break;
    }
    return result;
}

// 3. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 
// round game that keeps score and reports a winner or loser at the end.
// function game() {
//     //FOR LOOP to play 5 game total
//     let playerCount = 0;
//     let botCount = 0;
//     for (let i = 1; i <= 5; i++)
//     {
//         const compSelect = getComputerChoice();
//         let playerSelect = getPlayerChoice(userInput);
//         let result = playRound(compSelect,playerSelect);
        
//         if (result === 'win')
//         {
//             playerCount++;
//         }
//         else if (result === 'tie')
//         {
//             playerCount++;
//             botCount++;
//         }
//         else
//         {
//             botCount++;
//         }
//         // alert("player score: " + playerCount + " " + "bot score: " + botCount);
//         console.log("player score: " + playerCount,"bot score: " + botCount);

//         // if statement checks if player score with bot and determine the winner out of the 5 rounds.
//         if(i === 5)
//         {
//             if (playerCount > botCount)
//             {
//                 // alert("You win!")
//                 console.log('You win the game! Congrats... now get a life!');
//             }
//             else if (playerCount === botCount)
//             {
//                 // alert("draw!")
//                 console.log('Oh interesting its a draw, i still see it as a lose ;)')
//             }
//             else
//             {
//                 // alert("you lose")
//                 console.log('You Lose, Skynet will soon take over the world!')
//             }
//         }
//     }
// }