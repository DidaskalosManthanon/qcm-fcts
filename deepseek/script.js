document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.getElementById('score-display');
    const questionPoints = document.getElementById('question-points');

    let totalScore = 0;

    submitBtn.addEventListener('click', function () {
        totalScore = 0;
        questions.forEach((question, index) => {
            const options = question.querySelectorAll('input');
            let questionScore = 0;
            let isCorrect = true;

            options.forEach(option => {
                if (option.checked) {
                    if (option.hasAttribute('data-correct')) {
                        questionScore += parseInt(question.getAttribute('data-points'));
                    } else {
                        isCorrect = false;
                    }
                }
            });

            if (isCorrect) {
                totalScore += questionScore;
                question.classList.add('correct');
            } else {
                question.classList.add('incorrect');
            }

            const li = document.createElement('li');
            li.textContent = `Question ${index + 1}: ${questionScore} points`;
            questionPoints.appendChild(li);
        });

        scoreDisplay.textContent = `Score: ${totalScore} points`;
    });
});