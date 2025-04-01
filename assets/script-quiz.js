const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
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

const buttons = [btn1, btn2, btn3, btn4];

const allQuestions = () => {
  if (questionNumber >= questions.length) {
    // window.location.href = "";
  }

  const question = questions[questionNumber];

  notBoldTitle.innerText = question.question;

  let shuffledMultipleAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
  let shuffledBooleanAnswers = ["true", "false"].sort(() => Math.random() - 0.5);

  if (question.type === "multiple") {
    buttons.forEach((btn, index) => {
      btn.innerText = shuffledMultipleAnswers[index];

      btn.onclick = () => {
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
    buttons.forEach((btn, index) => {
      btn.innerText = shuffledBooleanAnswers[index];

      btn.onclick = () => {
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

    btn1.style.margin = "60px";
    btn2.style.margin = "60px";
    btn3.style.display = "none";
    btn4.style.display = "none";
  }
};

allQuestions();
