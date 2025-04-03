document.addEventListener("DOMContentLoaded", function () {
  const easyBtn = document.querySelector(".easy-btn");
  const mediumBtn = document.querySelector(".medium-btn");
  const hardBtn = document.querySelector(".hard-btn");

  easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove(`selected`);
    hardBtn.classList.remove(`selected`);
  });

  mediumBtn.addEventListener("click", function () {
    mediumBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove(`selected`);
  });

  hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
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
