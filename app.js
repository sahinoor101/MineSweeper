const boxes = document.querySelectorAll(".box");
console.log(boxes);
let arrOfBomb = [];

function clicked(el) {
  console.log(el.id);
  let x = Number(el.id);
  console.log(arrOfBomb);
  if (el.classList.contains("bomb")) {
    revealBombs();
    el.classList.add("open");
    document.querySelector("h2").textContent = "You Lost ";
    return;
  } else {
    el.classList.add("open");
    land(x);
  }
}
function revealBombs() {
  for (let i = 0; i < 500; i++) {
    boxes[i].classList.remove("bomb");
  }
}
function land(x) {
  let c = 0;
  if (x == 480) {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 19].classList.add("open");
    }
  } else if (x == 499) {
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 21].classList.add("open");
    }
  } else if (x == 0) {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 20].classList.add("open");
    }
    if (boxes[x + 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 21].classList.add("open");
    }
  } else if (x == 19) {
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x + 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 19].classList.add("open");
    }
  } else if ((x + 1) % 20 == 0) {
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 20].classList.add("open");
    }
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 21].classList.add("open");
    }
    if (boxes[x + 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 19].classList.add("open");
    }
  } else if (x % 20 == 0) {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 20].classList.add("open");
    }
    if (boxes[x + 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 21].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 19].classList.add("open");
    }
  } else if (x < 20) {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 20].classList.add("open");
    }
    if (boxes[x + 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 21].classList.add("open");
    }
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x + 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 19].classList.add("open");
    }
  } else if (x > 480) {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 21].classList.add("open");
    }
    if (boxes[x - 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 19].classList.add("open");
    }
  } else {
    if (boxes[x + 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 1].classList.add("open");
    }
    if (boxes[x + 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 20].classList.add("open");
    }
    if (boxes[x + 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 21].classList.add("open");
    }
    if (boxes[x - 1].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 1].classList.add("open");
    }
    if (boxes[x - 20].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 20].classList.add("open");
    }
    if (boxes[x - 21].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 21].classList.add("open");
    }
    if (boxes[x + 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x + 19].classList.add("open");
    }
    if (boxes[x - 19].classList.contains("bomb")) {
      c++;
    } else {
      boxes[x - 19].classList.add("open");
    }
  }
  if (!c == 0) {
    boxes[x].textContent = c;
  }
}

function bombs() {
  let c = 0;
  while (c < 100) {
    let rand = Math.floor(Math.random() * 500);
    console.log(rand);
    let i = 0;
    if (!boxes[rand].classList.contains("bomb")) {
      c++;
      boxes[rand].classList.add("bomb");
      boxes[rand].innerHTML = `<img src="bomb2.png">`;
      arrOfBomb[i] = rand;
      i++;
    }
  }
}
bombs();
