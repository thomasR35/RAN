ouvrirVanneEau ();

let niveau = 0;

while (niveau < 100) {
     niveau = prompt ('Valeur capteur')
}

fermerVanneEau();

allumerChauffage ();

let temperature = 0;

while (temperature <60){
    temperature = prompt('Capteur temperature')
}

eteindreChauffage ();