//importation des modules
const prompt = require("prompt-sync")();
const fonction = require("./chiffrement");

//Test du premier fonction chiffrement d'une seule caractère
const caractere = prompt("Saisir un caractère :");
console.log(fonction.chiffrerCaractere(caractere));

//Test du deuxième fonction chiffrement d'une chaîne de caractère
const chaine = prompt("Saisir une chaîne :");
console.log(fonction.chiffrerChaine(chaine));

//Test du troisième fonction chiffrement d'un Relevé d'Identité Bancaire
const rib = prompt("Saisir une Relevé d'Identité Bancaire :");
console.log(fonction.chiffrerRib(rib));
