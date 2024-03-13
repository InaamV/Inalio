

// Gestion du clic sur les cartes de réalisations école
const schoolCards = document.querySelectorAll('#white-section .card');
const detailedContentSchool = document.getElementById('detailed-content-school');
const detailedDescriptionSchool = document.getElementById('detailed-description-school');

schoolCards.forEach((card, index) => {
    card.addEventListener('click', function () {
        // paragraphe associé à la carte
        const descriptions = document.querySelectorAll('#white-section .description');

        schoolCards.forEach((card) => card.classList.remove('selected'));

        // Ajouter la classe 'selected' à la carte actuelle
        card.classList.add('selected');
 
        // maj du contenu détaillé avec le texte associé à la carte
        detailedDescriptionSchool.innerHTML = descriptions[index].innerHTML;

        // Affichez la section du contenu détaillé pour les réalisations école
        detailedContentSchool.style.display = 'block';
    });
});
