/* document.addEventListener("DOMContentLoaded", function () {
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
}); */

document.addEventListener("DOMContentLoaded", function () {
  const difficultyButtons = document.querySelectorAll(`.difficulties-container label`); // select all difficulties
  const lengthButtons = document.querySelectorAll(`.question-length label`); // select all questions length
  const changeTxt = document.querySelector(`.change`); // minutes text of the test above difficulties
  const proceedBtn = document.querySelector(`.proceed-btn`);
  const checkBox = document.getElementById(`checkbox`);

  // Default values
  const defaultDifficulty = `easy`;
  const defaultLength = 10;

  // Time display map
  const timeMap = {
    10: `0-5 minutes.`,
    20: `10-15 minutes.`,
    30: `15-20 minutes.`
  };

  // Clear localStorage and set to defaults on each page load
  localStorage.removeItem(`difficulty`);
  localStorage.removeItem(`length`);

  // Set the default values in localStorage
  localStorage.setItem(`difficulty`, defaultDifficulty);
  localStorage.setItem(`length`, defaultLength);

  // Set default display time
  changeTxt.innerText = timeMap[defaultLength];

  // Event listener for difficulty buttons
  difficultyButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      difficultyButtons.forEach((btn) => btn.classList.remove(`selected`));
      button.classList.add(`selected`);
      const selectedDifficulty = button.querySelector(`input`).value;
      localStorage.setItem(`difficulty`, selectedDifficulty); // save the selected difficulty value

      console.log(selectedDifficulty);
    });
  });

  // Event listener for length buttons
  lengthButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      lengthButtons.forEach((btn) => btn.classList.remove(`selected2`));
      button.classList.add(`selected2`);

      const selectedLength = button.querySelector(`input`).value;
      localStorage.setItem(`length`, selectedLength); // save the selected length value
      changeTxt.innerText = timeMap[selectedLength]; // changes the minutes text if different length is selected

      console.log(selectedLength);
    });
  });

  // Event listener for checkbox
  checkBox.addEventListener(`change`, () => {
    proceedBtn.disabled = !checkBox.checked;
    proceedBtn.style.cursor = checkBox.checked ? `pointer` : `not-allowed`;
    if (checkBox.checked) {
      proceedBtn.classList.add(`enabled`);
    } else {
      proceedBtn.classList.remove(`enabled`);
    }
  });

  // Event listener for proceed button
  proceedBtn.addEventListener(`click`, () => {
    if (checkBox.checked) {
      window.location.href = `quiz.html`;
    }
  });
});
