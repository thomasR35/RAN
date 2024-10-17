document.addEventListener('DOMContentLoaded', function() {
    let helpButtonDOM = document.querySelector('.js-help');
    let popupDOM = document.querySelector('.popup-help');
    
    // 1. Lorsque l'utilisateur clique sur l'icone d'aide (classe js-help), ouvrir la popup
    helpButtonDOM.addEventListener('click', function () {
        popupDOM.style.display = 'block';
    });

    // 2. Lorsque l'utilisateur clique sur la croix en haut à droite de la popup d'aide (classe close-button), fermer la popup
    let closeButtonDOM = document.querySelector('.close-button');
    
    closeButtonDOM.addEventListener('click', function() {
        popupDOM.style.display = 'none';
    });
    
    // 3. Lorsque l'utilisateur clique sur l'icône menu (en haut à gauche), ouvrir / fermer le menu gauche
    let menuButtonDOM = document.querySelector('.js-menu');
    let leftPanelDOM = document.querySelector('.left-panel');
    let isMenuLeftOpen = true;
    menuButtonDOM.addEventListener('click', function () {
        isMenuLeftOpen = !isMenuLeftOpen;
        
        if (isMenuLeftOpen === true) {
            leftPanelDOM.style.display = 'block';
    
        } else {
            leftPanelDOM.style.display = 'none';
        }
    });
    
    // 4. Lorsque l'utilisateur appuie sur la touche F (comme fullscreen)
    // Afficher / masquer le header et le footer
    let headerDOM = document.querySelector('.header');
    let footerDOM = document.querySelector('.footer');
    
    let isHeadAndFootOpen = true;
    document.addEventListener('keydown', function(event) {
        let key = event.key.toUpperCase();
        
        if (key === 'F') {
            isHeadAndFootOpen = !isHeadAndFootOpen;
        }
        
        if (isHeadAndFootOpen) {
            headerDOM.style.display = 'block';
            footerDOM.style.display = 'block';
        } else {
            headerDOM.style.display = 'none';
            footerDOM.style.display = 'none';
        }
    });
});
