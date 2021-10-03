
export class Question {
    constructor (question, choices, correctAnswer){
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}