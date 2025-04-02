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
