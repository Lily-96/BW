document.addEventListener("DOMContentLoaded", function () {
  /*  Dati del test */
  const totalQuestions = 10;
  const correctAnswers = 5;
  const wrongAnswers = totalQuestions - correctAnswers;

  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const wrongPercentage = 100 - correctPercentage;

  /* Animazione iniziale del contenitore */
  function showContainer() {
    document.getElementById("container").style.opacity = "1";
    document.getElementById("container").style.transform = "translateY(0)";
  }
  /*  Funzione per mostrare il risultato del test */
  function showTestResult() {
    const resultElement = document.getElementsByClassName("respose");
    const PASS_THRESHOLD = 60;

    if (correctPercentage >= PASS_THRESHOLD) {
      resultElement.textContent = "Congratulations! You passed the test!";
    } else {
      resultElement.textContent = "Sorry, you didn't pass. Try again!";
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
          labels: ["Correct", "Wrong"],
          datasets: [
            {
              data: [correctPercentage, wrongPercentage],
              backgroundColor: ["#00f2ff", "#e6007a"],
              hoverBackgroundColor: ["#00c2cc", "#b3005f"],
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
});
