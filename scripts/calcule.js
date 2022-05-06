//cette fonction calcule la clé RIB d'un tableu RIB chiffré

//On calcule la somme de : 89 × codedebanque + 15 × codeguichet + 3 ×       numérodecompte
function somme(tRibChiffre){
	return 89*tRibChiffre[0] + 15*tRibChiffre[1] + 3*tRibChiffre[2];
}

//La clé RIB est alors égale à 97 moins le modulo 97 de la somme précédente
function calculeRib(tRibChiffre){
	return 97 - (somme(tRibChiffre) % 97);
}

module.exports = { calculeRib };
