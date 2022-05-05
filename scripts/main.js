//Test du premier fonction chiffrement d'une seule caractère
const prompt = require("prompt-sync")();
const fonction = require("./chiffrement");

const caractere = prompt("Saisir un caractère :");
console.log(fonction.chiffrerCaractere(caractere));
