let remise = "";
let prix = prompt('Saisir une liste de prix séparé par une virgule (ex: 15,25,40):');

let tableauPrix = prix.split(',');

for (let i = 0; i < tableauPrix.length; i++){
    
    let prixActuel = Number(tableauPrix[i]);
    remise += (prixActuel - prixActuel * 0.1);
    remise += " ";
}
console.log("Prix remisé :" +remise);
