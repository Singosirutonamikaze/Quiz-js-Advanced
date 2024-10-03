
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
        question: "Quel pays africain est le plus grand producteur de logiciels ?",
        answer1: "Nigeria",
        answer2: "Afrique du Sud",
        answer3: "Kenya",
        answer4: "Ghana",
        correct: 2
    },
    {
        question: "Quel est le nom du moteur de recherche le plus utilisé en Afrique ?",
        answer1: "Bing",
        answer2: "Yahoo",
        answer3: "Google",
        answer4: "DuckDuckGo",
        correct: 3
    },
    {
        question: "Quel langage de programmation est principalement utilisé pour le développement web ?",
        answer1: "Python",
        answer2: "Java",
        answer3: "JavaScript",
        answer4: "C++",
        correct: 3
    },
    {
        question: "Quelle est la plateforme de réseaux sociaux la plus populaire en Afrique ?",
        answer1: "LinkedIn",
        answer2: "Facebook",
        answer3: "Twitter",
        answer4: "Instagram",
        correct: 2
    },
    {
        question: "Quel système d'exploitation mobile est le plus utilisé en Afrique ?",
        answer1: "iOS",
        answer2: "Windows Phone",
        answer3: "Android",
        answer4: "BlackBerry OS",
        correct: 3
    },
    {
        question: "Quel est le terme utilisé pour décrire la sécurité des informations et des systèmes informatiques ?",
        answer1: "Cryptographie",
        answer2: "Sécurologie",
        answer3: "Informatique légale",
        answer4: "Cyber-sécurité",
        correct: 4
    }
];

// Questions pour l'Amérique du Nord
const quizAmeriqueNord = [
    {
        question: "Quel est le nom de la plus grande entreprise de logiciels au monde, basée aux États-Unis ?",
        answer1: "Oracle",
        answer2: "Microsoft",
        answer3: "Apple",
        answer4: "Google",
        correct: 2
    },
    {
        question: "Quel langage de programmation est souvent utilisé pour le développement d'applications Android ?",
        answer1: "Swift",
        answer2: "Java",
        answer3: "Ruby",
        answer4: "C#",
        correct: 2
    },
    {
        question: "Quel est le réseau social le plus populaire en Amérique du Nord ?",
        answer1: "LinkedIn",
        answer2: "Snapchat",
        answer3: "Facebook",
        answer4: "Twitter",
        correct: 3
    },
    {
        question: "Quel système d'exploitation est le plus utilisé sur les ordinateurs personnels en Amérique du Nord ?",
        answer1: "Linux",
        answer2: "Windows",
        answer3: "macOS",
        answer4: "Chrome OS",
        correct: 2
    },
    {
        question: "Quelle entreprise a lancé le premier smartphone au monde ?",
        answer1: "Nokia",
        answer2: "IBM",
        answer3: "Apple",
        answer4: "BlackBerry",
        correct: 2
    },
    {
        question: "Quel terme décrit l'intelligence artificielle qui simule le comportement humain ?",
        answer1: "Machine Learning",
        answer2: "Deep Learning",
        answer3: "IA générale",
        answer4: "IA faible",
        correct: 3
    }
];

// Questions pour l'Amérique du Sud
const quizAmeriqueSud = [
    {
        question: "Quel pays sud-américain est connu pour ses avancées en matière de technologie agricole ?",
        answer1: "Argentine",
        answer2: "Brésil",
        answer3: "Chili",
        answer4: "Colombie",
        correct: 2
    },
    {
        question: "Quel langage de programmation est largement utilisé pour le développement de logiciels scientifiques ?",
        answer1: "Python",
        answer2: "Java",
        answer3: "C#",
        answer4: "JavaScript",
        correct: 1
    },
    {
        question: "Quel système d'exploitation est populaire parmi les utilisateurs de serveurs en Amérique du Sud ?",
        answer1: "Windows Server",
        answer2: "Linux",
        answer3: "macOS",
        answer4: "Solaris",
        correct: 2
    },
    {
        question: "Quelle est la plateforme de développement open source qui permet de créer des applications web ?",
        answer1: "Django",
        answer2: "Ruby on Rails",
        answer3: "Node.js",
        answer4: "React",
        correct: 1
    },
    {
        question: "Quel est le nom du moteur de recherche le plus populaire en Amérique du Sud ?",
        answer1: "Bing",
        answer2: "Yahoo",
        answer3: "Google",
        answer4: "DuckDuckGo",
        correct: 3
    },
    {
        question: "Quel terme désigne le vol d'informations personnelles en ligne ?",
        answer1: "Phishing",
        answer2: "Hacking",
        answer3: "Spoofing",
        answer4: "Malware",
        correct: 1
    }
];


