const player1 = {
  name: "", 
  shipCount: 0,
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    ],
  guesses: []
};
const player2 = {
  name: "",
  shipCount: 0, 
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    ],
    guesses: []
};

let i;
let x;
let y;
let position;
let currentPlayer = player1;
let opponent = player2;



const battleship = () => {

  // create the player names  
player1["name"] = prompt(`Hey friend! What's your name?`);
player2["name"] = prompt(`Ooh, another friend! What's your name?`);

// generate the gameboard by creating random numbers between 0 & 4.
// checks against 2-D array of 0's, populating 0 space with 1. 
// loops until 4 ships (represented by 1's) are occupying each player board.

const generateBoard = player => {
  while (player.shipCount < 4) {
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    if (player.gameBoard[y][x] === 0) {
      player.gameBoard[y][x] += 1;
      player.shipCount += 1;
    }
  }
}
generateBoard (player1);
generateBoard (player2);

// run the game
 // conditional loop; game in play, so long as both players have more than 0 ships
 while(player1.shipCount > 0 && player2.shipCount > 0){
   // ternery operator on variable allowing to switch value between iterations
   currentPlayer = currentPlayer === player1 ? player2 : player1;
   opponent = currentPlayer === player1 ? player2 : player1;
   // notify player of turn. ask player to guess row (gameBoard[?]) and column (gameBoard[][?])
   alert(`${currentPlayer.name}, it's your turn!`);
   let guessRow = prompt(`Guess a row! Here are your previous guesses: ${currentPlayer.guesses.join('; ')}`);
   let guessColumn = prompt(`Guess a column! Here are your previous guesses: ${currentPlayer.guesses.join('; ')}`);
   currentPlayer.guesses.push(`${[guessRow]},${[guessColumn]}`);
   // checks gameboard using player guess. if 2-d array element value at guessed indeces is 1; 
   if(opponent.gameBoard[guessRow][guessColumn] === 1){
     // reduce ship count
     opponent.shipCount -= 1;
     // sink the ship
     opponent.gameBoard[guessRow][guessColumn] = 0;
     // notify the player of their successful hit. notify the player of remaining opponent ships 
     alert(`HIT ONE of ${opponent.name}'s ships!!!! ${opponent.name}'s remaining ships: ${opponent.shipCount}`);
   } else {
     // if not === 1, there is no ship. notify of miss and continue to loop.
     alert('MISS');
   }
 }
 // how to declare the winner of the game
 if (player1.shipCount === 0) {
   return `The winner is ${player2.name}!`;
 } else if (player2.shipCount === 0) {
   return `The winner is ${player1.name}!`;
 }
}

const gameResult = battleship();

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult








// here are my notes first

//## Step 1: Create Players. 

//Create your player objects. get your player names first. 

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
// create player 2's board


// begin the game
// switch turns





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
