//importation des modules
const prompt = require("prompt-sync")();
const chiffrement = require("./chiffrement");
const calcule = require("./calcule");
const verifie = require("./verification");

//Test du premier fonction chiffrement d'une seule caractère
const caractere = prompt("Saisir un caractère :");
console.log(chiffrement.chiffrerCaractere(caractere));

//Test du deuxième chiffrement chiffrement d'une chaîne de caractère
const chaine = prompt("Saisir une chaîne :");
console.log(chiffrement.chiffrerChaine(chaine));

//Test du troisième fonction chiffrement d'un Relevé d'Identité Bancaire
const rib = prompt("Saisir une Relevé d'Identité Bancaire :");
console.log(chiffrement.chiffrerRib(rib));

//Test du fonction de calcule de clé RIB
const tableauRibChiffre = chiffrement.chiffrerRib(rib)
console.log(`La clé RIB de ${tableauRibChiffre} est ${calcule.calculeRib(tableauRibChiffre)}`);

//Test du fonction de vérification
const serie = [
	'blHhf sE6xP ReIXBOX7ih 88', 
	'at4Mu kCZpS nKzy4Ro0nk 83', 
	'KnJj7 sfyKs 5cuHLFsWcv 06', 
	'Gh8KF nU5mB wATlslF2WP 18',
	'0B7T9 L0ce4 ZI3LXlNJev 44',
	'1wTq8 74Idw uqby2hLWpW 45',
	'dbSZY gnIUk 1QK0OS7w5r 72',
	'9FNLi 9dAeH ngK4LUZNv3 69',
	'TmlJk eSSv6 SACtoCUpnC 46',
	'fMxmX SuHxs 8r1j6R2mAR 59',
	'CiMlg 2iAKZ fqvC583Qmy 20',
	'V0Pal 3zcgv M7u8nT8IYs 22',
	'38f12 vsB7n xb8Du2fLuz 16',
	't8qWE pzOSO EQx4RpyziX 33'];
//console.log(rib + " => " + verifie.verifier(rib));

for (let rib of serie)
    console.log(rib + " => " + verifie.verifier(rib));
