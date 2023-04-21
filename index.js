const suits = ["Club", "Diamond", "Heart", "Spade"];
const ranks = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Sex",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

class Game {
  players = [];
  player1maxCard = 0;
  player2maxCard = 0;
  playerMaxCard = [0, 0];

  //function to register user
  register = (name) => {
    this.players.push(name);
  };

  //function to shuffle cards
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  //function to find score of a card
  findScore = (num) => {
    var suit = Math.floor(num / 13);
    var rank = (num % 13) - 1;
    if (rank == -1) {
      suit--;
      rank = 12;
    }
    return rank * 4 + suit;
  };

  //function to find card name from card number
  findCardName(num) {
    var suit = Math.floor(num / 13);
    var rank = (num % 13) - 1;
    if (rank == -1) {
      suit--;
      rank = 12;
    }

    console.log(num, suit, rank);
    return suits[suit] + "-" + ranks[rank];
  }

  //function to distribute cards to players
  play = () => {
    var cards = [];
    for (var i = 0; i < 52; i++) cards.push(i + 1);
    console.log(cards);
    cards = this.shuffle(cards);
    console.log(cards);

    var player1 = 0;
    var player2 = 0;
    for (var i = 0; i < 6; i++) {
      var imgEl = document.getElementById(`card${i + 1}`);
      console.log(imgEl.src);
      imgEl.src = `./cardImg/${cards[i]}.png`;
      if (i < 3) {
        if (player1 < this.findScore(cards[i])) {
          player1 = this.findScore(cards[i]);
          this.playerMaxCard[0] = cards[i];
        }
      } else {
        if (player2 < this.findScore(cards[i])) {
          player2 = this.findScore(cards[i]);
          this.playerMaxCard[1] = cards[i];
        }
      }
    }
  };

  //function to show highest card
  showHighestCard = (player) => {
    var imgEl = document.getElementById(`player${player}maxCard`);
    imgEl.src = `./cardImg/${this.playerMaxCard[player - 1]}.png`;
    imgEl.style.display = "block";
    return this.playerMaxCard[player - 1];
  };

  //function to declare winner
  decideWinner = () => {
    if (
      this.findScore(this.playerMaxCard[0]) >
      this.findScore(this.playerMaxCard[1])
    ) {
      var name = document
        .getElementById("player1Name")
        .innerHTML.toString()
        .substring(5);
      document.getElementById("winner").innerHTML = `Winner is ${name} !!!`;
    } else {
      var name = document
        .getElementById("player2Name")
        .innerHTML.toString()
        .substring(5);
      document.getElementById("winner").innerHTML = `Winner is ${name} !!!`;
    }
  };
}

var btn1pressed = false;
var btn2pressed = false;

//initialised game
var game = new Game();

//shuffle cards
game.play();

//additional functionalities
document.getElementById("btn1").addEventListener("click", () => {
  if (!cnt1 || !cnt2 || !cnt3) {
    alert("Flip all cards!");
    return;
  }
  btn1pressed = true;
  document.getElementById("player1hcName").innerHTML = game.findCardName(
    game.showHighestCard(1)
  );

  document.getElementById("player1hcScore").innerHTML = game.findScore(
    game.showHighestCard(1)
  );
});
document.getElementById("btn2").addEventListener("click", () => {
  if (!cnt4 || !cnt5 || !cnt6) {
    alert("Flip all cards!");
    return;
  }
  btn2pressed = true;
  document.getElementById("player2hcName").innerHTML = game.findCardName(
    game.showHighestCard(2)
  );

  document.getElementById("player2hcScore").innerHTML = game.findScore(
    game.showHighestCard(2)
  );
});
document.getElementById("decideWinnerBtn").addEventListener("click", () => {
  if (!btn1pressed || !btn2pressed) {
    alert("Show Both Players' highest cards");
    return;
  }
  game.decideWinner();
});

var cnt1 = false,
  cnt2 = false,
  cnt3 = false,
  cnt4 = false,
  cnt5 = false,
  cnt6 = false;
document.getElementById("flipcard1").addEventListener("click", () => {
  document.getElementById("flipcardinner1").style.transform = "rotateY(180deg)";
  cnt1 = true;
  console.log("chl rha hai??");
});
document.getElementById("flipcard2").addEventListener("click", () => {
  document.getElementById("flipcardinner2").style.transform = "rotateY(180deg)";
  cnt2 = true;
  console.log("chl rha hai??");
});
document.getElementById("flipcard3").addEventListener("click", () => {
  document.getElementById("flipcardinner3").style.transform = "rotateY(180deg)";
  cnt3 = true;
  console.log("chl rha hai??");
});
document.getElementById("flipcard4").addEventListener("click", () => {
  document.getElementById("flipcardinner4").style.transform = "rotateY(180deg)";
  cnt4 = true;
  console.log("chl rha hai??");
});
document.getElementById("flipcard5").addEventListener("click", () => {
  document.getElementById("flipcardinner5").style.transform = "rotateY(180deg)";
  cnt5 = true;
  console.log("chl rha hai??");
});
document.getElementById("flipcard6").addEventListener("click", () => {
  document.getElementById("flipcardinner6").style.transform = "rotateY(180deg)";
  cnt6 = true;
  console.log("chl rha hai??");
});
