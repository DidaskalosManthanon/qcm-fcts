const questions = [
    {
        id: 1,
        text: "Quelles notations traduisent la phrase : \"f est la fonction qui a un nombre associe le double de son cube augmenté de cinq\" ?",
        responses: [
            { id: "q1r1", text: "\(f(x) = 2x^3 + 5\)" },
            { id: "q1r2", text: "\(f : x\\mapsto 2x^3 + 5\)" },
            { id: "q1r3", text: "\(f(x) \\mapsto 2x^3 + 5\)" },
            { id: "q1r4", text: "\(f = f(x)\\mapsto 2x^3 + 5\)" }
        ]
    },
    {
        id: 2,
        text: "Quelles phrases traduisent la notation : \(f(2) = 21\) ?",
        responses: [
            { id: "q2r1", text: "2 est l'image de 21 par la fonction \(f\)" },
            { id: "q2r2", text: "21 est l'image de 2 par la fonction \(f\)" },
            { id: "q2r21", text: "2 est un antécédent de 21 par la fonction \(f\)" },
            { id: "q2r4", text: "21 est un antécédent de 2 par la fonction \(f\)" }
        ]
    }
    // Ajoutez d'autres questions ici
];

function generateQuestions() {
    const yourgameSection = document.getElementById("yourgame");

    questions.forEach((question, index) => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h3>Question ${question.id}</h3>
            <ol start="${question.id}">
                <li>
                    <p>${question.text}</p>
                    <ol class="resp">
                        ${question.responses.map(response => `
                            <li>
                                <input type="checkbox" id="${response.id}">
                                <label for="${response.id}">${response.text}</label>
                            </li>
                        `).join("")}
                    </ol>
                </li>
            </ol>
        `;
        yourgameSection.appendChild(article);
    });
}

// Appeler la fonction pour générer les questions
generateQuestions();