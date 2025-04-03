const difficulty = localStorage.getItem(`difficulty`);
console.log(difficulty);

const questionContainer = document.getElementById(`questions-container`);
const buttonClass = document.getElementsByClassName(`question-btn`);
const btn1 = document.querySelector(`.btn1`);
const btn2 = document.querySelector(`.btn2`);
const btn3 = document.querySelector(`.btn3`);
const btn4 = document.querySelector(`.btn4`);
const notBoldTitle = document.querySelector(`h1`);
const spanScore = document.querySelector(`.score`);

let generalScore = 0;
let questionNumber = 0;
let timeLeft; // Variabile globale per il tempo rimanente
let timerInterval; // Salva l'intervallo per fermare il timer se necessario

const buttons = [btn1, btn2, btn3, btn4];

let typeQuestions = [];

if (difficulty === `easy`) {
  typeQuestions = easyQuestions;
  console.log(typeQuestions);
} else if (difficulty === `medium`) {
  typeQuestions = mediumQuestions;
  console.log(typeQuestions);
} else if (difficulty === `hard`) {
  typeQuestions = hardQuestions;
  console.log(typeQuestions);
} else {
  typeQuestions = easyQuestions;
}

const allQuestions = () => {
  if (questionNumber >= typeQuestions.length) {
    window.location.href = "QUIZ-App_Requirements.html"; // Quando le domande finiscono, puoi fare qualcosa, come ricaricare la pagina.
    return;
  }
  const typeQuestion = typeQuestions[questionNumber];

  notBoldTitle.innerText = typeQuestion.question;

  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
  btn3.style.display = "inline-block";
  btn4.style.display = "inline-block";

  let shuffledMultipleAnswers = [...typeQuestion.incorrect_answers, typeQuestion.correct_answer].sort(() => Math.random() - 0.5);

  if (typeQuestion.type === "multiple") {
    buttons.forEach((btn, index) => {
      btn.innerText = shuffledMultipleAnswers[index];
      btn.classList.add(`hover`);

      buttons.forEach((b) => (b.disabled = false));

      btn.onclick = () => {
        btn.classList.remove(`hover`);
        buttons.forEach((b) => (b.disabled = true));

        if (btn.innerText === typeQuestion.correct_answer) {
          generalScore++;
          btn.classList.add("correct-answer");
          console.log("Risposta corretta! Score:", generalScore);
        } else {
          btn.classList.add("wrong-answer");
          console.log("Risposta sbagliata! Score:", generalScore);
        }

        setTimeout(() => {
          btn.classList.remove("correct-answer", "wrong-answer");
          questionNumber++;
          spanScore.innerText = questionNumber + 1;
          allQuestions();
        }, 1000);
      };
    });
  } else if (typeQuestion.type === "boolean") {
    buttons.forEach((btn) => {
      btn.classList.add(`hover`);
      buttons.forEach((b) => (b.disabled = false));

      if (typeQuestion.correct_answer === `True`) {
        btn1.innerText = typeQuestion.correct_answer;
        btn2.innerText = typeQuestion.incorrect_answers;
      } else if (typeQuestion.incorrect_answers === `True`) {
        btn1.innerText = typeQuestion.incorrect_answers;
        btn2.innerText = typeQuestion.correct_answer;
      }

      btn.onclick = () => {
        btn.classList.remove(`hover`);
        buttons.forEach((b) => (b.disabled = true));

        if (btn.innerText === typeQuestion.correct_answer) {
          generalScore++;
          btn.classList.add("correct-answer");
          console.log("Risposta corretta! Score:", generalScore);
        } else {
          btn.classList.add("wrong-answer");
          console.log("Risposta sbagliata! Score:", generalScore);
        }

        setTimeout(() => {
          btn.classList.remove("correct-answer", "wrong-answer");
          questionNumber++;
          spanScore.innerText = questionNumber + 1;
          allQuestions();
        }, 1000);
      };
    });

    btn3.style.display = "none";
    btn4.style.display = "none";
  }
  updateTimer(); // Avvia il timer per la domanda corrente
};

function updateTimer() {
  const totalTime = 40; // Tempo totale in secondi
  timeLeft = totalTime; // Tempo rimanente
  const circle = document.querySelector(".circle");
  const timerText = document.getElementById("timer");

  // Calcola la circonferenza del cerchio
  const circumference = 2 * Math.PI * 70;

  // Imposta il valore iniziale di stroke-dasharray
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = 0;

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  function update() {
    if (timeLeft <= 0) {
      timerText.textContent = "0";
      circle.style.strokeDashoffset = circumference;

      questionNumber++; // Aumenta il numero della domanda
      spanScore.innerText = questionNumber + 1; // Aggiorna il punteggio
      console.log("Tempo scaduto! Score:", generalScore);
      allQuestions(); // Vai alla prossima domanda

      return;
    }

    // Aggiorna il testo del timer
    timerText.textContent = timeLeft;

    // Calcola il nuovo offset (in senso antiorario)
    const offset = ((totalTime - timeLeft) / totalTime) * circumference;
    circle.style.strokeDashoffset = -offset;

    // Decrementa il tempo rimanente
    timeLeft--;

    // Continua l'aggiornamento ogni 1000ms (1 secondo)
  }

  // Avvia il timer usando setInterval (questo sostituisce setTimeout ricorsivo)
  timerInterval = setInterval(update, 1000);
  update();
}
allQuestions(); // Avvia il quiz con la prima domanda
