document.addEventListener("DOMContentLoaded", function () {
  const easyBtn = document.querySelector(".easy-btn");
  const mediumBtn = document.querySelector(".medium-btn");
  const hardBtn = document.querySelector(".hard-btn");
  const length10 = document.querySelector(".length-btn10");
  const length20 = document.querySelector(".length-btn20");
  const length30 = document.querySelector(".length-btn30");
  const change = document.querySelector(".change");

  change.innerText = "0-5 minutes.";

  easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove(`selected`);
    hardBtn.classList.remove(`selected`);
    localStorage.setItem(`difficulty`, `easy`);
  });

  mediumBtn.addEventListener("click", function () {
    mediumBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove(`selected`);
    localStorage.setItem(`difficulty`, `medium`);
  });

  hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    localStorage.setItem(`difficulty`, `hard`);
  });

  length10.addEventListener("click", function () {
    length10.classList.add("selected2");
    length20.classList.remove("selected2");
    length30.classList.remove("selected2");
    localStorage.setItem(`length`, 10);
    change.innerText = "0-5 minutes.";
  });
  length20.addEventListener("click", function () {
    length20.classList.add("selected2");
    length10.classList.remove("selected2");
    length30.classList.remove("selected2");
    localStorage.setItem(`length`, 20);
    change.innerText = "10-15 minutes.";
  });
  length30.addEventListener("click", function () {
    length30.classList.add("selected2");
    length10.classList.remove("selected2");
    length20.classList.remove("selected2");
    localStorage.setItem(`length`, 30);
    change.innerText = "15-20 minutes.";
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
          checkBox.checked = false;
        };
      }
    });
  };
  proceed();
});
