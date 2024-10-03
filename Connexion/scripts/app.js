//controle de la connexion

//Variable
var submit = document.getElementById("debuter");
var debuter = document.getElementById("commencer");
var choixquiz = document.getElementById("Quiz");
var formulaire = document.getElementById("formulaire");
var debuterpage = document.getElementById("page");

//verification
function validerForm(){
    //Récupération des valeurs des champs
    var utilisateur = document.getElementById("utilisateur").value.trim();
    var pseudo = document.getElementById("pseudo").value.trim();
    var email = document.getElementById("email").value.trim();

    //Réinisialisation des valeurs
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("pseudoError").innerHTML = "";

    //Validation des divers champs
    if(utilisateur==="")
    {
        document.getElementById("nameError").innerHTML = "Veuillez entrer un nom d'utilisateur correct.";
        return false;
    }
    
    if(pseudo==="")
    {
        document.getElementById("nameError").innerHTML = "Veuillez votre pseudo correct.";
        return false;
    }
    else
    {
        var PseudoValidate = /^[a-zA-Z0-9._%+-]+[a-zA-Z0-9.-]+$/;
        if(!PseudoValidate.test(pseudo) || !PseudoValidate.test(pseudo))
        {
            document.getElementById("pseudoError").innerHTML = "Votre pseudo est invalide.";
            return false;
        }
    }
    if(email==="")
    {
        document.getElementById("nameError").innerHTML = "Veuillez entrer un email correct.";
        return false;
    }
    else
    {
        var EmailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var Emailvalidate2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!EmailValidate.test(email) || !Emailvalidate2.test(email))
        {
            document.getElementById("emailError").innerHTML = "Votre Email est invalide.";
            return false;
        }
    }
    //Utilisation des condition
    submit.addEventListener('click', ()=>{
         debuterpage.style.display = 'block';     
         formulaire.style.display = 'none';
     });
    // debuter.addEventListener('click', ()=>{
    //     choixquiz.style.display = 'grid';     
    //     formulaire.style.display = 'none';
    // });
    return true;
}

