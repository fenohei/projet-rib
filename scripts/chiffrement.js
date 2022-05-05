//Fonction qui va chiffrer un caractère (caractere ou chiffre) selon une règle définit
function chiffrerCaractere(caractere){
    //définition du règle du chiffrement
	let regle = new Map(
		[
			[['a','j'],1],
			[['b','k','s'],2],
			[['c','l','t'],3],
			[['d','m','u'],4],
			[['e','n','v'],5],
			[['f','o','w'],6],
			[['g','p','x'],7],
			[['h','q','y'],8],
			[['i','r','z'],9]	
		]
	);
	
	const tabRegle = Array.from(regle);
    //si le caractère(input) à chiffrer se trouve dans une ligne du règle alors la fonction retournera le chiffre correspondant
	for(let element of tabRegle){
		if (element[0].indexOf(caractere.toLowerCase()) > -1)
			return element[1];
	}
    //si le caractère est un chiffre alors elle retourne cette même chiffre
	return caractere;
}

module.exports = { chiffrerCaractere };
