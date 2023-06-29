let buttons = document.querySelectorAll(".sign");
let descriptions = document.querySelectorAll(".description");
let selected = -1;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (selected === index) {
      selected = -1;
      button.innerHTML = "+";
      descriptions[index].style.display = "none";
    } else {
      selected = index;
      buttons.forEach((btn) => (btn.innerHTML = "+"));
      descriptions.forEach(
        (description) => (description.style.display = "none")
      );
      button.innerHTML = "-";
      descriptions[index].style.display = "block";
    }
  });
});
