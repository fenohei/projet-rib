//Importation des modules
const verifie = require("./verification");

//Programme principale pour l'exécution
const prompt = require('prompt-sync')();

console.log("Bonjour, voici une petite programme qui vérifie si un Rélevé d'identité Bancaire est valide ou non");

let serie = [];
let reponse = "non";

do{
    let input = prompt("Saisie d'un Relevé d'Identité Bancaire :");
    if (input == ''){
        reponse == "non";
    }else{
        serie.push(input);
        reponse = prompt("Voulez-vous ajouter une autre ? (oui / non)");   
    }
}while (reponse == "oui");

//console.log(serie.length);
if (serie.length >= 1){
    for (let rib of serie)
        console.log(rib + " => " + verifie.verifier(rib));
}else console.log("Aucun données");

