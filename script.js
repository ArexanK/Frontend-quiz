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
