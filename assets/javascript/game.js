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
     attack : 50,
     health : 200,
     counterAttack : 50,
  },
  "broccoli": {
    attack : 40,
    health : 210,
    counterAttack : 40,
  },
  "dragonfruit": {
    attack : 30,
    health : 290,
    counterAttack : 30,
  },
  "carrots": {
    attack : 10,
    health : 400,
    counterAttack : 10,
  },
  "tomato": {
    attack : 20,
    health : 340,
    counterAttack : 20,
    
  }
};

let defeatedEnemies = 0;
let newAttack = 0;
let gameRunning = false;



function resetGame() {
    //removes remaining images
  $("#imgsDiv").children("img").detach();
  $("#playerDiv").children("img").detach();
  $("#computerDiv").children("img").detach();

    //resetsObjects
    chars["peas"].attack = 50;
    chars["peas"].health = 200;
    chars["peas"].counterAttack = 50;

    
    chars["broccoli"].attack = 40;
    chars["broccoli"].health = 210;
    chars["broccoli"].counterAttack = 40;

    
    chars["dragonfruit"].attack = 30;
    chars["dragonfruit"].health = 290;
    chars["dragonfruit"].counterAttack = 30;

    
    chars["carrots"].attack = 10;
    chars["carrots"].health = 400;
    chars["carrots"].counterAttack = 10;

    
    chars["tomato"].attack = 20;
    chars["tomato"].health = 340;
    chars["tomato"].counterAttack = 20;

    //resets Attack Value
    newAttack = 0;
    defeatedEnemies = 0;

     $("#playNow").show();

     //re-adds images to top div
     $('#imgsDiv').html('<img src="assets/images/peas.jpeg" id="peas" class="imgStyles" alt="peas"><img src="assets/images/broccoli.jpeg" id="broccoli" class="imgStyles" alt="broccoli"> <img src="assets/images/dragonfruit.jpeg" id="dragonfruit" class="imgStyles" alt="dragonfruit"> <img src="assets/images/carrots.jpeg" id="carrots" class="imgStyles" alt="carrots"> <img src="assets/images/tomato.jpeg" id="tomato" class="imgStyles" alt="tomato">');
     
     //resets text areas
     playerAttackHTML.textContent = "";
     playerHealthHTML.textContent = "";
     counterAttackHTML.textContent = "";
     computerHealthHTML.textContent = "";
     $("#alertSpace").text('');
     $("#computerAlertSpace").text('');
     $("#alertHeader").text('');

     gameRunning = false;
}

$("#playNow").on("click", () => {
  gameRunning = true;
  $("#fightBtn").show();
  $("#alertHeader").text('Pick your VEGETABLE (or Dragonfruit, if you\'re into that sort of thing.)');
  $("#playNow").hide();
  console.log(gameRunning);
})

$("#fightBtn").hide();

$("#fightBtn").click( () => {
    battleFunction($("#playerDiv").children("img").attr("id"), $("#computerDiv").children("img").attr("id"));
});
    
    
 function battleFunction(player, computer) {
    
  //increments playerAttack
    newAttack += chars[player].attack;
    chars[player].health -= chars[computer].counterAttack;

    $("#computerCounterAttack").text("Counter Attack Power: " + chars[computer].counterAttack);
    $("#computerHealth").text("Health Points: " + chars[computer].health);


    //deducts attack from computer HP
    if (newAttack > chars[player].attack) {
        chars[computer].health -= newAttack;
        $("#playerAttack").text("Attack Power: " + (newAttack + chars[player].attack));
        if (chars[computer].health <= 0) {
            defeatedEnemies++;
            $("#computerCounterAttack").text("");
            $("#computerHealth").text("");
            $("#computerDiv").children("img").detach();   
        }

    } else {
        chars[computer].health -= chars[player].attack;
    }

    //updates HTML with stats real-time.
    $("#playerHP").text("Health Points: " + chars[player].health);

    $("#alertSpace").html(player.toUpperCase() + ' did ' + newAttack + ' damage to ' + computer.toUpperCase() + '<br>' + computer.toUpperCase() + ' did ' + chars[computer].counterAttack + ' damage to ' + player.toUpperCase());
    
    
    //win condition
    setTimeout(() => {
      console.log('I happened')
      if (defeatedEnemies >= 4) {
        alert("You won!");
        $("#playerDiv").children("img").detach();
        $("#fightBtn").hide()
        resetGame();
      }}, 100);

    setTimeout(() => {
      console.log('No it was me.')
      if (chars[player].health <= 0) {
        alert("You lost!");
        resetGame();
        $("#fightBtn").hide()

      }
     }, 100);
};

//puts images in their respective sides of the screen on click



  $("#imgsDiv").on('click', ".imgStyles", function (event) {
    
    if (gameRunning){
      
      if ($("#playerDiv").find('img').length == 1 && $("#computerDiv").find('img[data-value=active]:visible').length === 0) {
        computerSelected = event.target.id;
        $("#alertHeader").text('FIGHT!');
        $(event.currentTarget).attr("data-value", "active").prependTo("#computerDiv");
        counterAttackHTML.textContent = "Counter Attack Power: " + chars[computerSelected].counterAttack;
        computerHealthHTML.textContent = "Health Points: " + chars[computerSelected].health;

      } else if ($("#playerDiv").find('img').length == 0) {
        $(event.currentTarget).attr("data-value", "active").appendTo("#playerDiv");
        $("#alertHeader").text('Pick your opponent!');
        playerSelected = event.target.id;
        playerAttackHTML.textContent = "Attack Power: " + chars[playerSelected].attack;
        playerHealthHTML.textContent = "Health Points: " + chars[playerSelected].health;
      }
    }
});

