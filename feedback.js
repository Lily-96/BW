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
