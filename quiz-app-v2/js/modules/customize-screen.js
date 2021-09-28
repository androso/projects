import { gameScreen } from "./quiz-screen.js"; 

const $appContainer = document.querySelector(".app");
const $QuestionsNumberInput = document.querySelector(".number-input");
const $customizeForm = document.querySelector(".quiz__form");
const $submitFormButton = document.querySelector(".quiz__form button");
const $numberInputError = document.querySelector(".submit-error");
const $selectCategory = document.querySelector(".category-select");
const $selectDifficulty = document.querySelector(".difficulty-select");
const categories = {
    "general knowledge": 9,
    science: 17,
    "random-category": "",
    books: 10,
    history: 23,
    art: 25
}

export const customize = () => {
	addListeners();
};
const addListeners = () => {
	$QuestionsNumberInput.addEventListener("keydown", getOnlyNumbers);
	$submitFormButton.addEventListener("click", getUserData);
};

const getOnlyNumbers = (event) => {
	if (Number.isNaN(Number(event.key)) && event.key !== "Backspace") {
		event.preventDefault();
	}
	if (event.code === "Enter") {
		console.log(event.code);
		getUserData(event);

	}
};

const getUserData = (event) => {
	if (invalidNumber(event)) return false;

	const numberOfQuestions = Number($QuestionsNumberInput.value);
    const category = $selectCategory.options[$selectCategory.selectedIndex].value;
    const categoryId = !category ? "" : categories[category];
    //if the difficulty the user selected is random, we're gonna send an empty string to the api instead of an id
    const difficulty = $selectDifficulty.options[$selectDifficulty.selectedIndex].value.toLowerCase();
	gameScreen(numberOfQuestions, categoryId, difficulty);
};
const invalidNumber = (event) => {
	event.preventDefault();
	const numberOfQuestions = Number($QuestionsNumberInput.value);

	if (numberOfQuestions === 0 || numberOfQuestions > 20) {
		$numberInputError.classList.add("show");
        return true;
	} else {
		$numberInputError.classList.remove("show");
        return false;
	}
};
