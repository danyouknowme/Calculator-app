const btn = Array.from(document.querySelectorAll(".theme-btn"));
const display = document.querySelector("h1");
const clearBtn = document.getElementById("clear-btn");

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
  display.innerHTML = '0';
}

btn.map((item, index) => {
  item.addEventListener("click", () => {
    switchTheme(index);
  });
});

clearBtn.addEventListener("click", resetAll);
