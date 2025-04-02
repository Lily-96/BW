const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

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

const allQuestions = () => {
  if (questionNumber >= questions.length) {
    // window.location.href = ""; // Quando le domande finiscono, puoi fare qualcosa, come ricaricare la pagina.
    return;
  }

  const question = questions[questionNumber];

  notBoldTitle.innerText = question.question;

  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
  btn3.style.display = "inline-block";
  btn4.style.display = "inline-block";

  let shuffledMultipleAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  if (question.type === "multiple") {
    buttons.forEach((btn, index) => {
      btn.innerText = shuffledMultipleAnswers[index];
      btn.classList.add(`hover`);

      buttons.forEach((b) => (b.disabled = false));

      btn.onclick = () => {
        btn.classList.remove(`hover`);
        buttons.forEach((b) => (b.disabled = true));

        if (btn.innerText === question.correct_answer) {
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
  } else if (question.type === "boolean") {
    buttons.forEach((btn) => {
      btn.classList.add(`hover`);
      buttons.forEach((b) => (b.disabled = false));

      if (question.correct_answer === `True`) {
        btn1.innerText = question.correct_answer;
        btn2.innerText = question.incorrect_answers;
      } else if (question.incorrect_answers === `True`) {
        btn1.innerText = question.incorrect_answers;
        btn2.innerText = question.correct_answer;
      }

      btn.onclick = () => {
        btn.classList.remove(`hover`);
        buttons.forEach((b) => (b.disabled = true));

        if (btn.innerText === question.correct_answer) {
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
