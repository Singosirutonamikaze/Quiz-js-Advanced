
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
        question: "Quel est le plus long fleuve d'Afrique ?",
        answer1: "Niger",
        answer2: "Congo",
        answer3: "Nil",
        answer4: "Zambèze",
        correct: 3
    },
    {
        question: "Quel animal est connu comme le roi de la savane ?",
        answer1: "Éléphant",
        answer2: "Lion",
        answer3: "Giraffe",
        answer4: "Rhinocéros",
        correct: 2
    },
    {
        question: "Quelle est la langue la plus parlée en Afrique ?",
        answer1: "Anglais",
        answer2: "Swahili",
        answer3: "Arabe",
        answer4: "Français",
        correct: 3
    },
    {
        question: "Quel pays est connu pour ses pyramides et son histoire pharaonique ?",
        answer1: "Algérie",
        answer2: "Égypte",
        answer3: "Soudan",
        answer4: "Tunisie",
        correct: 2
    },
    {
        question: "Quelle est la capitale du Kenya ?",
        answer1: "Nairobi",
        answer2: "Kampala",
        answer3: "Addis-Abeba",
        answer4: "Dar es Salaam",
        correct: 1
    },
    {
        question: "Quel est le point le plus élevé d'Afrique ?",
        answer1: "Mont Kilimandjaro",
        answer2: "Mont Elgon",
        answer3: "Mont Rwenzori",
        answer4: "Mont Meru",
        correct: 1
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quel est le symbole national du Canada ?",
        answer1: "L'aigle",
        answer2: "Le castor",
        answer3: "Le bison",
        answer4: "Le loup",
        correct: 2
    },
    {
        question: "Quel est le plus grand lac d'eau douce par superficie en Amérique du Nord ?",
        answer1: "Lac Ontario",
        answer2: "Lac Érié",
        answer3: "Lac Supérieur",
        answer4: "Lac Michigan",
        correct: 3
    },
    {
        question: "Quel festival célèbre la culture autochtone à Santa Fe, Nouveau-Mexique ?",
        answer1: "Fête des morts",
        answer2: "Powwow",
        answer3: "Mardi Gras",
        answer4: "Burning Man",
        correct: 2
    },
    {
        question: "Quel État américain est le berceau du jazz ?",
        answer1: "Louisiane",
        answer2: "New York",
        answer3: "Texas",
        answer4: "Californie",
        correct: 1
    },
    {
        question: "Quelle est la langue officielle du Canada ?",
        answer1: "Anglais",
        answer2: "Français",
        answer3: "Espagnol",
        answer4: "Anglais et Français",
        correct: 4
    },
    {
        question: "Quel monument célèbre se trouve à Washington D.C. ?",
        answer1: "Statue de la Liberté",
        answer2: "Mont Rushmore",
        answer3: "Lincoln Memorial",
        answer4: "Empire State Building",
        correct: 3
    }
];

// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quel pays est le plus connu pour son tango ?",
        answer1: "Chili",
        answer2: "Argentine",
        answer3: "Brésil",
        answer4: "Colombie",
        correct: 2
    },
    {
        question: "Quel est le célèbre site archéologique inca au Pérou ?",
        answer1: "Machu Picchu",
        answer2: "Tikal",
        answer3: "Chichen Itza",
        answer4: "Nazca",
        correct: 1
    },
    {
        question: "Quel est le principal produit d'exportation du Brésil ?",
        answer1: "Café",
        answer2: "Soya",
        answer3: "Sable",
        answer4: "Cacao",
        correct: 1
    },
    {
        question: "Quel est le nom du plus grand désert d'Amérique du Sud ?",
        answer1: "Désert d'Atacama",
        answer2: "Désert de Patagonie",
        answer3: "Désert de Sonora",
        answer4: "Désert de Sechura",
        correct: 1
    },
    {
        question: "Quelle est la langue officielle du Paraguay ?",
        answer1: "Espagnol",
        answer2: "Guarani",
        answer3: "Portugais",
        answer4: "Anglais",
        correct: 2
    },
    {
        question: "Quelle est la plus grande ville du Brésil ?",
        answer1: "Rio de Janeiro",
        answer2: "Brasilia",
        answer3: "Salvador",
        answer4: "São Paulo",
        correct: 4
    }
];

// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel est le pays le plus peuplé du monde ?",
        answer1: "Inde",
        answer2: "Chine",
        answer3: "Indonésie",
        answer4: "Pakistan",
        correct: 2
    },
    {
        question: "Quelle est la capitale de la Thaïlande ?",
        answer1: "Bangkok",
        answer2: "Hanoï",
        answer3: "Manille",
        answer4: "Kuala Lumpur",
        correct: 1
    },
    {
        question: "Quel est le célèbre festival de lanternes qui se déroule en Asie ?",
        answer1: "Diwali",
        answer2: "Lunar New Year",
        answer3: "Obon",
        answer4: "Songkran",
        correct: 2
    },
    {
        question: "Quel pays est connu pour sa cuisine épicée, notamment le curry ?",
        answer1: "Chine",
        answer2: "Inde",
        answer3: "Japon",
        answer4: "Corée",
        correct: 2
    },
    {
        question: "Quelle chaîne de montagnes sépare l'Inde et le Tibet ?",
        answer1: "Les Alpes",
        answer2: "Les Andes",
        answer3: "Himalaya",
        answer4: "Appalaches",
        correct: 3
    },
    {
        question: "Quel est le festival du nouvel an au Japon ?",
        answer1: "Obon",
        answer2: "Tanabata",
        answer3: "Shichi-Go-San",
        answer4: "Shogatsu",
        correct: 4
    }
];

// Questions pour l'Océanie
const quizOceanie = [
    {
        question: "Quel est le célèbre opéra situé à Sydney ?",
        answer1: "Opéra de Sydney",
        answer2: "Opéra de Melbourne",
        answer3: "Opéra de Wellington",
        answer4: "Opéra de Brisbane",
        correct: 1
    },
    {
        question: "Quel est l'animal emblématique de l'Australie qui porte des jeunes dans une poche ?",
        answer1: "Koala",
        answer2: "Kangourou",
        answer3: "Dingo",
        answer4: "Wombat",
        correct: 2
    },
    {
        question: "Quel est le nom de la culture aborigène d'Australie ?",
        answer1: "Maori",
        answer2: "Hawaïenne",
        answer3: "Aborigène",
        answer4: "Polynésienne",
        correct: 3
    },
    {
        question: "Quelle est la plus grande barrière de corail au monde ?",
        answer1: "Récif de Ningaloo",
        answer2: "Grande Barrière de Corail",
        answer3: "Récif de Tubbataha",
        answer4: "Récif de la Nouvelle-Calédonie",
        correct: 2
    },
    {
        question: "Quelle île est célèbre pour ses sculptures de pierre appelées Moai ?",
        answer1: "Île de Pâques",
        answer2: "Îles Fidji",
        answer3: "Nouvelle-Calédonie",
        answer4: "Tahiti",
        correct: 1
    },
    {
        question: "Quelle est la langue nationale de la Nouvelle-Zélande ?",
        answer1: "Anglais",
        answer2: "Maori",
        answer3: "Français",
        answer4: "Espagnol",
        correct: 2
    }
];

// Questions pour l'Europe
const quizEurope = [
    {
        question: "Quel célèbre monument se trouve à Paris et est un symbole de l'amour ?",
        answer1: "Tour Eiffel",
        answer2: "Arc de Triomphe",
        answer3: "Sainte-Chapelle",
        answer4: "Notre-Dame",
        correct: 1
    },
    {
        question: "Quelle est la langue officielle de l'Italie ?",
        answer1: "Espagnol",
        answer2: "Français",
        answer3: "Italien",
        answer4: "Allemand",
        correct: 3
    },
    {
        question: "Quel est le festival de musique célèbre qui se déroule chaque année à Glastonbury, au Royaume-Uni ?",
        answer1: "Reading Festival",
        answer2: "Glastonbury Festival",
        answer3: "Isle of Wight Festival",
        answer4: "Latitude Festival",
        correct: 2
    },
    {
        question: "Quel pays est connu pour ses célèbres châteaux, dont le Château de Neuschwanstein ?",
        answer1: "Autriche",
        answer2: "Suisse",
        answer3: "Allemagne",
        answer4: "République tchèque",
        correct: 3
    },
    {
        question: "Quel auteur britannique est connu pour ses pièces de théâtre telles que 'Roméo et Juliette' et 'Hamlet' ?",
        answer1: "Charles Dickens",
        answer2: "George Orwell",
        answer3: "William Shakespeare",
        answer4: "J.K. Rowling",
        correct: 3
    },
    {
        question: "Quel mouvement artistique est né en Italie au XVe siècle et est caractérisé par le renouveau de l'art et de la culture ?",
        answer1: "Impressionnisme",
        answer2: "Cubisme",
        answer3: "Renaissance",
        answer4: "Surréalisme",
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
