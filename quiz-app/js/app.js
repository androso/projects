import Question from "./Questions.js";
import Quiz from "./Quiz.js";

//--------DOM interaction--------//
const App = (() => {
	//Caching the DOM (getting the el we're gonna use)
	const quizEl = document.querySelector(".quiz");
	
    const quizQuestionEl = document.querySelector(".quiz__question");
	const trackerEl = document.querySelector(".quiz__current-question");
	const taglineEl = document.querySelector(".quiz__tagline");
	const choicesContainerEl = document.querySelector(".quiz__choices-container");
    
    let choicesEl = Array.from(document.querySelectorAll(".quiz__label"));

	const innerProgressEl = document.querySelector(".quiz__progress-bar__inner");

    const nextButtonEl = document.querySelector(".button.next");
	const restartButtonEl = document.querySelector(".button.restart");

	//---- QUESTIONS (creating the quiz) ----//
	const q1 = new Question (
        "What was the pre-SIXTEEN name of Park Jihyo?",
        ["Park Ji-soo", "Park Jin-soo", "Mark Jinroo", "Renata"],
        0
    );
	const q2 = new Question(
		"What's Mina's American name?",
		["Zofia", "Zelenya", "Sharon", "Salma"],
		2
	);
	const q3 = new Question(
		"How many members does Twice have?",
		[10, 8, 4, 9],
		3
	);
	const q4 = new Question(
		"What is Twice debut song?",
		["Like Ooh-Ahh", "Cry For Me", "One In A Million", "Lovesick Girls"],
		0
	);
	const q5 = new Question(
		"Sana is from",
		["El Salvador", "Mexico", "Korea", "Japan"],
		2
	);
    const q6 = new Question(
		"Why did Jihyo changed her name?",
		[
			"The name was too common in idols",
			"JyP was dumb asf",
			"She didn't like it",
			"It was Chae's idea",
		],
		0
	);
    
	const quiz = new Quiz([q1, q2, q3, q4, q5,q6]);
    // quiz.nextQuestion();
    // const currentQuestion = quiz.getCurrentQuestion();

    //---- INTERACTING ----//


    // when the user hits next
        // i want to get the the user's choice
            // if there's no choice: alert("you need to pick an option");
            // call quiz.guess(userGuess)
                // if currentQuestion.isCorrect(answer)
                    // update Quiz.score
                // update Quiz.currentIndex --> nextQuestion();

        // i want to replace cachedELs with Els from the new question(object)
            // question
            // tracker
            // innerProgressEl
            // maybe the tagline
            // choices

        // i want to replace all elements with the new from the next question
            // change quizQuestionEl
                // 
            // change "nth of nQuestions" in the html
                // trackerEl.innerText = `${currentIndex+1} of ${quiz.questions.length}`
            // i want to increase the progress bar by (100 / nQuestions)%
                // let width = 0;
                // let widthIncrease = 100 / quiz.questions.length
                // innerProgressEl.style.width = `${width + widthIncrease}%`;
            // change the choices for those of the new question
                // choicesEl.map(
                //     (choice, index) => {
                //         console.log(choice.innerText, ", before");
                //         choice.innerHTML = "<i></i>" + currentQuestion.choices[index];
                //     }
                // )
            // When User submits last question
                // Change tagline for "Well done" or smth

    // When the user hits the restart button
        // All El on page will be changed for those of q1

    
    
})();
