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
      bomb[index]=2;
      document.querySelector(".score").innerHTML = `${--score} ${" "}  <img src="bomb.webp">`;
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
  document.querySelector(".flag").classList.add("selected");
  document.querySelector(".open").classList.remove("selected");
}
function clearPath() {
  console.log("flag off");
  document.querySelector(".flag").classList.remove("flagON");
  document.querySelector(".open").classList.add("selected");
  document.querySelector(".flag").classList.remove("selected");
} 

function land(center) {
  let index = coordinates.indexOf(center);
  let x = Number(coordinates[index].substring(0, 1));
  let y = Number(coordinates[index].substring(1));
  let arrX = [x + 1, x - 1, x, x, x - 1, x + 1, x + 1, x - 1];
  let arrY = [y, y, y - 1, y + 1, y + 1, y + 1, y - 1, y - 1];
  console.log(arrX);
  console.log(arrY);
  let id;
  let el;
  let count = 0;
  for (i = 0; i < 8; i++) {
    id = `${arrX[i]}${arrY[i]}`;
    console.log(id);
    if (isValid(id)) {
      if (bomb[coordinates.indexOf(id)] == 0) {
      } else {
        el = document.getElementById(id);
        if (!el.classList.contains("bomb")) {
          el.style.backgroundColor = "brown";
          bomb[coordinates.indexOf(id)] = 0;
          land(id);
          if (score == 0) {
            document.querySelector(".score").innerHTML = "You Won!";

            return;
          }
        } else {
          count++;
        }
      }
    }
  }
  if (count != 0) {
    document.getElementById(center).textContent = count;
  }
  bomb[index] = count;
}
function isValid(x) {
  if (x.length > 2) {
    return false;
  }
  let _x = Number(x);
  if (_x <= 0) {
    return false;
  } else if (_x > 99) {
    return false;
  }
  return true;
}
