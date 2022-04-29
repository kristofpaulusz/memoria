window.addEventListener("load", init);


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
    let txt= "";
  let srcs = [];
  for (let index = 0; index < 20; index++) {
    srcs.push("kepek/kep" + (index + 1) + ".jpg");
    srcs.push("kepek/kep" + (index + 1) + ".jpg");
  }
  srcs = shuffle(srcs);
  console.log(srcs);
  
  for (let index = 0; index < 40; index++) {
    txt += '<div class="'+"card"+'" id="'+index+'"><div class="front"><img src="kepek/hatter.jpg" alt=""></div><div class="back"><img src="'+srcs[index]+'" alt=""></div></div>'
  }
  document.getElementById("board").innerHTML = txt;
  
  
  
  return txt;
}
function toggle() {
    this.classList.toggle("flipCard")
}
function forditas() {
    for (let index = 0; index < 40; index++) {
        ID(index).addEventListener("click", toggle)
    }
}
function init() {
    kepek();
    forditas();
}
