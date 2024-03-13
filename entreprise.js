// Gestion du menu déroulant
const dropdownLink = document.querySelector('.dropdown a');
const dropdownContent = document.querySelector('.dropdown-content');

let isOpen = false;

dropdownLink.addEventListener('click', () => {
    if (isOpen) {
        dropdownContent.classList.remove('open');
    } else {
        dropdownContent.classList.add('open');
    }
    isOpen = !isOpen;
});

document.addEventListener('click', (event) => {
    if (!dropdownLink.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('open');
        isOpen = false;
    }
});

// Effet de fade-in lors du défilement
document.addEventListener("scroll", function() {
    var section = document.getElementById("white-section");
    var sectionTop = section.getBoundingClientRect().top;
    var sectionHeight = section.clientHeight;

    if (sectionTop <= window.innerHeight && sectionTop >= -sectionHeight) {
        var list = document.querySelector("#outils ul");
        list.style.opacity = "1";
        list.style.transform = "translateX(0)";
    }
});

// Gestion du clic sur les cartes
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
