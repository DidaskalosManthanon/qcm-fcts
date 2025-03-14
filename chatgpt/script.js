function validateQuiz() {
    let correctAnswers = {
        "q1": "f : x\\mapsto 2x^3 + 5"
    };
    
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    
    Object.keys(correctAnswers).forEach(q => {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === correctAnswers[q]) {
            score++;
        }
    });
    
    document.getElementById("result").innerText = `Score : ${score}/${totalQuestions}`;
}
