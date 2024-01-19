// function checkAnswers() {
//   let correctCount = 0;
//   let incorrectCount = 0;
//   const form = document.getElementById("quizForm");

//   // Loop through each question
//   form.querySelectorAll("fieldset").forEach((fieldset, index) => {
//     const selectedAnswer = fieldset.querySelector(
//       'input[type="radio"]:checked'
//     );
//     if (selectedAnswer) {
//       if (selectedAnswer.dataset.correctAnswer) {
//         correctCount++;
//       } else {
//         incorrectCount++;
//       }
//     }
//   });

//   // Display the results
//   alert(
//     `Correct Answers: ${correctCount}\nIncorrect Answers: ${incorrectCount}`
//   );
// }

// let currentQuestion = 1;

// function nextQuestion() {
//   const currentFieldset = document.querySelector(
//     `.question[data-question="${currentQuestion}"]`
//   );
//   currentFieldset.style.display = "none";

//   currentQuestion++;

//   const nextFieldset = document.querySelector(
//     `.question[data-question="${currentQuestion}"]`
//   );
//   if (nextFieldset) {
//     nextFieldset.style.display = "block";
//   } else {
//     // If there are no more questions, hide the "Volgende vraag" button
//     document.querySelector("button").style.display = "none";
//   }
// }

// function checkAnswers() {
//   // Your existing logic to check answers and display results goes here
//   alert("Checking answers...");
// }

//quiz

// quiz.js

function submitAnswer(nextQuestion) {
  const selectedOption = document.querySelector(
    'input[name="response"]:checked'
  );
  const response = selectedOption ? selectedOption.value : "";
  localStorage.setItem(`response_${getCurrentQuestionNumber()}`, response);
  window.location.href = nextQuestion;
}

function getCurrentQuestionNumber() {
  // Extract the question number from the current page URL
  const match = window.location.pathname.match(/question(\d+)\.html/);
  return match ? match[1] : "";
}

//results
function displayResults() {
  const resultsContainer = document.getElementById("results");
  let correctCount = 0;
  let incorrectCount = 0;

  // Check each question's response
  for (let i = 1; i <= N; i++) {
    const correctAnswer = localStorage.getItem(`response_question${i}`) === "C";
    const resultMessage = `Question ${i}: ${
      correctAnswer ? "Correct" : "Incorrect"
    }`;

    if (correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    resultsContainer.innerHTML += `<p>${resultMessage}</p>`;
  }

  resultsContainer.innerHTML += `<p>Total Correct: ${correctCount}</p>`;
  resultsContainer.innerHTML += `<p>Total Incorrect: ${incorrectCount}</p>`;
}

// Call the function when the page loads
displayResults();
