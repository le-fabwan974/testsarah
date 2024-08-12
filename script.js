document.getElementById('hiddenHeartButton').addEventListener('click', function() {
    showModal('https://example.com/surprise-image.jpg', 'Félicitations ! Tu as trouvé le cœur caché.');
});

function startGame(gameNumber) {
    switch (gameNumber) {
        case 1:
            playFindHiddenObjectGame();
            break;
        case 2:
            playQuestionGame();
            break;
        // Ajoute plus de jeux ici
    }
}

function playFindHiddenObjectGame() {
    alert('Cherche l\'élément caché dans l\'image !');
    // Logique pour le Jeu 1 ici
}

function playQuestionGame() {
    let answer = prompt('Quelle est la couleur du ciel ?');
    if (answer.toLowerCase() === 'bleu') {
        alert('Bravo ! Réponse correcte.');
    } else {
        alert('Dommage, ce n\'est pas la bonne réponse.');
    }
}

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
