let joan = new Warrior("Joan", 10, 50);
let leon = new Warrior("Leon", 8, 60);
let antoine = new WarriorAxe("Antoine", 5, 50);
let mathis = new WarriorSword("Mathis", 5, 50);
let seb = new WarriorSpear("Sebastien", 5, 50);

// Combat entre Antoine et Mathis

while (antoine.isAlive(mathis)==true && mathis.isAlive(antoine)==true) {
    antoine.attack(mathis);
    mathis.attack(antoine);
    if(antoine.isAlive(mathis)==false && mathis.isAlive(antoine)==false){
        console.log("It's a draw");
    }
    else if (antoine.isAlive(mathis)==false){
        console.log(antoine.name+" wins.");
    }
    else if (mathis.isAlive(antoine)==false){
        console.log(mathis.name+" wins.")
    }
}