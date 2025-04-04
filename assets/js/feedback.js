const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const selectedValue = parseInt(star.getAttribute("data-value"));

    stars.forEach(s => {
      s.classList.remove("selected");
    });
    stars.forEach(s => {
      if (parseInt(s.getAttribute("data-value")) <= selectedValue) {
        s.classList.add("selected");
      }
    });
    ratingValue.textContent = selectedValue;
  });
});

const feedbackInput = document.querySelector(".write input");
const submitButton = document.getElementById("submit-button");
feedbackInput.maxLength = 100;
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    ratingValue.textContent = selectedRating;
  });
});

submitButton.addEventListener("click", () => {
  const feedbackComment = feedbackInput.value.trim();

  if (selectedRating === 0) {
    alert("Seleziona un punteggio da 0 a 10.");
    return;
  }
  alert(`Feedback inviato!\nPunteggio: ${selectedRating}\nCommento: ${feedbackComment}`);
  selectedRating = 0;
  ratingValue.textContent = "0";
  feedbackInput.value = "";
});
