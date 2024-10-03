// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var presentation = document.getElementById("presentation");
    var loader = document.getElementById("loader");

    // Vérifier que les éléments existent bien dans le DOM
    if (presentation && loader) {
        setTimeout(function() {
            presentation.style.display = "flex"; // Affiche la section de présentation
            presentation.style.flexDirection = "column";
            presentation.style.width = "100%";
            presentation.style.height = "50vh";
            presentation.style.alignItems = "center";
            presentation.style.justifyContent = "center";
            loader.style.display = "none"; // Cache le loader
        }, 3000); // 3000 millisecondes = 3 secondes
        // Sélectionner toutes les phrases
        const phrases = document.querySelectorAll('.phrase');
        let index = 0;

        // Fonction pour afficher les phrases
        function afficherPhrase() {
            if (index < phrases.length) {
                phrases[index].style.opacity = 1; // Rendre la phrase visible
                index++;
                setTimeout(afficherPhrase, 3000); // Attendre 2 secondes avant d'afficher la suivante
            }
        }

        // Démarrer l'affichage des phrases
        afficherPhrase();
    }
});











