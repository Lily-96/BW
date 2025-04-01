const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "What does CPU",
    question_bold: "stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "In the programming language Java, which of these keywords would you",
    question_bold: "put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question_not_bold: "The logo for Snapchat",
    question_bold: "is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question_not_bold: "Pointers were not used in the original C programming language; they were added later on in C++.",
    question_bold: "they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "What is the most preferred image format",
    question_bold: "used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "In web design, what does",
    question_bold: "CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "What is the code name for the mobile",
    question_bold: "operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "On Twitter, what is the character",
    question_bold: "limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question_not_bold: "Linux was first created as an",
    question_bold: "alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question_not_bold: "Which programming language shares its name",
    question_bold: "with an island in Indonesia?",
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
const boldTitle = document.getElementById(`bold-text`);

let generalScore = 0;
let questionNumber = 0;

const buttons = [btn1, btn2, btn3, btn4];

const allQuestions = () => {
  if (questionNumber >= questions.length) {
    console.log("Quiz completato!");
    return;
  }

  const question = questions[questionNumber];

  notBoldTitle.innerText = question.question_not_bold;
  boldTitle.innerText = question.question_bold;

  let shuffledAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  buttons.forEach((btn, index) => {
    btn.innerText = shuffledAnswers[index];

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
        allQuestions();
      }, 1000);
    };
  });
};

allQuestions();