// Questions pour l'Asie
const quizAsie = [
    {
        question: "Quel pays asiatique est considéré comme le berceau de la technologie des smartphones ?",
        answer1: "Japon",
        answer2: "Corée du Sud",
        answer3: "Chine",
        answer4: "Inde",
        correct: 2
    },
    {
        question: "Quel langage de programmation est couramment utilisé pour le développement de jeux vidéo ?",
        answer1: "C++",
        answer2: "Java",
        answer3: "Python",
        answer4: "PHP",
        correct: 1
    },
    {
        question: "Quelle entreprise chinoise est connue pour ses innovations en matière d'intelligence artificielle ?",
        answer1: "Huawei",
        answer2: "Alibaba",
        answer3: "Tencent",
        answer4: "Baidu",
        correct: 4
    },
    {
        question: "Quel est le terme utilisé pour décrire l'interconnexion mondiale des réseaux informatiques ?",
        answer1: "Intranet",
        answer2: "Extranet",
        answer3: "Internet",
        answer4: "Cloud",
        correct: 3
    },
    {
        question: "Quel est le système d'exploitation mobile le plus utilisé en Asie ?",
        answer1: "iOS",
        answer2: "Windows Phone",
        answer3: "Android",
        answer4: "BlackBerry OS",
        correct: 3
    },
    {
        question: "Quel pays asiatique a le plus grand nombre d'utilisateurs d'Internet ?",
        answer1: "Japon",
        answer2: "Inde",
        answer3: "Chine",
        answer4: "Corée du Sud",
        correct: 3
    }
];

// Questions pour l'Océanie
const quizOceanie = [
    {
        question: "Quel est le pays d'Océanie qui est le plus avancé en matière de technologie ?",
        answer1: "Australie",
        answer2: "Nouvelle-Zélande",
        answer3: "Papouasie-Nouvelle-Guinée",
        answer4: "Fidji",
        correct: 1
    },
    {
        question: "Quel langage de programmation est populaire pour le développement web en Océanie ?",
        answer1: "PHP",
        answer2: "Java",
        answer3: "C#",
        answer4: "Python",
        correct: 1
    },
    {
        question: "Quel est le nom de la technologie qui permet de créer des applications sans code ?",
        answer1: "Low-code",
        answer2: "No-code",
        answer3: "DevOps",
        answer4: "Agile",
        correct: 2
    },
    {
        question: "Quel est le plus grand événement technologique en Australie ?",
        answer1: "CeBIT",
        answer2: "SXSW",
        answer3: "TechCrunch Disrupt",
        answer4: "Web Summit",
        correct: 1
    },
    {
        question: "Quel type de sécurité est crucial pour protéger les données personnelles en ligne ?",
        answer1: "Antivirus",
        answer2: "Firewall",
        answer3: "Cryptographie",
        answer4: "Backup",
        correct: 3
    },
    {
        question: "Quel est le nom du langage de programmation développé par Google pour les applications web ?",
        answer1: "Go",
        answer2: "Dart",
        answer3: "Rust",
        answer4: "Swift",
        correct: 2
    }
];

// Questions pour l'Europe
const quizEurope = [
    {
        question: "Quel pays européen est le berceau de l'intelligence artificielle moderne ?",
        answer1: "Royaume-Uni",
        answer2: "France",
        answer3: "Allemagne",
        answer4: "Suisse",
        correct: 1
    },
    {
        question: "Quel est le langage de programmation le plus utilisé en Europe ?",
        answer1: "Java",
        answer2: "Python",
        answer3: "C++",
        answer4: "JavaScript",
        correct: 2
    },
    {
        question: "Quel est le nom de la société de logiciels basée en Allemagne qui a développé SAP ?",
        answer1: "Oracle",
        answer2: "SAP SE",
        answer3: "Siemens",
        answer4: "IBM",
        correct: 2
    },
    {
        question: "Quelle est la plateforme de commerce électronique la plus populaire en Europe ?",
        answer1: "eBay",
        answer2: "Amazon",
        answer3: "Alibaba",
        answer4: "Etsy",
        correct: 2
    },
    {
        question: "Quel est le nom du projet européen pour le développement de l'informatique quantique ?",
        answer1: "Quantum Europe",
        answer2: "European Quantum Communication",
        answer3: "Quantum Flagship",
        answer4: "Q-Next",
        correct: 3
    },
    {
        question: "Quel pays est le leader en matière de cybersécurité en Europe ?",
        answer1: "France",
        answer2: "Royaume-Uni",
        answer3: "Allemagne",
        answer4: "Pays-Bas",
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
