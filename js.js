window.addEventListener("load", init);

class Card {
  constructor(id, src, isFlipped) {
    this.id = id;
    this.src = src;
    this.isFlipped = isFlipped;
  }
}

let objects = [];

let FlippedCards = [];

function ID(elem) {
  return document.getElementById(elem);
}

// Ez a függvény egy plagizáció
function shuffle(array) {
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

function kepek() {
  let txt = "";
  let srcs = [];
  for (let index = 0; index < 20; index++) {
    srcs.push("kepek/kep" + (index + 1) + ".jpg");
    srcs.push("kepek/kep" + (index + 1) + ".jpg");
  }
  srcs = shuffle(srcs);

  for (let index = 0; index < 40; index++) {
    objects.push(new Card(index, srcs[index], false));
    txt +=
      '<div class="' +
      "card" +
      '" id="' +
      index +
      '"><div class="front"><img src="kepek/hatter.jpg" alt=""></div><div class="back"><img src="' +
      srcs[index] +
      '" alt=""></div></div>';
  }
  document.getElementById("board").innerHTML = txt;
}

function isThereAWin() {
  let mindenOke = true;
  let index = 0;
  while (mindenOke && index < 40) {
    if (!objects[index].isFlipped) {
      mindenOke = false;
    }
    index += 1;
  }
  return mindenOke;
}
function toggle() {
  objects[this.id].isFlipped = true;
  FlippedCards.push(objects[this.id]);
  this.classList.toggle("flipCard");
  this.removeEventListener("click", toggle);
  if (FlippedCards.length == 2) {
    if (FlippedCards[0].src == FlippedCards[1].src) {
      FlippedCards = [];
    } else {
      FlippedCards.forEach((element) => {
        setTimeout(() => {
          ID(element.id).classList.toggle("flipCard");
          ID(element.id).addEventListener("click", toggle);
          objects[element.id].isFlipped = false;
        }, 700);
      });

      FlippedCards = [];
    }
  }
  if(isThereAWin()) {
    document.getElementById("title").innerHTML = "<h1><span>Na</span><span>gy</span><span>on </span><span>Sz</span><span>ép </span><span>Gy</span><span>őz</span><span>el</span><span>em!</span></h1>"
    let sizes = ["small", "smaller", "large", "larger"]
    let spans = document.querySelectorAll("h1 span")
    setInterval(() => {
      spans[Math.floor(Math.random()*spans.length)].style.color = "RGB("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
      spans[Math.floor(Math.random()*spans.length)].style.fontSize = sizes[Math.floor(Math.random()*sizes.length)];
      
    }, 200)
    
    
  };
}

function forditas() {
  for (let index = 0; index < 40; index++) {
    ID(index).addEventListener("click", toggle);
  }
}
function init() {
  kepek();
  forditas();
  
}
