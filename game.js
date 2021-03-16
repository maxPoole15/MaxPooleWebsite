/* 
1. variables for player health/enemy health
2. variables for card and card stats (attack, name, styling)
3. add event listeners to butotns
    -have only play game working at first 
    -have attack and enemy turn buttons working
4. display variables that allow us to change the page
5. game logic
*/

//Game Logic Variables
var playerHealth  = 50;
var enemyHealth = 50;
var gameInfo = "Play by clicking buttons";
var cards = [[]];


//Display Variables
var gameInfoDisplay = document.getElementById("info");
var playerHealthDisplay = document.getElementById("playerHealth");
var enemyHealthDisplay = document.getElementById("enemyHealth");

//event variables 
var playerTurnButton = document.getElementById("attackButton");
playerTurnButton.onclick = function(){
    playerTurn()
};

var enemyTurnButton = document.getElementById("enemyButton");
enemyTurnButton.onclick = function(){
    enemyTurn()
};

var startGameButton = document.getElementById("startButton")
startGameButton.onclick = function(){
    startGame()
};





function playerTurn(){
    if (!gameOver()){
        enemyHealth -= 10;
        updateDisplay();
        gameOver();
    } 
}

function enemyTurn(){
    if (!gameOver()){
        playerHealth -= 10;
        updateDisplay();
        gameOver();
    } 
}

function startGame(){
    playerTurnButton.removeAttribute("disabled");
    enemyTurnButton.removeAttribute("disabled");
}

function updateDisplay(){
    playerHealthDisplay.innerHTML = "player Health = " + playerHealth;
    enemyHealthDisplay.innerHTML = "enemy Health = " + enemyHealth;
}


function gameOver(){
    if (playerHealth <= 0){

        gameInfoDisplay.innerHTML = "You have lost :("
        return true;
    }
    else if (enemyHealth <=0){

        gameInfoDisplay.innerHTML = "You have won!"
        return true;
    }
    return false;
}

