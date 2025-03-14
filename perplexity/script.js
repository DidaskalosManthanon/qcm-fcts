const quizData = [
    {
        question: "On considère un carré de côté 5. Quelle est la longueur de sa diagonale ?",
        options: ["5√2", "10", "25", "5"],
        correctAnswer: "5√2",
        type: "single"
    },
    {
        question: "On considère un triangle équilatéral de côté 7. Quelle est la longueur de sa hauteur ?",
        options: ["3,5√3", "7√3/2", "7√2", "3,5"],
        correctAnswer: "7√3/2",
        type: "single"
    },
    {
        question: "On considère un carré de côté 11. Quelle est son aire ?",
        options: ["121 cm²", "121", "11² cm²", "121 m²"],
        correctAnswers: ["121 cm²", "121", "11² cm²"],
        type: "multiple"
    },
    {
        question: "On considère un triangle équilatéral de côté 3. Quelle est son aire ?",
        options: ["3√3/4 cm²", "9√3/4", "(3√3)/4 cm²", "3,9 cm²"],
        correctAnswers: ["3√3/4 cm²", "(3√3)/4 cm²"],
        type: "multiple"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const scoreDisplay = document.getElementById('score-display');

function createQuiz() {
    quizData.forEach((questionData, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>Question ${index + 1}:</h3>
            <p>${questionData.question}</p>
            <ul class="options">
                ${questionData.options.map((option, optionIndex) => `
                    <li>
                        <input type="${questionData.type === 'single' ? 'radio' : 'checkbox'}" 
                               id="q${index}-option${optionIndex}" 
                               name="q${index}" 
                               value="${option}">
                        <label for="q${index}-option${optionIndex}">${option}</label>
                    </li>
                `).join('')}
            </ul>
            <div class="feedback"></div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function checkAnswers() {
    let score = 0;
    quizData.forEach((questionData, index) => {
        const questionElement = quizContainer.children[index];
        const selectedOptions = questionElement.querySelectorAll('input:checked');
        const feedbackElement = questionElement.querySelector('.feedback');

        if (questionData.type === 'single') {
            if (selectedOptions.length === 1 && selectedOptions[0].value === questionData.correctAnswer) {
                score++;
                feedbackElement.textContent = "Correct !";
                feedbackElement.classList.add('correct');
            } else {
                feedbackElement.textContent = `Incorrect. La bonne réponse était : ${questionData.correctAnswer}`;
                feedbackElement.classList.add('incorrect');
            }
        } else {
            const selectedValues = Array.from(selectedOptions).map(option => option.value);
            if (selectedValues.length === questionData.correctAnswers.length &&
                selectedValues.every(value => questionData.correctAnswers.includes(value))) {
                score++;
                feedbackElement.textContent = "Correct !";
                feedbackElement.classList.add('correct');
            } else {
                feedbackElement.textContent = `Incorrect. Les bonnes réponses étaient : ${questionData.correctAnswers.join(', ')}`;
                feedbackElement.classList.add('incorrect');
            }
        }
    });

    scoreDisplay.textContent = `Score : ${score}/${quizData.length}`;
}

createQuiz();
submitButton.addEventListener('click', checkAnswers);
