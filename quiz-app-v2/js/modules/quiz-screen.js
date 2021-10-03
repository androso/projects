//TODO: Write the dom elements to be rendered
const $appContainer = document.querySelector(".app");

export const gameScreen = (numberOfQuestions, categoryId, difficulty) => {  
    getQuestionsData(numberOfQuestions, categoryId, difficulty);
    renderScreen();
}

const getQuestionsData = async (numberOfQuestions, categoryId, difficulty) => {
    const reqLink = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    const questionsData = await (await fetch(reqLink)).json();
    // We'll need a loop to iterate questionsData numberOfQuestions times
    // we'll store questionTitle, choices and the correct answer inside of an object
    // Each object will be stored inside of an array
    // We'll loop that array of objects, using new Question from questions.js

    const questions = questionsData.results.map(questionObject => {
        const question = questionObject.question;
        const wrongChoices = questionObject.incorrect_answers; 
        const correctChoice = questionObject.correct_answer;
        return {
            question,
            choices: [...wrongChoices, correctChoice],
            correctAnswer: correctChoice
        }
    })
        
}
const renderScreen = () => {
    let markup = `
    <main class="quiz">
        <div class="quiz__header">
            <h1 class="quiz__question">
                What was the pre-SIXTEEN name of Park Jihyo?
            </h1>
            <p class="quiz__current-question">1 of 6</p>
            <div class="quiz__progress-bar">
                <div class="quiz__progress-bar__inner"></div>
            </div>
            <p class="quiz__tagline">Pick an option below!</p>
        </div>
        <div class="quiz__body">
            <ul class="quiz__choices-container">
                <li class="quiz__choice">
                    <input
                        type="radio"
                        name="choice"
                        id="choice0"
                        class="quiz__input"
                    />
                    <label for="choice0" class="quiz__label">
                        <i></i>Park Ji-soo</label
                    >
                </li>
                <li class="quiz__choice">
                    <input
                        type="radio"
                        name="choice"
                        id="choice1"
                        class="quiz__input"
                    />
                    <label for="choice1" class="quiz__label">
                        <i></i>Park Jin-soo</label
                    >
                </li>
                <li class="quiz__choice">
                    <input
                        type="radio"
                        name="choice"
                        id="choice2"
                        class="quiz__input"
                    />
                    <label for="choice2" class="quiz__label">
                        <i></i>Mark Jinroo</label
                    >
                </li>
                <li class="quiz__choice">
                    <input
                        type="radio"
                        name="choice"
                        id="choice3"
                        class="quiz__input"
                    />
                    <label for="choice3" class="quiz__label"> <i></i>Renata</label>
                </li>
            </ul>
        </div>
        <div class="quiz__footer">
            <button class="button button--bordered next">Next</button>
            <button class="button button--bordered restart">Restart</button>
        </div>
    </main>
    `;
    $appContainer.innerHTML = markup;
}
const createQuiz = () => {

}