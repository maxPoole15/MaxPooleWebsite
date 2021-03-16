/* 
1. variables for player health/enemy health
2. variables for card and card stats (attack, name, styling)
3. add event listeners to butotns
    -have only play game working at first 
    -have attack and enemy turn buttons working
4. display variables that allow us to change the page
5. game logic
*/
document.getElementsByClassName

//Game Logic Variables
var playerHealth  = 50;
var enemyHealth = 50;
var gameInfo = "Play by clicking buttons";
var cards[];
var playerCards = [
    []
];
var enemyCards = [
    [1,2]
];


function setUpCardBank(){
    for (var i = 0; i < cardsBankLength; i++){
        var cardStats = getRandomStat();
        cardStats.push(getRandomName());
        cardStats.push(getRandomColor())
        if (i < cardsBankLength/2 ){
            playerCards.push(cardStats);
        }
        else {
            enemyCards.push(cardStats);
        }
    }
}

function getRandomStat() {
    var ret = [];
    var attack = parseInt(Math.random() * 6 + 4);
    var defense = parseInt(Math.random() * 8 + 6);
    ret.push(attack);
    ret.push(defense);
    return ret;
}


function getRandomName() {
    var vowels = "aeiouy";
    var consanance = "qwrtpsdfghjklzxcvbnm";
    var length = parseInt(Math.Random * 4 + 4);
    var ret = ""
    if (length % 2 == 0){
        ret += vowels.charAt(parseInt(Math.random() * consanance.length));
    }
    for (var i = 0; i < length; i++) {
        ret += consanance.charAt(parseInt(Math.random() * consanance.length));
        ret += vowels.charAt(parseInt(Math.random() * vowles.length));
    }

    return ret;
}


function initializeStartingCards(){

    //Get a list of all the cards damage in play
    var cardsDamage = document.getElementsByClassName("card-attack")
    var cardsHealth = document.getElementsByClassName("card-defense")
    var cardName = document.getElementsByClassName("card-name")
    var cards = document.getElementsByClassName("card");

    for(var i = 0; i < 3; i++){
        //Set the attack of the enemy
        cardsDamage[i].innerHTML = "Attack: " + enemyCards[i][0];
        //set the defense
        cardsHealth[i].innerHTML = "Defense: " + enemyCards[i][1];
        //set the name
        cardName[i].innerHTML = enemyCards[i][2];

        cards[i].style.backgroundColor = enemyCards[i][3];
    }
    
}


function getRandomColor(){
    var colorLetters = "0123456789abcdefg";
    var ret = "#";
    for (var i = 0; i < 6; i++){
        ret += colorLetters.charAt(parseInt(Math.random() * colorLetters.length));
    }
}


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

    setUpCardBank();
    initializeStartingCards();
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

