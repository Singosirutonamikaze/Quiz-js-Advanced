
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
        answer1: "Désert du Namib",
        answer2: "Désert du Sahara",
        answer3: "Désert de Kalahari",
        answer4: "Désert de Libye",
        correct: 2
    },
    {
        question: "Quelle chaîne de montagnes est la plus haute d'Afrique ?",
        answer1: "Monts Atlas",
        answer2: "Mont Kilimandjaro",
        answer3: "Monts Drakensberg",
        answer4: "Monts Simien",
        correct: 2
    },
    {
        question: "Quel rift est connu pour sa géologie unique et ses lacs d'altitude ?",
        answer1: "Rift de l'Andalousie",
        answer2: "Rift est-africain",
        answer3: "Rift de l'Ouest",
        answer4: "Rift de l'Himalaya",
        correct: 2
    },
    {
        question: "Quel est le type de sol le plus courant dans les savanes africaines ?",
        answer1: "Sol argileux",
        answer2: "Sol sablonneux",
        answer3: "Sol ferrallique",
        answer4: "Sol litérique",
        correct: 3
    },
    {
        question: "Quelle est la plus grande caldeira d'Afrique, située en Tanzanie ?",
        answer1: "Caldeira de Ngorongoro",
        answer2: "Caldeira de Crater Lake",
        answer3: "Caldeira de Kilimandjaro",
        answer4: "Caldeira d'Aso",
        correct: 1
    },
    {
        question: "Quel est le principal minéral extrait dans la région du Katanga en République Démocratique du Congo ?",
        answer1: "Or",
        answer2: "Cuivre",
        answer3: "Diamant",
        answer4: "Cobalt",
        correct: 2
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quelle chaîne de montagnes traverse l'Amérique du Nord du nord au sud ?",
        answer1: "Appalaches",
        answer2: "Montagnes Rocheuses",
        answer3: "Sierra Nevada",
        answer4: "Cascade Range",
        correct: 2
    },
    {
        question: "Quel est le plus grand lac d'eau douce en Amérique du Nord ?",
        answer1: "Lac Michigan",
        answer2: "Lac Supérieur",
        answer3: "Lac Huron",
        answer4: "Lac Érié",
        correct: 2
    },
    {
        question: "Quel est le principal type de sol trouvé dans les prairies nord-américaines ?",
        answer1: "Sable",
        answer2: "Limon",
        answer3: "Argile",
        answer4: "Tourbe",
        correct: 2
    },
    {
        question: "Quel type de roche prédomine dans le Grand Canyon ?",
        answer1: "Roche sédimentaire",
        answer2: "Roche métamorphique",
        answer3: "Roche ignée",
        answer4: "Roche volcanique",
        correct: 1
    },
    {
        question: "Quel est le nom du parc national situé sur le site de l'ancienne caldeira d'un supervolcan au Wyoming ?",
        answer1: "Yosemite",
        answer2: "Yellowstone",
        answer3: "Glacier",
        answer4: "Zion",
        correct: 2
    },
    {
        question: "Quel est le principal risque géologique dans la région de San Andreas en Californie ?",
        answer1: "Inondation",
        answer2: "Tremblement de terre",
        answer3: "Érosion",
        answer4: "Volcanisme",
        correct: 2
    }
];


// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quelle chaîne de montagnes s'étend le long de la côte ouest de l'Amérique du Sud ?",
        answer1: "Montagnes Rocheuses",
        answer2: "Andes",
        answer3: "Sierra Madre",
        answer4: "Appalaches",
        correct: 2
    },
    {
        question: "Quel est le nom du plus grand désert d'Amérique du Sud ?",
        answer1: "Désert de Patagonie",
        answer2: "Désert d'Atacama",
        answer3: "Désert de Sechura",
        answer4: "Désert de Sonora",
        correct: 2
    },
    {
        question: "Quelle forêt tropicale est la plus vaste d'Amérique du Sud ?",
        answer1: "Forêt amazonienne",
        answer2: "Forêt de l'Atlantique",
        answer3: "Forêt de Valdivie",
        answer4: "Forêt de Tamanrasset",
        correct: 1
    },
    {
        question: "Quel fleuve d'Amérique du Sud traverse six pays ?",
        answer1: "Rio Paraguay",
        answer2: "Rio Orénoque",
        answer3: "Rio Amazonas",
        answer4: "Rio Paraná",
        correct: 3
    },
    {
        question: "Quel est le principal type de roche trouvée dans les Andes ?",
        answer1: "Roche sédimentaire",
        answer2: "Roche ignée",
        answer3: "Roche métamorphique",
        answer4: "Roche volcanique",
        correct: 2
    },
    {
        question: "Quel est le nom du plateau haut situé en Argentine, connu pour sa géologie unique ?",
        answer1: "Plateau de Altiplano",
        answer2: "Plateau du Colorado",
        answer3: "Plateau de Patagonie",
        answer4: "Plateau de Cuzco",
        correct: 1
    }
];

// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel est le plus haut sommet du monde, situé dans l'Himalaya ?",
        answer1: "K2",
        answer2: "Mont Everest",
        answer3: "Kangchenjunga",
        answer4: "Lhotse",
        correct: 2
    },
    {
        question: "Quel pays possède une grande partie de la ceinture de feu du Pacifique ?",
        answer1: "Chine",
        answer2: "Indonésie",
        answer3: "Inde",
        answer4: "Japon",
        correct: 2
    },
    {
        question: "Quel est le nom du désert le plus vaste d'Asie ?",
        answer1: "Désert de Gobi",
        answer2: "Désert de Taklamakan",
        answer3: "Désert de Kyzylkoum",
        answer4: "Désert de Karakoum",
        correct: 1
    },
    {
        question: "Quel est le principal type de sol dans les régions de steppe en Asie centrale ?",
        answer1: "Limon",
        answer2: "Chaux",
        answer3: "Argile",
        answer4: "Sol noir",
        correct: 1
    },
    {
        question: "Quelle grande plaine en Chine est connue pour sa géologie riche en ressources ?",
        answer1: "Plaine du Gange",
        answer2: "Plaine de Huang He",
        answer3: "Plaine de Yangzi",
        answer4: "Plaine de Tigris",
        correct: 2
    },
    {
        question: "Quel est le nom du volcan actif le plus célèbre du Japon ?",
        answer1: "Volcan Aso",
        answer2: "Volcan Fuji",
        answer3: "Volcan Sakurajima",
        answer4: "Volcan Kirishima",
        correct: 2
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
        question: "Quelle est la principale caractéristique géologique de la Nouvelle-Zélande ?",
        answer1: "Volcans",
        answer2: "Déserts",
        answer3: "Plateaux",
        answer4: "Forêts tropicales",
        correct: 1
    },
    {
        question: "Quel est le nom de la chaîne de montagnes qui s'étend le long de la côte est de l'Australie ?",
        answer1: "Montagnes Grampians",
        answer2: "Montagnes Snowy",
        answer3: "Montagnes de la Great Dividing Range",
        answer4: "Montagnes de la Nouvelle-Galles du Sud",
        correct: 3
    },
    {
        question: "Quel est le plus grand récif corallien au monde ?",
        answer1: "Récif de Ningaloo",
        answer2: "Récif de Tubbataha",
        answer3: "Grande Barrière de Corail",
        answer4: "Récif de la Nouvelle-Calédonie",
        correct: 3
    },
    {
        question: "Quelle île est connue pour son activité volcanique intense, notamment le volcan Kilauea ?",
        answer1: "Île de Pâques",
        answer2: "Hawaï",
        answer3: "Nouvelle-Zélande",
        answer4: "Fidji",
        correct: 2
    },
    {
        question: "Quel est le type de sol prédominant en Australie ?",
        answer1: "Sol fertile",
        answer2: "Sol argileux",
        answer3: "Sol sableux",
        answer4: "Sol rouge",
        correct: 4
    }
];

// Questions pour l'Europe
const quizEuropeGeologie = [
    {
        question: "Quel est le plus grand glacier d'Europe ?",
        answer1: "Glacier d'Annapurna",
        answer2: "Glacier de Vatnajökull",
        answer3: "Glacier d'Aletsch",
        answer4: "Glacier de Jostedalsbreen",
        correct: 3
    },
    {
        question: "Quelle chaîne de montagnes traverse l'Europe de l'Ouest à l'Est ?",
        answer1: "Les Pyrénées",
        answer2: "Les Alpes",
        answer3: "Les Apennins",
        answer4: "Les Carpates",
        correct: 2
    },
    {
        question: "Quel est le principal type de sol dans les prairies d'Europe centrale ?",
        answer1: "Sol argileux",
        answer2: "Sol noir",
        answer3: "Sol sableux",
        answer4: "Sol acide",
        correct: 2
    },
    {
        question: "Quel est le principal risque géologique en Europe du Sud ?",
        answer1: "Tremblements de terre",
        answer2: "Érosion",
        answer3: "Inondation",
        answer4: "Glissements de terrain",
        correct: 1
    },
    {
        question: "Quel pays a le plus grand nombre de volcans actifs en Europe ?",
        answer1: "Italie",
        answer2: "Grèce",
        answer3: "Islande",
        answer4: "Portugal",
        correct: 3
    },
    {
        question: "Quelle est la plus grande plaine d'Europe ?",
        answer1: "Plaine du Danube",
        answer2: "Plaine de Pannonie",
        answer3: "Plaine de l'Europe du Nord",
        answer4: "Plaine de l'Elbe",
        correct: 3
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
