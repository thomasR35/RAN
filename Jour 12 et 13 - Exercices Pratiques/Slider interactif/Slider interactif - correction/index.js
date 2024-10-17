// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialisation de la valeur affichée
    // - Récupérer la valeur de l'élément ayant la classe "js-number-input"
    // - La recopier dans l'élément ayant la classe "js-number-display"
    let inputDOM = document.querySelector('.js-number-input');
    let paragrapheDOM = document.querySelector('.js-number-display');
    
    paragrapheDOM.textContent = inputDOM.value;
    
    // 2. Mise à jour automatique de la valeur affichée lorsque l'utilisateur bouge le slider
    //   - Ajouter un listener sur l'événement "change" de l'élément ayant la classe "js-number-input"
    //   - Récupérer la valeur de l'élément "js-number-input"
    //   - La recopier dans l'élément ayant la classe "js-number-display"
    inputDOM.addEventListener('input', function(event) {
        //let newValue = inputDOM.value;
        let newValue = event.target.value;
        paragrapheDOM.textContent = newValue;
    });
});
