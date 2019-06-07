//HTMLStuff

let playNow = document.getElementById("playNow");
let fightBtn = document.getElementById("fightBtn");
let playerAttackHTML = document.getElementById("playerAttack");
let playerHealthHTML = document.getElementById("playerHP");
let counterAttackHTML = document.getElementById("computerCounterAttack");
let computerHealthHTML = document.getElementById("computerHealth");

class Controller {

    constructor() {
      this.newAttack = 0;
      this.defeatedEnemies = 0;
      this.peas = {
        name: "peas",
        attack : 5,
        health : 100,
        counterAttack : 10,
      };
      this.broccoli = {
        name : "broccoli",
        attack : 5,
        health : 100,
        counterAttack : 10,
      };
      this.dragonfruit = {
        name : "dragonfruit",
        attack : 5,
        health : 100,
        counterAttack : 10,
      };
      this.carrots = {
        name : "carrots",
        attack : 5,
        health : 100,
        counterAttack : 10
      };
      this.tomato = {
        name : "tomato",
        attack : 5,
        health : 100,
        counterAttack : 10,
      };

    }
  
    battleFunction(player, computer) {
      //increments playerAttack
      this.newAttack += this[player].attack;
      this[player].health -= this[computer].counterAttack;
  
      //deducts attack from computer HP
      if (this.newAttack > this[player].attack) {
        this[computer].health -= this.newAttack;
        console.log(this[computer].health);
      } else {
        this[computer].health -= this[player].attack;
        console.log(this[computer].health);
      }
  
      if (this[computer].health <= 0) {
        this.defeatedEnemies++
      }
      if (this.defeatedEnemies >= 4) {
        alert("You won!");
        //resetGame();
      }
    };
  
}
  
  const ctrl = new Controller();
  $("#fightBtn").click(() => {
    ctrl.battleFunction($("#playerDiv").children("img").attr("id"), $("#computerDiv").children("img").attr("id"));
  });




//fighting objects

// let peas = {
//     name : "peas",
//     attack : 5,
//     health : 100,
//     counterAttack : 10,
//     enemy : false
// };
// let broccoli = {
//     name : "broccoli",
//     attack : 5,
//     health : 100,
//     counterAttack : 10,
//     enemy : false
// };
// let dragonfruit = {
//     name : "dragonfruit",
//     attack : 5,
//     health : 100,
//     counterAttack : 10,
//     enemy : false
// };
// let carrots = {
//     name : "carrots",
//     attack : 5,
//     health : 100,
//     counterAttack : 10
// };
// let tomato = {
//     name : "tomato",
//     attack : 5,
//     health : 100,
//     counterAttack : 10,
//     enemy : false
// };


// //
// let playerSelected;
// let computerSelected;

// //fight values
// let defeatedEnemies = 0;
// let newAttack = 0;

// function resetGame() {
    
//     //resetsObjects
//     peas.name = "Peas";
//     peas.attack = 5;
//     peas.health = 150;
//     peas.counterAttack = 10;
//     peas.enemy = false;

//     broccoli.name = "Peas";
//     broccoli.attack = 5;
//     broccoli.health = 100;
//     broccoli.counterAttack = 10;
//     broccoli.enemy = false;

//     dragonfruit.name = "Peas";
//     dragonfruit.attack = 5;
//     dragonfruit.health = 100;
//     dragonfruit.counterAttack = 10;
//     dragonfruit.enemy = false;

//     carrots.name = "Peas";
//     carrots.attack = 5;
//     carrots.health = 100;
//     carrots.counterAttack = 10;
//     carrots.enemy = false;

//     tomato.name = "Peas";
//     tomato.attack = 5;
//     tomato.health = 100;
//     tomato.counterAttack = 10;
//     tomato.enemy = false;

//     //resets Attack Value
//     newAttack = 0;
//     defeatedEnemies = 0;

//      $("#playNow").show();
// }

// $("#fightBtn").click( () => {
//     console.log($("#playerDiv").children("img").attr("id"));
//     console.log($("#computerDiv").children("img").attr("id")); 
//     battleFunction(eval($("#playerDiv").children("img").attr("id")), eval($("#computerDiv").children("img").attr("id")));
// });
    
    
//  function battleFunction(player, computer) {
//     //increments playerAttack
//     newAttack += player.attack;
//     player.health -= computer.counterAttack;

//     //deducts attack from computer HP
//     if (newAttack > player.attack) {
//         computer.health -= newAttack;
//         if (computer.health <= 0) {
//             defeatedEnemies++;
//         }

//     } else {
//         computer.health -= player.attack;
//     }

//     playerAttackHTML.textContent = "Attack Power: " + newAttack;
//     playerHealthHTML.textContent = "Health Points: " + player.health;

//     counterAttackHTML.textContent = "Counter Attack Power: " + computer.counterAttack;
//     computerHealthHTML.textContent = "Health Points: " + computer.health;

//     if (defeatedEnemies >= 4) {
//         alert("You won!");
//         resetGame();
//         console.log(computer.health);
//     }
// };

//puts images in their respective sides of the screen on click
$(".imgStyles").click(function (event) {

    if ($("#playerDiv").find('img').length == 1 && $("#computerDiv").find('img').length === 0) {
        computerSelected = event.target.id;
        $(event.currentTarget).appendTo("#computerDiv");
        counterAttackHTML.textContent = "Counter Attack Power: " + eval(computerSelected).counterAttack;
        computerHealthHTML.textContent = "Health Points: " + eval(computerSelected).health;

    } else if ($("#playerDiv").find('img').length == 0) {
        $(event.currentTarget).appendTo("#playerDiv");
        playerSelected = event.target.id;
        playerAttackHTML.textContent = "Attack Power: " + eval(playerSelected).attack;
        playerHealthHTML.textContent = "Health Points: " + eval(playerSelected).health;
    }
});

