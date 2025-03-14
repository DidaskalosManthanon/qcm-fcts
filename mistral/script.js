document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.getElementById('score-display');
    const questionPoints = document.getElementById('question-points');
    const scoreDetails = document.getElementById('score-details');

    submitBtn.addEventListener('click', () => {
        let score = 0;
        const questionElements = document.querySelectorAll('.question');

        questionElements.forEach((question, index) => {
            const correctOption = question.querySelector('[data-correct]');
            const selectedOption = question.querySelector('input:checked');

            if (selectedOption === correctOption) {
                score += parseInt(question.getAttribute('data-points'), 10);
            }

            // Display points for each question
            const pointsLi = document.createElement('li');
            pointsLi.textContent = `Question ${index + 1}: ${selectedOption === correctOption ? 'Correct' : 'Incorrect'}`;
            questionPoints.appendChild(pointsLi);
        });

        scoreDisplay.textContent = `Score: ${score}/${questionElements.length}`;
        scoreDetails.style.display = 'block';
    });
});
