//HTMLStuff

let playNow = document.getElementById("playNow");
let fightBtn = document.getElementById("fightBtn");
let playerAttackHTML = document.getElementById("playerAttack");
let playerHealthHTML = document.getElementById("playerHP");
let counterAttackHTML = document.getElementById("computerCounterAttack");
let computerHealthHTML = document.getElementById("computerHealth");

//fighting objects

let chars = {
"peas": {
     attack : 5,
     health : 100,
     counterAttack : 10,
  },
  "broccoli": {
    attack : 5,
    health : 100,
    counterAttack : 10,
  },
  "dragonfruit": {
    attack : 5,
    health : 100,
    counterAttack : 10,
  },
  "carrots": {
    attack : 5,
    health : 100,
    counterAttack : 10,
  },
  "tomato": {
    attack : 5,
    health : 100,
    counterAttack : 10,
  }
};

let defeatedEnemies = 0;
let newAttack = 0;

function resetGame() {
    
    //resetsObjects
    chars["peas"].attack = 5;
    chars["peas"].health = 150;
    chars["peas"].counterAttack = 10;

    
    chars["broccoli"].attack = 5;
    chars["broccoli"].health = 100;
    chars["broccoli"].counterAttack = 10;

    
    chars["dragonfruit"].attack = 5;
    chars["dragonfruit"].health = 100;
    chars["dragonfruit"].counterAttack = 10;

    
    chars["carrots"].attack = 5;
    chars["carrots"].health = 100;
    chars["carrots"].counterAttack = 10;

    
    chars["tomato"].attack = 5;
    chars["tomato"].health = 100;
    chars["tomato"].counterAttack = 10;

    //resets Attack Value
    newAttack = 0;
    defeatedEnemies = 0;

     $("#playNow").show();
     $('#imgsDiv').append('<img src="assets/images/peas.jpeg" id="peas" class="imgStyles" alt="peas">');
     $('#imgsDiv').append('<img src="assets/images/broccoli.jpeg" id="broccoli" class="imgStyles" alt="broccoli">');
     $('#imgsDiv').append('<img src="assets/images/dragonfruit.jpeg" id="dragonfruit" class="imgStyles" alt="dragonfruit">');
     $('#imgsDiv').append('<img src="assets/images/carrots.jpeg" id="carrots" class="imgStyles" alt="carrots">');
     $('#imgsDiv').append('<img src="assets/images/tomato.jpeg" id="tomato" class="imgStyles" alt="tomato">');
     console.log("I reset everything but you didn't update the HTML.");
}

$("#fightBtn").click( () => {
    battleFunction($("#playerDiv").children("img").attr("id"), $("#computerDiv").children("img").attr("id"));
});
    
    
 function battleFunction(player, computer) {
    //increments playerAttack
    newAttack += chars[player].attack;
    chars[player].health -= chars[computer].counterAttack;



    //deducts attack from computer HP
    if (newAttack > chars[player].attack) {
        chars[computer].health -= newAttack;
        if (chars[computer].health <= 0) {
            defeatedEnemies++;
            $("#computerDiv").children("img").detach();       
        }

    } else {
        chars[computer].health -= chars[player].attack;
    }

    //updates HTML with stats real-time.
    $("#playerAttack").text("Attack Power: " + newAttack);
    $("#playerHP").text("Health Points: " + chars[player].health);

    $("#computerCounterAttack").text("Counter Attack Power: " + chars[computer].counterAttack);
    $("#computerHealth").text("Health Points: " + chars[computer].health);
    
    //win condition
    if (defeatedEnemies >= 4) {
        alert("You won!");
        $("#playerDiv").children("img").detach();
        resetGame();
    }
};

//puts images in their respective sides of the screen on click
$(".imgStyles").click(function (event) {

    if ($("#playerDiv").find('img').length == 1 && $("#computerDiv").find('img').length === 0) {
        computerSelected = event.target.id;
        $(event.currentTarget).appendTo("#computerDiv");
        counterAttackHTML.textContent = "Counter Attack Power: " + chars[computerSelected].counterAttack;
        computerHealthHTML.textContent = "Health Points: " + chars[computerSelected].health;

    } else if ($("#playerDiv").find('img').length == 0) {
        $(event.currentTarget).appendTo("#playerDiv");
        playerSelected = event.target.id;
        playerAttackHTML.textContent = "Attack Power: " + chars[playerSelected].attack;
        playerHealthHTML.textContent = "Health Points: " + chars[playerSelected].health;
    }
});

