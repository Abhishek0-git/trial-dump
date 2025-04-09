const input = document.querySelector("#input");
const boxes = document.querySelectorAll(".boxes");

console.log(input);
console.log(boxes);
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operator = ["/", "%", "x", "+", "-"];
let array = [];

function input_to_array(val) {
  let a = "";

  for (i of val) {
    if (i in numbers) {
      a += i;
    } else if (i == ".") {
      a += i;
    } else if (operator.includes(i)) {
      array.push(typeof a == "string" ? parseFloat(a) : parseInt(a));
      array.push(i);
      a = "";
    }
  }
  array.push(typeof a == "string" ? parseFloat(a) : parseInt(a));
  console.log(array);
}

function calculate(arr) {
  let result = null;

  operator.forEach((op) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == op) {
        let index = i;
        let left = arr[index - 1];
        let right = arr[index + 1];

        if (op == "/") {
          result = left / right;
          arr.splice(index - 1, 3, result);
          console.log(arr);
        } else if (op == "x") {
          result = left * right;
          arr.splice(index - 1, 3, result);
          console.log(arr);
        } else if (op == "+") {
          result = left + right;
          arr.splice(index - 1, 3, result);
          console.log(arr);
        } else if (op == "-") {
          result = left - right;
          arr.splice(index - 1, 3, result);
          console.log(arr);
        } else if (op == "%") {
          result = left % right;
          arr.splice(index - 1, 3, result);
          console.log(arr);
        }
        i--;
      }
    }
  });

  console.log("result", result);
  result = Math.round(result*100) / 100;
  result == 0 ? (input.value = null) : (input.value = result);
  array = [];
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText == "=") {
      array = [];
      input_to_array(input.value);
      calculate(array);
    } else if (box.innerText == "C") {
      input.value = input.value.slice(0, -1);
      console.log("C click");
    } else if (box.innerText == "AC") {
      input.value = "";
      array = [];
    } else if (box.innerText == "root") {
      input.value += box.innerText;
    } else {
      input.value += box.innerText;
    }
  });
});
