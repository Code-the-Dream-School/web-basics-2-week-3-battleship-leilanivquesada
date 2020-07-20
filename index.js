const battleship = () => {
  return 'The winner is...?'
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult





// here are my notes first

//## Step 1: Create Players. 

//Create your player objects. get your player names first. 




const player1 = {
  name: "", 
  shipCount: 4,
  gameBoard: [],
};
const player2 = {
  name: "",
  shipCount: 4, 
  gameBoard: [],
};
const playerOneGuesses = [];
const playerTwoGuesses = [];
let i;
let x;
let y;
let position;
let firstInRound;
let secondInRound;
let guess1X;
let guess1Y;
let guess2X;
let guess2Y;
let p2Guess;
let p1Guess;


player1["name"] = prompt(`Player 1! You're up first. What's your name?`);
player2["name"] = prompt(`Player 2! Your turn! What's your name?`);

console.log(player1);
console.log(player2);

//| Property  | Type   | Default Value                                                    |
//| --------- | ------ | ---------------------------------------------------------------- |
//| name      | String | User-provided via the `prompt()` function                        |
//| shipCount | Number | `4` (the number of ships each player starts with)                |
//| gameBoard | Array  | 2-dimensional array with 4 rows and 4 columns, filled with zeros |


//# Step 2: Randomly Add Ships to each Board

//Each player's board will start with **four ships**.
//The ships should be placed randomly, which means you will need to do the following steps for each player's board:

//1. Create a loop that runs until 4 ships have been added to the board
//2. Inside the loop, generate a random `x` and a random `y` coordinate (must be between 0 and 3)
//3. Check if the board space (array element) at those coordinates has a ship or not:
//   - If not, "add a ship" (change the value from `0` to `1`) and increment the total added ships counter
//   - If yes, let the loop continue (do nothing)

// create player 1's board. create an x and y. iterate through the array to ensure that array at i, j never matches both x and yes
alert(`Now generating ${player1.name}'s game board.`);
for (let i = 0; i < 4; i++) {
x = Math.floor(Math.random() * 4);
y = Math.floor(Math.random() * 4);
position = [x, y];
  if (player1.gameBoard.indexOf(position) === -1 && player1.gameBoard.length < 4) {
player1.gameBoard[i] = (position);
}  
}

// create player 2's board
alert(`Now generating ${player2.name}'s game board.`);
for (let i = 0; i < 4; i++) {
x = Math.floor(Math.random() * 4);
y = Math.floor(Math.random() * 4);
position = [x, y];
if (player2.gameBoard.indexOf(position) === -1 && player2.gameBoard.length < 4) {
player2.gameBoard[i] = (position);

}  
}

// who goes first? 
let coinToss = prompt(`${player1.name}, pick heads or tails.`);
let randomNum = Math.floor(Math.random() * (2) + 1);
if (randomNum === 1) {
  i = "tails";
} else {
  i = "heads";
}
if (coinToss.toLowerCase() === i) {
  firstInRound = player1; 
  secondInRound = player2;
  alert(`${player1.name}, you're going first!`);
} else {
  firstInRound = player2;
  secondInRound = player1;
  alert(`Sorry ${player1.name}. ${player2.name}, you're up!`);
}

// begin the game
// switch turns

while( firstInRound.shipCount > 0 && secondInRound.shipCount > 0) {
  guess1X = prompt(`${firstInRound.name}, pick an x coordinate. Here were your previous guesses: ${playerOneGuesses.join("; ")}`);
  guess1Y = prompt(`${firstInRound.name}, pick a y coordinate. Here were your previous guesses: ${playerOneGuesses.join("; ")}`);
  p1Guess = [guess1X, guess1Y];
  playerOneGuesses.push(p1Guess);
  // iterate through the game board looking for x matches
  for (i = 0; i < secondInRound.gameBoard.length; i++) {
    if (guess2X === secondInRound.gameBoard[i][0]) {
      if (guess2Y === secondInRound.gameBoard[i][1]) {
        secondInRound.shipCount -= 1;
        alert(`${firstInRound.name} You sunk a ship! ${secondInRound.name} remaining ships: ${secondInRound.shipCount}.`);
        if (secondInRound.shipCount === 0) {
          alert(`GAME OVER. ${firstInRound.name} wins!`);
      }
    alert(`Miss.`);  
    } 
  }
  guess2X = prompt(`${secondInRound.name}, pick an x coordinate. Here were your previous selections: ${playerTwoGuesses.join("; ")}`);
  guess2Y = prompt(`${secondInRound.name}, pick a y coordinate. Here were your previous selections: ${playerTwoGuesses.join("; ")}`);
  p2Guess = [guess2X, guess2Y];
  playerTwoGuesses.push(p2Guess);
  // iterate through the game board looking for x matches
  for (i = 0; i < firstInRound.gameBoard.length; i++) {
    if (guess2X === firstInRound.gameBoard[i][0]) {
      if (guess2Y === firstInRound.gameBoard[i][1]) {
        firstInRound.shipCount -= 1;
        alert(`${secondInRound.name} You sunk a ship! ${firstInRound.name} remaining ships: ${firstInRound.shipCount}.`);
        if (firstInRound.shipCount === 0) {
          alert(`GAME OVER. ${secondInRound.name} wins!`);
        }
      }
    alert(`Miss.`);
    } 
  }
}
}

console.log(player1);
console.log(player2);





//| Ship | Coordinates |
//| :--: | :---------: |
//|  1   |   (0, 3)    |
//|  2   |   (1, 1)    |
//|  3   |   (2, 0)    |
//|  4   |   (3, 2)    |

//<div style="clear: left"></div>

//## Step 3: Start the Game Play

//You will need to loop through the following steps, switching between players 1 and 2, until one of the players wins.

//### Step 3a: Ask the Player to Choose Strike Coordinates

//Using the `prompt()` function, ask the current player to choose an `x` and `y` coordinate to strike. You will need to store the user's input in a variable(s) for the next step.

//### Step 3b: Determine if the Player Sunk their Opponent's Ship

//Using the `x` and `y` coordinates from the previous step, check the opponent's board to see if the space (array element) at those indices is a ship (is equal to `1`).

//- If yes, "sink the ship" (change the value from `1` to `0`), decrement the opponent's ship count, and show an alert that says "Hit!"
//- If not, show an alert that says "Miss!" and let the loop continue (do nothing)

//Here's an example of how the opponent's board might look in visual form:

//<img height="200" src="img/board-sunk-1.png" alt="Example game board with one ship sunk" />

//### Step 3c: Check if the Opponent has Any Ships Left

//Having decremented the opponent's ship count, check if the number is still greater than zero.

//- If not, the game has ended and the current player won
//- If yes, let the loop continue (do nothing) and switch to the other player

//Here's an example of how the opponent's board might look in visual form:

//<img height="200" src="img/board-sunk-4.png" alt="Example game board with all four ships sunk" />

//## Step 4: End the Game Play

//Once a player has won the game, the function should return a message stating the results. Here's an example:

//> The winner is Player 1!
