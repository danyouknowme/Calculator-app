const btn = Array.from(document.querySelectorAll(".theme-btn"));

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

btn.map((item, index) => {
  item.addEventListener("click", () => {
    console.log(item, index);
    switchTheme(index);
    console.log(item, index);
  });
});