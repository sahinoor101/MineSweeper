const boxes = document.querySelectorAll(".box");
let coordinates = [];
let score = 20;
let bomb = [];
for (i = 0; i < 100; i++) {
  coordinates[i] = boxes[i].id;
  bomb[i] = -1;
}
console.log(coordinates);
function clicked(el) {
  let id = el.id;

  if (document.querySelector(".flag").classList.contains("flagON")) {
    console.log("ADD flag");
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).classList.add("show");
    document.getElementById(id).innerHTML = `<img src="flag.svg" alt=""></img>`;
    let index = coordinates.indexOf(id);
    if (bomb[index] == 1) {
      document.querySelector(
        ".score"
      ).innerHTML = `${--score} ${" "}  <img src="bomb.webp">`;
    }
  } else {
    document.getElementById(id).style.backgroundColor = "brown";
    let index = coordinates.indexOf(id);
    if (bomb[index] == 1) {
      revealAll();
      document.querySelector(".score").innerHTML = "Game over";
    } else {
      bomb[index] = 0;
      console.log(bomb);
      land(id);
    }
  }
}
function revealAll() {
  for (i = 0; i < 100; i++) {
    if (bomb[i] == 1) {
      document.getElementById(coordinates[i]).classList.add("show");
    }
  }
}
function Randombombs() {
  let c = 0;
  while (c < 20) {
    let rand = Math.floor(Math.random() * 100);
    console.log(rand);
    if (!boxes[rand].classList.contains("bomb")) {
      c++;
      bomb[rand] = 1;
      boxes[rand].classList.add("bomb");
      boxes[rand].innerHTML = `<img src="bomb.webp">`;
    }
  }
}
Randombombs();
console.log(bomb);
function flag() {
  console.log("flag on");
  document.querySelector(".flag").classList.add("flagON");
}
function clearPath() {
  console.log("flag off");
  document.querySelector(".flag").classList.remove("flagON");
}

function land(x) {
  console.log(x);
  let index = coordinates.indexOf(x);
  console.log(coordinates[index].substring(0, 1));
  console.log(coordinates[index].substring(1));
  
  // document.getElementById();
}
function isValid(x) {
  if (x <= 0) {
    return false;
  } else if (x > 99) {
    return false;
  }
}
