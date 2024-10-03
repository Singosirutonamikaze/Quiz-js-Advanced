
// Variables pour l'interface utilisateur
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answers"));
const scoreText = document.getElementById("score");
const correctBonus = 10;  // Bonus pour une réponse correcte
const MaxQuest = 6;  //  nombre maximal de questions par quiz

// Récupération des champs de début du quiz
var quizafrique = document.getElementById("Afrique");
var quizameriquenord = document.getElementById("AmeriqueNord");
var quizameriquesud = document.getElementById("AmeriqueSud");
var quizasie = document.getElementById("Asie");
var quizoceanie = document.getElementById("oceanie");
var quizeurope = document.getElementById("Europe");

var questionReponse = document.getElementById("questionReponse");
var choixcontinent = document.getElementById("choixcontinent");
let clear = document.getElementById("clear");
let page = document.getElementById("page");

let currentQuestion = {};
let availableQuestion = [];
let acceptingAnswers = false;
let currentQuestionIndex = 0;
let score = 0;


// Questions pour l'Afrique
const quizAfrique = [
    {
        question: "Quel est le plus grand désert d'Afrique ?",
        answer1: "Désert du Kalahari",
        answer2: "Désert du Sahara",
        answer3: "Désert de Namib",
        answer4: "Désert d'Arabie",
        correct: 2
    },
    {
        question: "Quel est le fleuve le plus long d'Afrique ?",
        answer1: "Fleuve Congo",
        answer2: "Fleuve Zambèze",
        answer3: "Fleuve Niger",
        answer4: "Fleuve Nil",
        correct: 4
    },
    {
        question: "Quel pays africain est traversé par le plus grand nombre de fuseaux horaires ?",
        answer1: "Égypte",
        answer2: "Algérie",
        answer3: "Afrique du Sud",
        answer4: "Libye",
        correct: 3
    },
    {
        question: "Quelle montagne est la plus haute d'Afrique ?",
        answer1: "Mont Kilimandjaro",
        answer2: "Mont Kenya",
        answer3: "Mont Elgon",
        answer4: "Mont Simien",
        correct: 1
    },
    {
        question: "Quel est le pays le plus peuplé d'Afrique ?",
        answer1: "Afrique du Sud",
        answer2: "Éthiopie",
        answer3: "Nigéria",
        answer4: "Égypte",
        correct: 3
    },
    {
        question: "Quelle mer borde l'Afrique au nord ?",
        answer1: "Mer Rouge",
        answer2: "Mer Méditerranée",
        answer3: "Mer Noire",
        answer4: "Mer d'Arabie",
        correct: 2
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quel est le plus haut sommet d'Amérique du Nord ?",
        answer1: "Mont McKinley (Denali)",
        answer2: "Mont Whitney",
        answer3: "Mont Saint Elias",
        answer4: "Mont Logan",
        correct: 1
    },
    {
        question: "Quel est le plus grand lac d'Amérique du Nord par superficie ?",
        answer1: "Lac Supérieur",
        answer2: "Lac Michigan",
        answer3: "Lac Ontario",
        answer4: "Lac Huron",
        correct: 1
    },
    {
        question: "Quelle chaîne de montagnes traverse l'ouest des États-Unis et du Canada ?",
        answer1: "Les Appalaches",
        answer2: "Les Rocheuses",
        answer3: "Les Montagnes de la Sierra Nevada",
        answer4: "Les Montagnes Adirondacks",
        correct: 2
    },
    {
        question: "Quel est le plus long fleuve d'Amérique du Nord ?",
        answer1: "Fleuve Mississippi",
        answer2: "Fleuve Yukon",
        answer3: "Fleuve Missouri",
        answer4: "Fleuve Saint-Laurent",
        correct: 3
    },
    {
        question: "Quel pays partage la plus longue frontière terrestre avec les États-Unis ?",
        answer1: "Canada",
        answer2: "Mexique",
        answer3: "Cuba",
        answer4: "Groenland",
        correct: 1
    },
    {
        question: "Dans quel état des États-Unis se trouve la Vallée de la Mort, l'endroit le plus bas et le plus chaud d'Amérique du Nord ?",
        answer1: "Nevada",
        answer2: "Arizona",
        answer3: "Californie",
        answer4: "Nouveau-Mexique",
        correct: 3
    }
];


// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
        answer1: "Argentine",
        answer2: "Colombie",
        answer3: "Pérou",
        answer4: "Brésil",
        correct: 4
    },
    {
        question: "Quelle est la capitale du Pérou ?",
        answer1: "Quito",
        answer2: "Lima",
        answer3: "La Paz",
        answer4: "Bogota",
        correct: 2
    },
    {
        question: "Quel est le plus grand lac d'Amérique du Sud ?",
        answer1: "Lac Titicaca",
        answer2: "Lac Maracaibo",
        answer3: "Lac Poopó",
        answer4: "Lac General Carrera",
        correct: 1
    },
    {
        question: "Quel désert d'Amérique du Sud est considéré comme l'endroit le plus sec de la planète ?",
        answer1: "Désert d'Atacama",
        answer2: "Désert de Patagonie",
        answer3: "Désert de Sechura",
        answer4: "Désert de la Guajira",
        correct: 1
    },
    {
        question: "Quelle est la plus longue chaîne de montagnes du monde, située en Amérique du Sud ?",
        answer1: "Les Alpes",
        answer2: "Les Rocheuses",
        answer3: "Les Andes",
        answer4: "L'Himalaya",
        correct: 3
    },
    {
        question: "Quel est le plus grand fleuve d'Amérique du Sud par débit d'eau ?",
        answer1: "Amazon",
        answer2: "Paraná",
        answer3: "Orénoque",
        answer4: "Magdalena",
        correct: 1
    }
];

// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel est le plus grand pays d'Asie en superficie ?",
        answer1: "Chine",
        answer2: "Inde",
        answer3: "Russie",
        answer4: "Kazakhstan",
        correct: 3
    },
    {
        question: "Quelle mer sépare la péninsule Arabique de l'Afrique ?",
        answer1: "Mer Rouge",
        answer2: "Mer d'Arabie",
        answer3: "Mer Méditerranée",
        answer4: "Golfe Persique",
        correct: 1
    },
    {
        question: "Quel est le plus grand lac d'Asie ?",
        answer1: "Lac Baïkal",
        answer2: "Mer Caspienne",
        answer3: "Lac Issyk-Koul",
        answer4: "Lac Balkhach",
        correct: 2
    },
    {
        question: "Quel désert est le plus grand d'Asie ?",
        answer1: "Désert de Gobi",
        answer2: "Désert du Thar",
        answer3: "Désert de Taklamakan",
        answer4: "Désert d'Arabie",
        correct: 4
    },
    {
        question: "Quel pays asiatique possède le plus grand nombre d'îles ?",
        answer1: "Philippines",
        answer2: "Indonésie",
        answer3: "Japon",
        answer4: "Malaisie",
        correct: 2
    },
    {
        question: "Quelle chaîne de montagnes sépare l'Inde de la Chine ?",
        answer1: "Les Andes",
        answer2: "Les Alpes",
        answer3: "L'Himalaya",
        answer4: "Les Rocheuses",
        correct: 3
    }
];

// Questions pour l'Océanie
const quizOceanie = [
    {
        question: "Quel est le plus grand pays d'Océanie ?",
        answer1: "Nouvelle-Zélande",
        answer2: "Australie",
        answer3: "Papouasie-Nouvelle-Guinée",
        answer4: "Fidji",
        correct: 2
    },
    {
        question: "Quel océan entoure l'Australie ?",
        answer1: "Océan Atlantique",
        answer2: "Océan Pacifique",
        answer3: "Océan Indien",
        answer4: "Océan Arctique",
        correct: 2
    },
    {
        question: "Quelle est la capitale de la Nouvelle-Zélande ?",
        answer1: "Auckland",
        answer2: "Wellington",
        answer3: "Christchurch",
        answer4: "Hamilton",
        correct: 2
    },
    {
        question: "Quelle île est connue pour ses kangourous ?",
        answer1: "Tasmanie",
        answer2: "Île de Pâques",
        answer3: "Nouvelle-Calédonie",
        answer4: "Australie",
        correct: 4
    },
    {
        question: "Quel récif corallien est le plus grand au monde ?",
        answer1: "Récif de Ningaloo",
        answer2: "Récif de Tubbataha",
        answer3: "Grande Barrière de Corail",
        answer4: "Récif de la Nouvelle-Calédonie",
        correct: 3
    },
    {
        question: "Quel est le nom de la plus grande ville d'Australie ?",
        answer1: "Sydney",
        answer2: "Melbourne",
        answer3: "Brisbane",
        answer4: "Perth",
        correct: 1
    }
];

