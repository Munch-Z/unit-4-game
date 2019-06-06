//HTMLStuff

let playNow = document.getElementById("playNow");
let fightBtn = document.getElementById("fightBtn");
let playerAttackHTML = document.getElementById("playerAttack");
let playerHealthHTML = document.getElementById("playerHP");
let counterAttackHTML = document.getElementById("computerCounterAttack");

//fighting objects

let peas = {
    name : "peas",
    attack : 5,
    health : 100,
    counterAttack : 10
};
let broccoli = {
    name : "broccoli",
    attack : 5,
    health : 100,
    counterAttack : 10
};
let dragonfruit = {
    name : "dragonfruit",
    attack : 5,
    health : 100,
    counterAttack : 10
};
let carrots = {
    name : "carrots",
    attack : 5,
    health : 100,
    counterAttack : 10
};
let tomato = {
    name : "tomato",
    attack : 5,
    health : 100,
    counterAttack : 10
};

//fight values
let defeatedEnemies = 0;
let newAttack = 0;

function resetGame() {
    
    //resetsObjects
    peas.name = "Peas";
    peas.attack = 5;
    peas.health = 150;
    peas.counterAttack = 10;

    broccoli.name = "Peas";
    broccoli.attack = 5;
    broccoli.health = 100;
    broccoli.counterAttack = 10;

    dragonfruit.name = "Peas";
    dragonfruit.attack = 5;
    dragonfruit.health = 100;
    dragonfruit.counterAttack = 10;

    carrots.name = "Peas";
    carrots.attack = 5;
    carrots.health = 100;
    carrots.counterAttack = 10;

    tomato.name = "Peas";
    tomato.attack = 5;
    tomato.health = 100;
    tomato.counterAttack = 10;

    //resets Attack Value
    newAttack = 0;
    defeatedEnemies = 0;

     $("#playNow").show();
}

resetGame();

console.log(peas.health);

$("#fightBtn").click(function(player, computer) {
    //increments playerAttack
    newAttack += player.attack;
    player.health -= computer.counterAttack;

    //deducts attack from computer HP
    if (newAttack > player.attack) {
        computer.health -= newAttack;
    } else {
        computer.health -= peas.attack;
    }

    if (computer.health <= 0) {
        defeatedEnemies++
    }
    if (defeatedEnemies >= 4) {
        alert("You won!");
        resetGame();
    }
});

$(".imgStyles").click(function (event) {
    if ($("#playerDiv:contains('img')")) {
        $(event.currentTarget).appendTo("#computerDiv");
        console.log("sucess");
    } else {
        $(event.currentTarget).appendTo("#playerDiv"); 
    }
})

