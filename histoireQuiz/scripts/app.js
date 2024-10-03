
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
        question: "En quelle année Nelson Mandela est-il devenu président de l'Afrique du Sud ?",
        answer1: "1990",
        answer2: "1994",
        answer3: "1999",
        answer4: "2004",
        correct: 2
    },
    {
        question: "Quel empire africain était connu pour ses grandes richesses et sa capitale Timbuktu ?",
        answer1: "Empire de Ghana",
        answer2: "Empire du Mali",
        answer3: "Empire Songhaï",
        answer4: "Empire du Zimbabwe",
        correct: 2
    },
    {
        question: "Quelle bataille de 1896 a vu les forces éthiopiennes vaincre les Italiens, préservant ainsi l'indépendance de l'Éthiopie ?",
        answer1: "Bataille d'Isandlwana",
        answer2: "Bataille de Rorke's Drift",
        answer3: "Bataille d'Adoua",
        answer4: "Bataille d'Omdurman",
        correct: 3
    },
    {
        question: "Quel pays africain est le premier à avoir obtenu son indépendance en 1957 ?",
        answer1: "Nigeria",
        answer2: "Sénégal",
        answer3: "Ghana",
        answer4: "Kenya",
        correct: 3
    },
    {
        question: "Qui était le célèbre roi du royaume Kongo qui a régné de 1509 à 1543 et a adopté le christianisme ?",
        answer1: "Nzinga Mbemba",
        answer2: "Shaka Zulu",
        answer3: "Mansa Musa",
        answer4: "Samory Touré",
        correct: 1
    },
    {
        question: "Quel était le principal commerce des empires ouest-africains comme le Ghana, le Mali et le Songhaï ?",
        answer1: "Sel et or",
        answer2: "Esclaves et épices",
        answer3: "Bois et ivoire",
        answer4: "Textiles et céramique",
        correct: 1
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quel est le plus grand pays d'Amérique du Nord en superficie ?",
        answer1: "États-Unis",
        answer2: "Canada",
        answer3: "Mexique",
        answer4: "Groenland",
        correct: 2
    },
    {
        question: "Quelle ville est la capitale du Canada ?",
        answer1: "Toronto",
        answer2: "Vancouver",
        answer3: "Ottawa",
        answer4: "Montréal",
        correct: 3
    },
    {
        question: "Quel événement historique a eu lieu à Boston en 1773, marquant le début de la Révolution américaine ?",
        answer1: "Le Boston Massacre",
        answer2: "Le Boston Tea Party",
        answer3: "La Déclaration d'indépendance",
        answer4: "La Bataille de Bunker Hill",
        correct: 2
    },
    {
        question: "Quel état américain est surnommé 'The Sunshine State' ?",
        answer1: "Floride",
        answer2: "Californie",
        answer3: "Texas",
        answer4: "Arizona",
        correct: 1
    },
    {
        question: "Lequel de ces pays ne fait pas partie de l'ALENA (Accord de libre-échange nord-américain) ?",
        answer1: "Canada",
        answer2: "Mexique",
        answer3: "États-Unis",
        answer4: "Cuba",
        correct: 4
    },
    {
        question: "En quelle année la Louisiane a-t-elle été achetée par les États-Unis à la France ?",
        answer1: "1763",
        answer2: "1803",
        answer3: "1848",
        answer4: "1867",
        correct: 2
    }
];

// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quel est le plus long fleuve d'Amérique du Sud ?",
        answer1: "Amazon",
        answer2: "Paraná",
        answer3: "Orénoque",
        answer4: "Rio Negro",
        correct: 1
    },
    {
        question: "Quel pays est le plus grand producteur de café au monde, situé en Amérique du Sud ?",
        answer1: "Colombie",
        answer2: "Brésil",
        answer3: "Pérou",
        answer4: "Argentine",
        correct: 2
    },
    {
        question: "Quel explorateur a été le premier à traverser l'océan Pacifique depuis l'Amérique du Sud ?",
        answer1: "Christophe Colomb",
        answer2: "Fernand de Magellan",
        answer3: "Amerigo Vespucci",
        answer4: "Francisco Pizarro",
        correct: 2
    },
    {
        question: "Quelle montagne est la plus haute d'Amérique du Sud ?",
        answer1: "Mont Aconcagua",
        answer2: "Mont Chimborazo",
        answer3: "Mont Roraima",
        answer4: "Mont Fitz Roy",
        correct: 1
    },
    {
        question: "Quel pays sud-américain a été nommé d'après un explorateur italien ?",
        answer1: "Brésil",
        answer2: "Colombie",
        answer3: "Venezuela",
        answer4: "Argentine",
        correct: 3
    },
    {
        question: "Quelle ville sud-américaine est célèbre pour son carnaval annuel ?",
        answer1: "Buenos Aires",
        answer2: "Santiago",
        answer3: "Lima",
        answer4: "Rio de Janeiro",
        correct: 4
    }
];

// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel pays est le plus grand en superficie en Asie ?",
        answer1: "Inde",
        answer2: "Chine",
        answer3: "Russie",
        answer4: "Mongolie",
        correct: 3
    },
    {
        question: "Le mont Everest se trouve à la frontière de quel pays asiatique ?",
        answer1: "Népal",
        answer2: "Chine",
        answer3: "Inde",
        answer4: "Bhoutan",
        correct: 1
    },
    {
        question: "Quelle est la capitale du Japon ?",
        answer1: "Osaka",
        answer2: "Tokyo",
        answer3: "Kyoto",
        answer4: "Hiroshima",
        correct: 2
    },
    {
        question: "Quelle religion est la plus pratiquée en Inde ?",
        answer1: "Islam",
        answer2: "Bouddhisme",
        answer3: "Hindouisme",
        answer4: "Christianisme",
        correct: 3
    },
    {
        question: "Quel pays est surnommé le 'Pays du matin calme' ?",
        answer1: "Japon",
        answer2: "Corée du Sud",
        answer3: "Thaïlande",
        answer4: "Vietnam",
        correct: 2
    },
    {
        question: "Quel fleuve est le plus long d'Asie ?",
        answer1: "Yangzi Jiang",
        answer2: "Mékong",
        answer3: "Gange",
        answer4: "Indus",
        correct: 1
    }
];

// Questions pour l'Océanie
const quizOceanie = [
    {
        question: "Quel pays est le plus grand de l'Océanie ?",
        answer1: "Australie",
        answer2: "Nouvelle-Zélande",
        answer3: "Papouasie-Nouvelle-Guinée",
        answer4: "Fidji",
        correct: 1
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        answer1: "Sydney",
        answer2: "Melbourne",
        answer3: "Canberra",
        answer4: "Brisbane",
        correct: 3
    },
    {
        question: "Quel est le désert le plus vaste d'Océanie ?",
        answer1: "Désert de Gibson",
        answer2: "Désert de Simpson",
        answer3: "Désert de Tanami",
        answer4: "Désert de Nullarbor",
        correct: 2
    },
    {
        question: "Quel est le plus grand récif corallien au monde situé en Océanie ?",
        answer1: "Récif de Ningaloo",
        answer2: "Grande Barrière de Corail",
        answer3: "Récif de Tubbataha",
        answer4: "Récif de la Nouvelle-Calédonie",
        correct: 2
    },
    {
        question: "Quelle île est célèbre pour ses statues moai en Océanie ?",
        answer1: "Îles Fidji",
        answer2: "Île de Pâques",
        answer3: "Nouvelle-Calédonie",
        answer4: "Polynésie française",
        correct: 2
    },
    {
        question: "Quel animal emblématique est originaire d'Australie ?",
        answer1: "Tigre",
        answer2: "Koala",
        answer3: "Zèbre",
        answer4: "Panda",
        correct: 2
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
        question: "Quelle est la capitale de l'Allemagne ?",
        answer1: "Munich",
        answer2: "Berlin",
        answer3: "Hambourg",
        answer4: "Francfort",
        correct: 2
    },
    {
        question: "Dans quel pays peut-on trouver la tour Eiffel ?",
        answer1: "Espagne",
        answer2: "Italie",
        answer3: "Allemagne",
        answer4: "France",
        correct: 4
    },
    {
        question: "En quelle année l'Union européenne a-t-elle été fondée ?",
        answer1: "1993",
        answer2: "1957",
        answer3: "1960",
        answer4: "1973",
        correct: 1
    },
    {
        question: "Quel est le plus haut sommet d'Europe ?",
        answer1: "Mont Blanc",
        answer2: "Mont Elbrouz",
        answer3: "Mont Grossglockner",
        answer4: "Mont Cervin",
        correct: 2
    },
    {
        question: "Quel pays est le berceau de la Renaissance ?",
        answer1: "France",
        answer2: "Espagne",
        answer3: "Italie",
        answer4: "Portugal",
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
