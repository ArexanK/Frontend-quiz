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

// results

function submitAnswer(nextPage) {
  const selectedAnswer = document.querySelector(
    'input[name="response"]:checked'
  );

  if (selectedAnswer) {
    // Save the user's response to local storage
    const currentQuestionNumber = getCurrentQuestionNumber();
    localStorage.setItem(
      `response_question${currentQuestionNumber}`,
      selectedAnswer.value
    );

    // Check if this is the last question
    const isLastQuestion = currentQuestionNumber === "16"; // Adjust this to the total number of questions

    if (isLastQuestion) {
      // Redirect to the results page
      window.location.href = "results.html";
    } else {
      // Redirect to the next question page
      window.location.href = nextPage;
    }
  } else {
    // Display an alert if the user hasn't selected an answer
    alert("Selecteer een antwoord voordat je naar de volgende vraag gaat.");
  }
}

// Call the function when the page loads
displayResults();
