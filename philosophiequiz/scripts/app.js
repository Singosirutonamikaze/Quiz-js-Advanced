
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
        question: "Quel philosophe africain a posé la question du rôle de l'éducation dans la libération des peuples ?",
        answer1: "Cheikh Anta Diop",
        answer2: "Frantz Fanon",
        answer3: "Kwame Nkrumah",
        answer4: "Julius Nyerere",
        correct: 2
    },
    {
        question: "Quelle idée fondamentale sur la communauté humaine se trouve dans le concept africain de 'Ubuntu' ?",
        answer1: "Je pense donc je suis",
        answer2: "L'homme est un loup pour l'homme",
        answer3: "Je suis parce que nous sommes",
        answer4: "La liberté est le but suprême",
        correct: 3
    },
    {
        question: "Quel philosophe a exploré les questions de négritude et d'aliénation culturelle en Afrique ?",
        answer1: "Léopold Sédar Senghor",
        answer2: "Aimé Césaire",
        answer3: "Thomas Sankara",
        answer4: "Wole Soyinka",
        correct: 1
    },
    {
        question: "Quel philosophe africain a abordé la relation entre tradition et modernité dans le développement africain ?",
        answer1: "Ngũgĩ wa Thiong'o",
        answer2: "Souleymane Bachir Diagne",
        answer3: "Amadou Hampâté Bâ",
        answer4: "Ali Mazrui",
        correct: 2
    },
    {
        question: "Quelle est la conception philosophique de l'équilibre entre l'individu et la communauté dans les cultures africaines traditionnelles ?",
        answer1: "L'individualisme radical",
        answer2: "Le collectivisme extrême",
        answer3: "L'équilibre entre l'individu et la communauté",
        answer4: "L'isolement philosophique",
        correct: 3
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quel philosophe américain est connu pour son concept de la 'désobéissance civile' ?",
        answer1: "John Dewey",
        answer2: "Ralph Waldo Emerson",
        answer3: "Henry David Thoreau",
        answer4: "William James",
        correct: 3
    },
    {
        question: "Quel est le principal courant philosophique développé aux États-Unis au XIXe siècle par Emerson et ses contemporains ?",
        answer1: "Existentialisme",
        answer2: "Pragmatisme",
        answer3: "Transcendantalisme",
        answer4: "Stoïcisme",
        correct: 3
    },
    {
        question: "Quel philosophe américain a exploré l'idée du 'pragmatisme' comme une méthode de résolution des problèmes humains ?",
        answer1: "John Dewey",
        answer2: "William James",
        answer3: "Charles Sanders Peirce",
        answer4: "Richard Rorty",
        correct: 1
    },
    {
        question: "Quelle question fondamentale sur la démocratie est abordée dans les travaux de John Rawls ?",
        answer1: "Comment équilibrer liberté et égalité ?",
        answer2: "Comment éviter la tyrannie de la majorité ?",
        answer3: "Comment créer un gouvernement juste ?",
        answer4: "Quelle est la place de la morale dans la politique ?",
        correct: 1
    },
    {
        question: "Quel philosophe canadien est connu pour sa critique des idéaux communautariens et du libéralisme individualiste ?",
        answer1: "Will Kymlicka",
        answer2: "Charles Taylor",
        answer3: "Alasdair MacIntyre",
        answer4: "George Grant",
        correct: 2
    }
];


// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quel philosophe sud-américain a abordé la question de l'éducation comme outil de libération dans 'Pédagogie des opprimés' ?",
        answer1: "Simón Bolívar",
        answer2: "Paulo Freire",
        answer3: "José Martí",
        answer4: "Gabriel García Márquez",
        correct: 2
    },
    {
        question: "Quel penseur sud-américain a joué un rôle clé dans le développement de la théologie de la libération ?",
        answer1: "Gustavo Gutiérrez",
        answer2: "Eduardo Galeano",
        answer3: "Che Guevara",
        answer4: "Juan Pablo II",
        correct: 1
    },
    {
        question: "Quelle est la principale question philosophique soulevée par les penseurs latino-américains concernant le colonialisme ?",
        answer1: "Comment reconstruire les civilisations indigènes ?",
        answer2: "Comment les cultures colonisées peuvent-elles se réapproprier leur identité ?",
        answer3: "Quelle est la meilleure forme de gouvernement postcolonial ?",
        answer4: "Comment les peuples colonisés peuvent-ils accéder à l'indépendance ?",
        correct: 2
    },
    {
        question: "Quel philosophe latino-américain a souligné l'importance de la culture et de l'identité dans la libération des peuples ?",
        answer1: "Simón Rodríguez",
        answer2: "José de San Martín",
        answer3: "José Vasconcelos",
        answer4: "Eduardo Galeano",
        correct: 4
    },
    {
        question: "Quel concept philosophique est au centre de la pensée de Simón Bolívar concernant l'unité des nations sud-américaines ?",
        answer1: "Le socialisme",
        answer2: "Le panaméricanisme",
        answer3: "Le nationalisme",
        answer4: "L'anarchisme",
        correct: 2
    }
];


// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel philosophe chinois est l'auteur de l'idée du 'Mandat du Ciel' concernant la légitimité des dirigeants ?",
        answer1: "Confucius",
        answer2: "Lao Tseu",
        answer3: "Mencius",
        answer4: "Zhuangzi",
        correct: 3
    },
    {
        question: "Quel concept philosophique central du bouddhisme traite de l'extinction du désir pour atteindre l'illumination ?",
        answer1: "Le Tao",
        answer2: "La Voie du Milieu",
        answer3: "Le Nirvana",
        answer4: "Le Karma",
        correct: 3
    },
    {
        question: "Quelle philosophie japonaise met l'accent sur l'harmonie avec la nature et l'acceptation de l'impermanence ?",
        answer1: "Zen",
        answer2: "Confucianisme",
        answer3: "Shintoïsme",
        answer4: "Taoïsme",
        correct: 1
    },
    {
        question: "Quel philosophe indien est à l'origine du concept de non-violence (Ahimsa) comme principe moral fondamental ?",
        answer1: "Siddhartha Gautama",
        answer2: "Gandhi",
        answer3: "Rabindranath Tagore",
        answer4: "Vivekananda",
        correct: 2
    },
    {
        question: "Quel est le concept philosophique chinois selon lequel l'équilibre et l'harmonie universels découlent de la complémentarité des opposés ?",
        answer1: "Yin et Yang",
        answer2: "Wu Wei",
        answer3: "Qi",
        answer4: "Réincarnation",
        correct: 1
    }
];

// Questions pour l'Océanie
const quizOceanie = [
    {
        question: "Quel philosophe et activiste australien a plaidé pour la reconnaissance des droits des peuples autochtones ?",
        answer1: "Noel Pearson",
        answer2: "Eddie Mabo",
        answer3: "Patrick Dodson",
        answer4: "Germaine Greer",
        correct: 2
    },
    {
        question: "Quelle question philosophique est soulevée par les luttes autochtones en Océanie concernant la terre ?",
        answer1: "La propriété individuelle contre la propriété communautaire",
        answer2: "La place de la nature dans la culture",
        answer3: "Le lien spirituel entre la terre et l'homme",
        answer4: "Le respect des ressources naturelles",
        correct: 3
    },
    {
        question: "Quel penseur océanien a mis en avant l'importance de la réconciliation nationale entre les peuples indigènes et les colons ?",
        answer1: "Noel Pearson",
        answer2: "Patrick Dodson",
        answer3: "Germaine Greer",
        answer4: "Bruce Pascoe",
        correct: 2
    },
    {
        question: "Quelle idée philosophique peut être associée aux traditions maories sur la relation entre l'homme et la nature ?",
        answer1: "Le contrôle total de la nature par l'homme",
        answer2: "La coexistence pacifique avec la nature",
        answer3: "L'exploitation durable des ressources",
        answer4: "L'usage symbolique des éléments naturels",
        correct: 2
    },
    {
        question: "Quel concept autochtone australien souligne l'importance des histoires orales et du lien spirituel avec les terres ancestrales ?",
        answer1: "Totémisme",
        answer2: "Rêve",
        answer3: "Mana",
        answer4: "Kapwa",
        correct: 2
    }
];


// Questions pour l'Europe
const quizEurope = [
    {
        question: "Quel philosophe allemand est à l'origine du concept de 'surhomme' dans la philosophie du nihilisme ?",
        answer1: "Immanuel Kant",
        answer2: "Friedrich Nietzsche",
        answer3: "Arthur Schopenhauer",
        answer4: "Georg Hegel",
        correct: 2
    },
    {
        question: "Quelle est la question fondamentale posée par Descartes dans ses 'Méditations métaphysiques' ?",
        answer1: "Qu'est-ce que la réalité ?",
        answer2: "Existe-t-il un Dieu ?",
        answer3: "Qu'est-ce que la vérité ?",
        answer4: "Comment puis-je être certain de quoi que ce soit ?",
        correct: 4
    },
    {
        question: "Quel philosophe anglais a défendu l'idée que l'homme est naturellement bon, mais corrompu par la société ?",
        answer1: "John Locke",
        answer2: "Thomas Hobbes",
        answer3: "Jean-Jacques Rousseau",
        answer4: "David Hume",
        correct: 3
    },
    {
        question: "Quel concept philosophique est central dans les travaux de Karl Marx ?",
        answer1: "L'existentialisme",
        answer2: "Le matérialisme historique",
        answer3: "Le stoïcisme",
        answer4: "Le rationalisme",
        correct: 2
    },
    {
        question: "Quel philosophe existentialiste a écrit 'L'Être et le Néant' ?",
        answer1: "Simone de Beauvoir",
        answer2: "Martin Heidegger",
        answer3: "Jean-Paul Sartre",
        answer4: "Albert Camus",
        correct: 3
    }
];

//Recupération de tous les continents 
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
