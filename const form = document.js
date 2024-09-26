const form = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

// Mapping des réponses vers les sons de Damso
const damsoSongs = {
    A: 'Amnésie',
    B: 'Signaler',
    C: 'Julien',
    D: 'Exutoire',
    E: 'BXL Zoo',
    // Ajoute plus de chansons ici
};

// Fonction pour calculer le résultat
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Récupérer les réponses
    const formData = new FormData(form);
    let score = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    
    formData.forEach((value, key) => {
        score[value]++;  // Incrémenter le score pour chaque réponse sélectionnée
    });
    
    // Trouver la lettre la plus sélectionnée
    let highestScore = 0;
    let resultLetter = '';
    for (const [letter, count] of Object.entries(score)) {
        if (count > highestScore) {
            highestScore = count;
            resultLetter = letter;
        }
    }
    
    // Afficher la chanson correspondante
    const song = damsoSongs[resultLetter];
    resultDiv.innerHTML = `<p>Le son de Damso qui te correspond est : <strong>${song}</strong></p>`;
});
