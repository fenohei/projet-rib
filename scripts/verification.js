//Cette fonction vérifie si une Relevé d'identité Bancaire est valide ou non

//importation des modules
const prompt = require("prompt-sync")();
const chiffrement = require("./chiffrement");
const calcule = require("./calcule");

function verifier(rib){
	if (calcule.calculeRib(chiffrement.chiffrerRib(rib)) == chiffrement.chiffrerRib(rib)[3])
		return 'Valide';
	return 'Non valide';
}

module.exports = {verifier};
