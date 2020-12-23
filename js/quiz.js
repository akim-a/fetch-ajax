class Quiz {
    constructor() {
        fetch('questions.json')
            .then(response => response.json() )
            .then(questions => {
                this.questions = questions;
                this.showQuestion();
            })
        document.querySelector('.check').addEventListener('click', () => this.checkAnswer() );
        document.querySelector('.next').addEventListener('click', () => this.showQuestion() );
    }
    showQuestion() {
        const idx = Math.floor(Math.random() * this.questions.length);
        this.currQuestion = this.questions[idx];
        document.querySelector('.question').value = this.currQuestion.q;
        document.querySelector('.result').innerText = '';
        document.querySelector('.answer').value = '';
    }
    checkAnswer() {
        const answer = document.querySelector('.answer').value;
        document.querySelector('.result').innerText = 
            answer === this.currQuestion.a ? "CORRECT" : "INCORRECT";
    }
}
new Quiz();