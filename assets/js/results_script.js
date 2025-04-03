document.addEventListener("DOMContentLoaded", function () {
  const length = localStorage.getItem(`length`);
  console.log(length);

  const finalScore = localStorage.getItem(`finalScore`);
  console.log(finalScore);

  /*  Dati del test */
  const totalQuestions = parseInt(length);
  const correctAnswers = parseInt(finalScore);
  const wrongAnswers = totalQuestions - correctAnswers;

  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const wrongPercentage = 100 - correctPercentage;
  const PASS_THRESHOLD = 60;

  const rateUs = document.querySelector(".rateUs");

  /* Animazione iniziale del contenitore */
  function showContainer() {
    document.getElementById("container").style.opacity = "1";
    document.getElementById("container").style.transform = "translateY(0)";
  }
  /*  Funzione per mostrare il risultato del test */
  function showTestResult() {
    const resultElement = document.querySelector(".response");

    if (correctPercentage >= PASS_THRESHOLD) {
      resultElement.innerHTML = `
      <h5>Congratulation!</h5>
      <h6>You passed the exam.</h6>
      <p>We'll send you the certificate in few minutes. Check your email (includingpromotions / spam folder) </p>`;
    } else {
      resultElement.innerHTML = `
      <h6>Test Failed.</h6>
      <h5>Go study again!</h5>`;
    }
  }

  /*Animazione del conteggio dei numeri percentuali */
  function animateNumber(elementId, targetValue, duration) {
    let startValue = 0;
    const increment = targetValue / (duration / 16);
    const element = document.getElementById(elementId);

    function updateNumber() {
      startValue += increment;
      if (startValue >= targetValue) {
        element.innerText = targetValue.toFixed(1) + "%";
      } else {
        element.innerText = startValue.toFixed(1) + "%";
        requestAnimationFrame(updateNumber);
      }
    }
    updateNumber();
  }

  /*  Animazione per mostrare il testo */
  function animateText() {
    animateNumber("correct-percentage", correctPercentage, 1000);
    animateNumber("wrong-percentage", wrongPercentage, 1000);

    setTimeout(() => {
      document.getElementById("correct-answers").innerText = `${correctAnswers}/${totalQuestions} questions`;
      document.getElementById("wrong-answers").innerText = `${wrongAnswers}/${totalQuestions} questions`;
      document.getElementById("results").style.opacity = "1";

      /* Mostra il risultato del test dopo le altre animazioni */
      showTestResult();
    }, 1000);
  }

  /* Creazione del grafico con Chart */
  function createChart() {
    const ctx = document.getElementById("resultChart").getContext("2d");

    setTimeout(() => {
      document.getElementById("resultChart").style.opacity = "1";
      document.getElementById("resultChart").style.transform = "scale(1)";

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Wrong", "Correct"],
          datasets: [
            {
              data: [wrongPercentage, correctPercentage],
              backgroundColor: ["#e6007a", "#00f2ff"],
              hoverBackgroundColor: ["#b3005f", "#00c2cc"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: {
            legend: {
              display: false,
            },
          },
          animation: {
            animateRotate: true,
            animateScale: true,
          },
        },
      });

      animateText();
    }, 500);
  }

  /* Avviare tutto */
  showContainer();
  createChart();
  rateUs.addEventListener("click", function () {
    window.location.href = "index.feedbackpage.html";
  });
});
