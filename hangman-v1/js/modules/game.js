import Home from "./home.js";
import {sound as sounds} from "../data/sound.js"

// We're gonna need an array of words
//
const Game = (() => {
    const $hangmanContainer = document.querySelector(".hangman__container");
    const init = () => {
        render();
        addListeners();
    }
    const render = () => {
        let markup = `
        <p class="hangman__stats">Lives: 7</p>
        <h1 class="hangman__title">Hangman</h1>
        <canvas class="hangman__board">
        </canvas>
        <div class="hangman__word">
        </div>
        <p class="hangman__instructions">Pick an alphabet below to guess the whole word.</p>
        <ul class="hangman__letters">
            <li class="hangman__letter">a</li>
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
        `
        $hangmanContainer.innerHTML = markup;
    }
    const addListeners = () => {
        const $mainMenuButton = document.querySelector(".hangman__trigger");
        $mainMenuButton.addEventListener("click", () => {
            Home.init();
            sounds.click.play();
        });
    }
    return {
        init,
    }
})();
export default Game;