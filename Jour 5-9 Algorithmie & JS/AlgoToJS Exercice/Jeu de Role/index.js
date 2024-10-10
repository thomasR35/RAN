let saisieNombre1 = prompt("Saisir votre nombre de points de vie entre 1 et 100");
let pvJoueur = Number(saisieNombre1);

let saisieNombre2 = prompt('Saisir votre nombre de points d\'attque entre 1 et 3');
let paJoueur = Number(saisieNombre2);

function genPvEnnemi(){
    return Math.floor(Math.random() * 100+1);
}
let pvEnnemi = genPvEnnemi();
console.log(pvEnnemi);

function genPaEnnemi(){
    return Math.floor(Math.random() * 3+1);
}
let paEnnemi = genPaEnnemi();
console.log(paEnnemi);

while (pvEnnemi >= 0 && pvJoueur >= 0){

    console.log('PV Joueur' + pvJoueur);
    console.log('PV Ennemi' + pvEnnemi);
    
    pvEnnemi = pvEnnemi - paJoueur;
    
    if (pvEnnemi >= 0){
        
        pvJoueur = pvJoueur - paEnnemi;
        
    }
    if ( pvEnnemi <= 0){
    
        document.write('Le joueur a gagné');
        break;
    }
    if ( pvJoueur <= 0){
        
        document.write('L\'ennemi a gagné');
        break;
}
}