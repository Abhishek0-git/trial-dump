const img = document.querySelectorAll(".image");
const sidebar = document.querySelector("#sidebar");
const chars = document.querySelectorAll(".character");
const colse_sidebar = document.querySelector("#close_sidebar");
const player1_img = document.querySelector("#player1_img");
const player2_img = document.querySelector("#player2_img");
const problem_text = document.querySelector("#problem_text");
const submit = document.querySelector("#Submit");
const player1Name = document.querySelector("#player1Name");
const player2Name = document.querySelector("#player2Name");
let current_player;
let current_player1 = "modi";
let current_player2 = "char2";

img.forEach((player) => {
  player.addEventListener("click", () => {
    console.log("clicked");
    console.log(player.id);
    current_player = player.id;
    sidebar.style.left = "0";
    colse_sidebar.style.left = "125px";
    if (current_player == "player1_img") {
      player1_img.style.border = "black 4px solid";
      player2_img.style.border = "none";
    } else {
      player2_img.style.border = "black 4px solid";
      player1_img.style.border = "none";
    }
  });
});

chars.forEach((character) => {
  character.addEventListener("click", () => {
    console.log(character.id);
    console.log(current_player);
    if (current_player == "player1_img") {
      player1_img.src = character.src;
      current_player1 = character.id;
    } else {
      player2_img.src = character.src;
      current_player2 = character.id;
    }
  });
});

colse_sidebar.addEventListener("click", () => {
  sidebar.style.left = "-130px";
  colse_sidebar.style.left = "-40px";
});

submit.addEventListener("click", () => {
  console.log(`player1=${current_player1}, player2=${current_player2}`);
  if (current_player1 == current_player2) {
    problem_text.innerText = "* choose different characters for battle";
  } else if (player1Name.value == player2Name.value) {
    problem_text.innerText = "* nopp";
  } else if (player1Name.value == "" || player2Name.value == "") {
    problem_text.innerText = "* smart";
  } else {
    problem_text.innerText = "go ahead";
    window.location.href = "/trial-dump/tic_game/game/game.html";
    sessionStorage.setItem("player1_img", current_player1);
    sessionStorage.setItem("player2_img", current_player2);
    sessionStorage.setItem("player1Name", player1Name.value);
    sessionStorage.setItem("player2Name", player2Name.value);
  }
});

console.log(current_player);
console.log(`player1=${current_player1}, player2=${current_player2}`);
