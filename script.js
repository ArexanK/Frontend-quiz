document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "Wat is de rol van HTML, CSS en JavaScript in webontwikkeling?",
      options: [
        "A) HTML voor interactie, CSS voor structuur, JavaScript voor opmaak",
        "B) HTML voor structuur, CSS voor interactie, JavaScript voor opmaak",
        "C) HTML voor structuur, CSS voor opmaak, JavaScript voor interactie",
      ],
      correctAnswer:
        "C) HTML voor structuur, CSS voor opmaak, JavaScript voor interactie",
    },
    {
      question: "Leg het boxmodel in CSS uit.",
      options: [
        "A) Het beschrijft de wijze waarop elementen naast elkaar worden weergegeven.",
        "B) Het beschrijft hoe elementen op de pagina worden weergegeven met content, padding, border en margin.",
        "C) Het beschrijft de structuur van HTML-documenten.",
      ],
      correctAnswer:
        "B) Het beschrijft hoe elementen op de pagina worden weergegeven met content, padding, border en margin.",
    },
    {
      question:
        "Wat zijn de verschillen tussen inline- en block-level-elementen in HTML?",
      options: [
        "A) Inline-elementen beginnen een nieuwe regel, terwijl block-level-elementen naast elkaar worden weergegeven.",
        "B) Inline-elementen nemen de volledige breedte in, terwijl block-level-elementen een nieuwe regel beginnen.",
        "C) Inline-elementen worden naast elkaar weergegeven zonder een nieuwe regel te starten, terwijl block-level-elementen een nieuwe regel beginnen.",
      ],
      correctAnswer:
        "C) Inline-elementen worden naast elkaar weergegeven zonder een nieuwe regel te starten, terwijl block-level-elementen een nieuwe regel beginnen.",
    },
    {
      question: "Hoe werkt specificiteit in CSS en hoe wordt deze berekend?",
      options: [
        "A) Het wordt willekeurig bepaald op basis van het aantal regels in de stylesheet.",
        "B) Specificiteit bepaalt welke stijlregel wordt toegepast als er conflicterende regels zijn en wordt berekend op basis van het aantal ID's, klassen en elementselectoren.",
        "C) Specificiteit heeft geen invloed op de toepassing van stijlen.",
      ],
      correctAnswer:
        "B) Specificiteit bepaalt welke stijlregel wordt toegepast als er conflicterende regels zijn en wordt berekend op basis van het aantal ID's, klassen en elementselectoren.",
    },

    {
      question:
        "Beschrijf het doel en gebruik van media queries in responsive design.",
      options: [
        "A) Media queries worden gebruikt voor het definiëren van variabelen in CSS.",
        "B) Media queries worden gebruikt om de stijl van een webpagina aan te passen op basis van kenmerken zoals schermgrootte, resolutie en oriëntatie.",
        "C) Media queries worden gebruikt om JavaScript-bestanden op basis van het apparaattype te laden.",
      ],
      correctAnswer:
        "B) Media queries worden gebruikt om de stijl van een webpagina aan te passen op basis van kenmerken zoals schermgrootte, resolutie en oriëntatie.",
    },
    {
      question:
        "Leg het concept van cross-browsercompatibiliteit uit en hoe ga je hiermee om?",
      options: [
        "A) Cross-browsercompatibiliteit is niet nodig bij moderne webontwikkeling.",
        "B) Cross-browsercompatibiliteit verwijst naar de consistentie van de website-ervaring tussen verschillende webbrowsers, en het wordt aangepakt door code alleen voor één specifieke browser te optimaliseren.",
        "C) Cross-browsercompatibiliteit wordt aangepakt door code te testen op verschillende browsers en indien nodig specifieke oplossingen toe te passen.",
      ],
      correctAnswer:
        "C) Cross-browsercompatibiliteit wordt aangepakt door code te testen op verschillende browsers en indien nodig specifieke oplossingen toe te passen.",
    },

    {
      question:
        "Wat zijn webtoegankelijkheidsnormen en waarom zijn ze belangrijk?",
      options: [
        "A) Webtoegankelijkheidsnormen zijn slechts optionele richtlijnen.",
        "B) Webtoegankelijkheidsnormen zijn regels die websites verplichten om gebruiksvriendelijk te zijn voor mensen met verschillende beperkingen, en ze zijn belangrijk omdat ze zorgen voor een inclusieve online ervaring.",
        "C) Webtoegankelijkheidsnormen hebben geen invloed op de gebruikerservaring.",
      ],
      correctAnswer:
        "B) Webtoegankelijkheidsnormen zijn regels die websites verplichten om gebruiksvriendelijk te zijn voor mensen met verschillende beperkingen, en ze zijn belangrijk omdat ze zorgen voor een inclusieve online ervaring.",
    },
    {
      question: "Wat is het verschil tussen var, let en const in JavaScript?",
      options: [
        "A) Ze zijn allemaal hetzelfde in JavaScript.",
        "B) var wordt block-scoped, let en const zijn function-scoped.",
        "C) var kan opnieuw worden toegewezen, let en const niet.",
      ],
      correctAnswer: "C) var kan opnieuw worden toegewezen, let en const niet.",
    },
    {
      question: "Leg het concept van closures in JavaScript uit.",
      options: [
        "A) Closures treden op wanneer een functie toegang heeft tot variabelen binnen zijn eigen scope.",
        "B) Closures ontstaan wanneer een functie toegang heeft tot variabelen buiten zijn eigen scope en deze referenties behoudt, zelfs nadat de buitenste functie is voltooid.",
        "C) Closures hebben geen impact op de variabelen buiten hun scope.",
      ],
      correctAnswer:
        "B) Closures ontstaan wanneer een functie toegang heeft tot variabelen buiten zijn eigen scope en deze referenties behoudt, zelfs nadat de buitenste functie is voltooid.",
    },
    {
      question:
        "Hoe werkt asynchrone programmering in JavaScript? Bespreek callbacks, promises en async/await.",
      options: [
        "A) Callbacks worden niet gebruikt in asynchrone programmering.",
        "B) Asynchrone programmering maakt geen gebruik van promises en async/await.",
        "C) Callbacks, promises en async/await zijn allemaal mechanismen om asynchrone code te beheren.",
      ],
      correctAnswer:
        " C) Callbacks, promises en async/await zijn allemaal mechanismen om asynchrone code te beheren.",
    },
    {
      question:
        "Wat is de Virtual DOM en hoe optimaliseert het de prestaties in front-end frameworks zoals React?",
      options: [
        "A) De Virtual DOM is een concrete weergave van de DOM in het geheugen.",
        "B) De Virtual DOM optimaliseert prestaties door wijzigingen eerst in de werkelijke DOM aan te brengen.",
        "C) De Virtual DOM is een abstracte weergave van de DOM in het geheugen en optimaliseert prestaties door alleen de benodigde updates naar de werkelijke DOM te sturen.",
      ],
      correctAnswer:
        "C) De Virtual DOM is een abstracte weergave van de DOM in het geheugen en optimaliseert prestaties door alleen de benodigde updates naar de werkelijke DOM te sturen.",
    },
    {
      question: "Hoe werkt event delegation in JavaScript?",
      options: [
        "A) Event delegation betekent dat elke child zijn eigen eventhandler heeft.",
        "B) Event delegation betekent dat je één eventhandler plaatst op een gemeenschappelijke ouder, wat efficiënter is.",
        "C) Event delegation heeft geen invloed op de prestaties van de website.",
      ],
      correctAnswer:
        "B) Event delegation betekent dat je één eventhandler plaatst op een gemeenschappelijke ouder, wat efficiënter is.",
    },
    {
      question: "Definieer progressieve verbetering in webontwikkeling.",
      options: [
        "A) Progressieve verbetering is het verwijderen van functies om de website te optimaliseren.",
        "B) Progressieve verbetering is een benadering waarbij een basisfunctionaliteit wordt geboden aan alle gebruikers, met extra functionaliteit voor gebruikers met moderne browsers of apparaten.",
        "C) Progressieve verbetering is alleen relevant voor oudere browsers.",
      ],
      correctAnswer:
        "B) Event delegation betekent dat je één eventhandler plaatst op een gemeenschappelijke ouder, wat efficiënter is.",
    },
    {
      question:
        "Leg uit hoe je responsieve afbeeldingen implementeert met het <picture>-element en de srcset-eigenschap.",
      options: [
        "A) Het <picture>-element wordt niet gebruikt voor responsieve afbeeldingen.",
        "B) Het <picture>-element wordt gebruikt om verschillende afbeeldingsbronnen aan te bieden op basis van kenmerken zoals schermgrootte. De srcset-eigenschap bevat een lijst met afbeeldingen met hun resoluties.",
        "C) De srcset-eigenschap is niet nodig voor responsieve afbeeldingen.",
      ],
      correctAnswer:
        "B) Het <picture>-element wordt gebruikt om verschillende afbeeldingsbronnen aan te bieden op basis van kenmerken zoals schermgrootte. De srcset-eigenschap bevat een lijst met afbeeldingen met hun resoluties.",
    },
    {
      question:
        "Bespreek het belang van feature detection in progressieve verbetering. Hoe zou je dit aanpakken in je projecten?",
      options: [
        "A) Feature detection is niet relevant in progressieve verbetering.",
        "B) Feature detection is het controleren op de aanwezigheid van bepaalde browserfunctionaliteiten voordat deze worden gebruikt. Dit kan worden gedaan met behulp van moderne JavaScript-methoden zoals typeof of in.",
        "C) Feature detection is alleen relevant voor oudere browsers.",
      ],
      correctAnswer:
        "B) Feature detection is het controleren op de aanwezigheid van bepaalde browserfunctionaliteiten voordat deze worden gebruikt. Dit kan worden gedaan met behulp van moderne JavaScript-methoden zoals typeof of in.",
    },
  ];

  let currentQuestion = 0;
  let userAnswers = [];

  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result");

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