// Questions pour l'Europe
const quizEurope = [
    {
        question: "Quel est le plus grand pays d'Europe en superficie ?",
        answer1: "Allemagne",
        answer2: "France",
        answer3: "Russie",
        answer4: "Espagne",
        correct: 3
    },
    {
        question: "Quelle est la capitale de la France ?",
        answer1: "Marseille",
        answer2: "Paris",
        answer3: "Lyon",
        answer4: "Nice",
        correct: 2
    },
    {
        question: "Quel est le pays d'origine du fromage cheddar ?",
        answer1: "France",
        answer2: "Royaume-Uni",
        answer3: "Allemagne",
        answer4: "Italie",
        correct: 2
    },
    {
        question: "Quelle est la plus longue rivière d'Europe ?",
        answer1: "Rivière Danube",
        answer2: "Rivière Rhône",
        answer3: "Rivière Volga",
        answer4: "Rivière Elbe",
        correct: 3
    },
    {
        question: "Quel pays est célèbre pour ses moulins à vent et ses tulipes ?",
        answer1: "Belgique",
        answer2: "Pays-Bas",
        answer3: "Allemagne",
        answer4: "France",
        correct: 2
    },
    {
        question: "Dans quel pays se trouve la ville de Prague ?",
        answer1: "Pologne",
        answer2: "République tchèque",
        answer3: "Hongrie",
        answer4: "Slovaquie",
        correct: 2
    }
];

// CONTINENTS
const continents = {
    Afrique: quizAfrique,
    AmeriqueNord: quizAmeriqueNord,
    AmeriqueSud: quizAmeriqueSud,
    Asie: quizAsie,
    Oceanie: quizOceanie,
    Europe: quizEurope
};

// Apparition des quiz selon le continent sélectionné
quizafrique.addEventListener('click', () => {
    startQuiz(quizAfrique);
});
quizameriquenord.addEventListener('click', () => {
    startQuiz(quizAmeriqueNord);
});
quizameriquesud.addEventListener('click', () => {
    startQuiz(quizAmeriqueSud);
});
quizasie.addEventListener('click', () => {
    startQuiz(quizAsie);
});
quizeurope.addEventListener('click', () => {
    startQuiz(quizEurope);
});
quizoceanie.addEventListener('click', () => {
    startQuiz(quizOceanie);
});

//Redemarrage du quiz
clear.addEventListener('click', () =>{
    window.location.reload();
});

// Fonction de démarrage du quiz
function startQuiz(quiz) {
    choixcontinent.style.display = 'none';
    questionReponse.style.display = 'flex';
    startGame(quiz);
}

// Initialisation du jeu
function startGame(quiz) {
    score = 0;  // Réinitialiser le score
    currentQuestionIndex = 0;  // Réinitialiser l'index des questions
    availableQuestion = [...quiz];  // Copier les questions du quiz sélectionné
    getNewQuestion();  // Charger la première question
}

// Charger une nouvelle question
function getNewQuestion() {
    if (availableQuestion.length === 0 || currentQuestionIndex >= MaxQuest) {
        // Redirection vers la page de fin si toutes les questions sont posées
        return window.location.assign("../finpage/index.html");
    }

    currentQuestionIndex++;  // Incrémenter l'index des questions

    // Sélectionner une question aléatoirement parmi les questions restantes
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    
    // Afficher la question
    question.innerHTML = currentQuestion.question;

    // Associer chaque réponse à son bouton
    answers.forEach((answer) => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion["answer" + number];
    });

    // Retirer la question utilisée des questions disponibles
    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;  // Accepter les réponses
}

// Gestion des réponses
answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;  // Ne rien faire si les réponses ne sont pas acceptées
        acceptingAnswers = false;  // Désactiver temporairement l'acceptation des réponses

        const selectedChoice = e.target;  // Récupérer l'élément cliqué
        const selectedAnswer = selectedChoice.dataset["number"];  // Récupérer le numéro de la réponse choisie

        // Vérifier si la réponse est correcte
        const classToApply = selectedAnswer == currentQuestion.correct ? "correct" : "incorrect";
        
        if (classToApply === "correct") {
            incrementScore(correctBonus);  // Incrémenter le score si la réponse est correcte
        }

        // Ajouter la classe CSS correcte/incorrecte pour feedback visuel
        selectedChoice.parentElement.classList.add(classToApply);

        // Attendre 2 secondes avant de passer à la question suivante
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);  // Enlever la classe après un délai
            getNewQuestion();  // Charger la question suivante
        }, 1000);
    });
});

// Fonction d'incrémentation du score
function incrementScore(num) {
    score += num;  // Ajouter les points
    scoreText.innerHTML = score;  // Mettre à jour l'affichage du score
}
