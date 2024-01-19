// function submitAnswer(nextQuestion) {
//   const selectedOption = document.querySelector(
//     'input[name="response"]:checked'
//   );
//   const response = selectedOption ? selectedOption.value : "";
//   localStorage.setItem(`response_${getCurrentQuestionNumber()}`, response);
//   window.location.href = nextQuestion;
// }

// function getCurrentQuestionNumber() {
//   // Extract the question number from the current page URL
//   const match = window.location.pathname.match(/question(\d+)\.html/);
//   return match ? match[1] : "";
// }

// //results
// function displayResults() {
//   const resultsContainer = document.getElementById("results");
//   let correctCount = 0;
//   let incorrectCount = 0;

//   // Check each question's response
//   for (let i = 1; i <= N; i++) {
//     const correctAnswer = localStorage.getItem(`response_question${i}`) === "C";
//     const resultMessage = `Question ${i}: ${
//       correctAnswer ? "Correct" : "Incorrect"
//     }`;

//     if (correctAnswer) {
//       correctCount++;
//     } else {
//       incorrectCount++;
//     }

//     resultsContainer.innerHTML += `<p>${resultMessage}</p>`;
//   }

//   resultsContainer.innerHTML += `<p>Total Correct: ${correctCount}</p>`;
//   resultsContainer.innerHTML += `<p>Total Incorrect: ${incorrectCount}</p>`;
// }

// // Call the function when the page loads
// displayResults();

// //you can only go to the next question if its possible
// function submitAnswer(nextPage) {
//   const selectedAnswer = document.querySelector(
//     'input[name="response"]:checked'
//   );

//   if (selectedAnswer) {
//     // Save the user's response to local storage
//     localStorage.setItem("currentResponse", selectedAnswer.value);

//     // Redirect to the next question page
//     window.location.href = nextPage;
//   } else {
//     // Display an alert if the user hasn't selected an answer
//     alert("Selecteer een antwoord voordat je naar de volgende vraag gaat.");
//   }
// }

// // results

// function displayResults() {
//     const resultsContainer = document.getElementById("results");
//     const resultsMessageContainer = document.getElementById("resultsMessage");

//     let correctCount = 0;
//     let incorrectCount = 0;

//     // Assuming N is the total number of questions
//     const N = 10;

//     // Check each question's response
//     for (let i = 1; i <= N; i++) {
//       const correctAnswer = localStorage.getItem(`response_question${i}`) === "C";
//       const resultMessage = `Question ${i}: ${
//         correctAnswer ? "Correct" : "Incorrect"
//       }`;

//       if (correctAnswer) {
//         correctCount++;
//       } else {
//         incorrectCount++;
//       }

//       resultsContainer.innerHTML += `<p>${resultMessage}</p>`;
//     }

//     resultsMessageContainer.innerHTML += `<p>Total Correct: ${correctCount}</p>`;
//     resultsMessageContainer.innerHTML += `<p>Total Incorrect: ${incorrectCount}</p>`;
//   }

//   // Call the function when the page loads
//   displayResults();

//   //you can only go to the next question if it's possible
//   function submitAnswer(nextPage) {
//     const selectedAnswer = document.querySelector(
//       'input[name="response"]:checked'
//     );

//     if (selectedAnswer) {
//       // Save the user's response to local storage
//       localStorage.setItem("currentResponse", selectedAnswer.value);

//       // Redirect to the next question page
//       window.location.href = nextPage;
//     } else {
//       // Display an alert if the user hasn't selected an answer
//       alert("Selecteer een antwoord voordat je naar de volgende vraag gaat.");
//     }
//   }

// results

function submitAnswer(nextQuestion) {
  const selectedAnswer = document.querySelector(
    'input[name="response"]:checked'
  );

  if (selectedAnswer) {
    // Save the user's response to local storage
    localStorage.setItem("currentResponse", selectedAnswer.value);

    // Check if this is the last question
    const currentQuestionNumber = getCurrentQuestionNumber();
    const isLastQuestion = currentQuestionNumber === "16"; // Change '16' to the total number of questions

    if (isLastQuestion) {
      // Redirect to the results page
      window.location.href = "results.html";
    } else {
      // Redirect to the next question page
      window.location.href = nextQuestion;
    }
  } else {
    // Display an alert if the user hasn't selected an answer
    alert("Selecteer een antwoord voordat je naar de volgende vraag gaat.");
  }
}
