//Un fonction qui chiffre une caractère (lettre ou chiffre) selon un règle définit
function chiffrerCaractere(caractere){
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
	//conversion du Map en tableau pour le traitement
	const tRegle = Array.from(regle);

	//Parcourir le tableau tRegle pour trouver la caractere et renvoyer le chiffre correspondant
	for(let element of tRegle){
		if (element[0].indexOf(caractere.toLowerCase()) > -1)
			return element[1];
	}
	//si le caractère est un chiffre alors elle retournera cette même chiffre
	//EX chiffrerCaractere(2) retournera 2
	return caractere; 
}

console.log(chiffrerCaractere("Y"));
