function checkAnswers() {
  let correctCount = 0;
  let incorrectCount = 0;
  const form = document.getElementById("quizForm");

  // Loop through each question
  form.querySelectorAll("fieldset").forEach((fieldset, index) => {
    const selectedAnswer = fieldset.querySelector(
      'input[type="radio"]:checked'
    );
    if (selectedAnswer) {
      if (selectedAnswer.dataset.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  });

  // Display the results
  alert(
    `Correct Answers: ${correctCount}\nIncorrect Answers: ${incorrectCount}`
  );
}
