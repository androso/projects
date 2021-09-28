//TODO: Write the dom elements to be rendered
//TODO: Receive the number of questions, categories and difficulty
//TODO: Fetch the api and store it somewhere



export const gameScreen = (numberOfQuestions, categoryId, difficulty) => {  
    getQuestionsData(numberOfQuestions, categoryId, difficulty);
    renderScreen();
}

const getQuestionsData = async (numberOfQuestions, categoryId, difficulty) => {
    const reqLink = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=${difficulty}`;
    console.log(reqLink);
    const questionsData = (await fetch(reqLink)).json();
    console.log(await questionsData);
}

const renderScreen = (numberOfQuestions, categoryId, difficulty) => {

}