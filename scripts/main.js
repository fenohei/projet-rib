//importation des modules
const prompt = require("prompt-sync")();
const fonction = require("./chiffrement");

//Test du premier fonction chiffrement d'une seule caractère
const caractere = prompt("Saisir un caractère :");
console.log(fonction.chiffrerCaractere(caractere));

//Test du deuxième fonction chiffrement d'une chaîne de caractère
const chaine = prompt("Saisir une chaîne :");
console.log(fonction.chiffrerChaine(chaine));
