const boxes = document.querySelectorAll(".boxes");
let get_player1_img = sessionStorage.getItem("player1_img");
let get_player2_img = sessionStorage.getItem("player2_img");
let get_player1Name = sessionStorage.getItem("player1Name");
let get_player2Name = sessionStorage.getItem("player2Name");
const player1Name = document.querySelector("#player1 h2");
const player2Name = document.querySelector("#player2 h2");
const player1_img = document.querySelector("#player1_img");
const player2_img = document.querySelector("#player2_img");
let data = ["", "", "", "", "", "", "", "", ""];
let turn = true;
let winner = false;
const win_stuation = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

player1Name.innerText = `${get_player1Name} ( O )`;
player2Name.innerText = `${get_player2Name} ( X )`;
player1_img.src = `../images/${get_player1_img}.jpg`;
player2_img.src = `../images/${get_player2_img}.jpg`;

function update() {
  for (let i = 0; i <= 8; i++) {
    let box = window.document.querySelector(`#box${i} p`);
    box.innerText = data[i];
  }
}

function check_winner() {
  for (i of win_stuation) {
    let value_1 = data[i[0]],
      value_2 = data[i[1]],
      value_3 = data[i[2]];
    if (value_1 == value_2 && value_2 == value_3 && value_3 != "") {
      winner = true;
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    console.log(box.id[3]);
    if (turn) {
      data[box.id[3]] = "O";
      turn = false;
    } else {
      data[box.id[3]] = "X";
      turn = true;
    }
    let p_of_box = document.querySelector(`#${box.id} p`);
    p_of_box.style.animation = "show_value 0.1s linear 0s 1 normal";
    box.disabled = true;
    update();
    check_winner();
    if (winner) {
      boxes.forEach((box) => {
        box.disabled = true;
      });
    }
  });
});
