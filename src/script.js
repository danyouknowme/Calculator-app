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

const sendNumberValue = (number) => {
  // Replace current display value if first value is enterd
  if (awaitNextVal) {
    display.textContent = number;
    awaitNextVal = false;
  } else {
    // If current display value is 0, replace it, if not add number
    const displayValue = display.textContent;
    display.textContent = displayValue === "0" ? number : displayValue + number;
    // Add comma to the number
    const displayVal = display.textContent.split(",").join("");
    display.textContent = (Math.round(displayVal * 100) / 100).toLocaleString()
  }
}

const addDecimal = () => {
  // If operator press, don't add decimal
  if (awaitNextVal) return;
  // If no decimal add 1
  !display.textContent.includes(".") && (display.textContent = `${display.textContent}.`);
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
    btn.addEventListener("click", () => addDecimal());
  } else if (btn.classList.contains("del-button")) {
    btn.addEventListener("click", () => console.log(btn, "del-button"));
  } else {
    btn.addEventListener("click", () => sendNumberValue(btn.value));
  }
})

clearBtn.addEventListener("click", resetAll);
