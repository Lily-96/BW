document.addEventListener("DOMContentLoaded", function () {
  const easyBtn = document.querySelector(".easy-btn");
  const mediumBtn = document.querySelector(".medium-btn");
  const hardBtn = document.querySelector(".hard-btn");

  let whichButton = "";

  easyBtn.addEventListener("click", function () {
    whichButton = "easy";
    easyBtn.classList.add("selected");
    console.log("selezionato", easyBtn);
  });

  mediumBtn.addEventListener("click", function () {
    whichButton = "medium";
    mediumBtn.classList.add("selected");
  });

  hardBtn.addEventListener("click", function () {
    whichButton = "hard";
    hardBtn.classList.add("selected");
  });

  const proceed = () => {
    const checkBox = document.getElementById(`checkbox`);
    const button = document.querySelector(`.proceed-btn`);

    checkBox.addEventListener(`change`, function () {
      if (!checkBox.checked) {
        button.classList.remove(`enabled`);
        button.disabled = true;
        button.style.cursor = `not-allowed`;
      } else {
        button.classList.add(`enabled`);
        button.disabled = false;
        button.style.cursor = `pointer`;
        button.onclick = () => {
          window.location.href = `quiz.html`;
        };
      }
    });
  };
  proceed();
});
