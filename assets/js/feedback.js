const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const selectedValue = parseInt(star.getAttribute("data-value"));

    stars.forEach((s) => {
      s.classList.remove("selected");
    });
    stars.forEach((s) => {
      if (parseInt(s.getAttribute("data-value")) <= selectedValue) {
        s.classList.add("selected");
      }
    });
    ratingValue.textContent = selectedValue;
  });
});

const starss = document.querySelectorAll(".star");
const ratingValuee = document.getElementById("rating-value");
const submitButton = document.getElementById("submit-feedback");
const commentInput = document.querySelector(".write input");
const selectedRatingText = document.getElementById("selected-rating");
let selectedRating = 0;

starss.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));

    starss.forEach((s) => {
      s.classList.remove("selected");
    });

    starss.forEach((s) => {
      if (parseInt(s.getAttribute("data-value")) <= selectedRating) {
        s.classList.add("selected");
      }
    });

    ratingValuee.textContent = selectedRating;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating > 0) {
    const comment = commentInput.value;

    alert(`Feedback inviato!\nPunteggio: ${selectedRating}\nComment: ${comment}`);
    selectedRating = 0;
    ratingValuee.textContent = 0;
    commentInput.value = "";
    starss.forEach((s) => s.classList.remove("selected"));
  } else {
    alert("Seleziona un punteggio prima di inviare il feedback.");
  }
});
