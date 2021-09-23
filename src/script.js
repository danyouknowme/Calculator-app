const themeBtn = Array.from(document.querySelectorAll(".theme-btn"));
const display = document.querySelector("h1");
const clearBtn = document.getElementById("clear-btn");
const button = document.querySelectorAll(".button");

const calculate = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "=": (num1, num2) => num1,
}

let firstVal = 0;
let operatorValue = "";
let awaitNextVal = false;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const sendNumberValue = (number) => {
  if (awaitNextVal) {
    display.textContent = number;
    awaitNextVal = false;
  } else {
    const displayValue = display.textContent;
    display.textContent = displayValue === "0" ? number : displayValue + number;
    const displayVal = display.textContent.split(",").join("");
    display.textContent = (Math.round(displayVal * 100) / 100).toLocaleString()
  }
}

const switchTheme = (index) => {
  switch (index) {
    case 0:
      document.documentElement.setAttribute('data-theme', 'first-theme');
      break;
    case 1:
      document.documentElement.setAttribute('data-theme', 'second-theme');
      break;
    case 2:
      document.documentElement.setAttribute('data-theme', 'third-theme');
      break;
  }
}

const resetAll = () => {
  display.textContent = '0';
}

themeBtn.map((item, index) => {
  item.addEventListener("click", () => {
    switchTheme(index);
  });
});

button.forEach(btn => {
  if (btn.classList.contains("operator")) {
    btn.addEventListener("click", () => console.log(btn, "operator"));
  } else if (btn.classList.contains("decimal")) {
    btn.addEventListener("click", () => console.log(btn, "decimal"));
  } else if (btn.classList.contains("del-button")) {
    btn.addEventListener("click", () => console.log(btn, "del-button"));
  } else {
    btn.addEventListener("click", () => sendNumberValue(btn.value));
  }
})

clearBtn.addEventListener("click", resetAll);
