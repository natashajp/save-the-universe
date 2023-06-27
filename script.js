const player = {
    name: "USS Assembly",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attackEnemy() {
      if (player.hull <= 0) {
        console.log("Game over")
      } else if (alien6.hull <= 0) {
        console.log("You win!")
      }
        else if (Math.random() < player.accuracy) {
        console.log("Attack successful!");
        alienFleet[0].hull -= player.firepower;
        console.log(player.name, player.hull);
        console.log(alienFleet[0].name, alienFleet[0].hull)
      } else {
        console.log("Attack unsucessful");
        console.log(player.name, player.hull);
        console.log(alienFleet[0].name, alienFleet[0].hull);
      }
    }
  }
  
  class Enemy {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = Math.floor(Math.random() * 4) + 3;
      this.firepower = Math.floor(Math.random() * 3) + 2;
      this.accuracy = this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attackPlayer() {
      if (alienFleet[0].hull <=0) {
        console.log("Ship destroyed!");
        alienFleet.shift();
      } else if (Math.random() < Enemy.accuracy) {
        console.log("You've been hit!");
        console.log(player.name, player.hull);
        console.log(alienFleet[0].name, alienFleet[0].hull);
      } else {
        console.log("Enemy shot missed!");
        console.log(player.name, player.hull);
        console.log(alienFleet[0].name, alienFleet[0].hull);
      }
    }
  }
  
  let btnEl = document.getElementById("button");


  const pressToFire = function() {
    player.attackEnemy()
  }

  const leaveToFire = function() {
    alienFleet[0].attackPlayer()
  }


  btnEl.addEventListener("click", pressToFire);
  btnEl.addEventListener("mouseleave", leaveToFire);

  let alienFleet = []
  
  const alien1 = new Enemy("Alien 1")
  const alien2 = new Enemy("Alien 2")
  const alien3 = new Enemy("Alien 3")
  const alien4 = new Enemy("Alien 4")
  const alien5 = new Enemy("Alien 5")
  const alien6 = new Enemy("Alien 6")
  
  alienFleet.push(alien1, alien2, alien3, alien4, alien5, alien6)