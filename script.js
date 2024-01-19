

  let currentQuestion = 0;
  let userAnswers = [];

  const questionContainer = document.getElementById("fieldset");
  const optionsContainer = document.getElementById("label");
  const resultContainer = document.getElementById("submit");

  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionContainer.textContent = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = option;
      input.id = "option" + index;

      const label = document.createElement("label");
      label.textContent = option;
      label.setAttribute("for", "option" + index);

      optionsContainer.appendChild(input);
      optionsContainer.appendChild(label);
    });
  }

  function checkAnswer() {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      userAnswers.push(userAnswer);

      if (userAnswer === quizData[currentQuestion].correctAnswer) {
        resultContainer.textContent = "Correct!";
      } else {
        resultContainer.textContent =
          "Wrong! The correct answer is: " +
          quizData[currentQuestion].correctAnswer;
      }

      selectedOption.checked = false;
      currentQuestion++; // Move to the next question
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResults();
      }
    } else {
      resultContainer.textContent = "Please select an option.";
    }
  }

  function showResults() {
    questionContainer.textContent = "";
    optionsContainer.textContent = "";

    const resultHeading = document.createElement("h2");
    resultHeading.textContent = "Quiz Results";

    const resultList = document.createElement("ul");

    quizData.forEach((quiz, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Question ${index + 1}: ${
        userAnswers[index] === quiz.correctAnswer ? "Correct" : "Wrong"
      }`;
      resultList.appendChild(listItem);
    });

    resultContainer.appendChild(resultHeading);
    resultContainer.appendChild(resultList);
  }

  // Initial load
  loadQuestion();
});
