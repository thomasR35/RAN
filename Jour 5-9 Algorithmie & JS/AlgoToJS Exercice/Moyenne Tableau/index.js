let saisie = prompt('Saisir une liste de notes séparées par des virgules (ex: 10,6,12) :');

let tableauNotes = saisie.split(',');

let total = 0;

for (let i = 0; i < tableauNotes.length; i++){
    
    total  =  total + Number(tableauNotes[i]);
    console.log(total);
}
let moyenne = total / tableauNotes.length;
console.log(moyenne);

