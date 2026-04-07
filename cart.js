import { getPanier, savePanier } from "./cart-data.js";
import { afficherPanier } from "./cart-ui.js";


window.augmenterQuantite = function(id) {
    let panier = getPanier(); 
    
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id === id) {
            panier[i].quantite += 1;
            break;
        }
    }
    
    savePanier(panier); 
    afficherPanier();   
};

window.diminuerQuantite = function(id) {
    let panier = getPanier();
    
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id === id) {
            if (panier[i].quantite > 1) {
                panier[i].quantite -= 1;
                savePanier(panier);
                afficherPanier();
            } else if (panier[i].quantite === 1) {
                supprimerJeu(id);
            }
            break;
        }
    }
};

window.supprimerJeu = function(id) {
    let panier = getPanier();
    let nouveauPanier = [];
    
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id !== id) {
            nouveauPanier.push(panier[i]);
        }
    }
    
    savePanier(nouveauPanier);
    afficherPanier();
};


afficherPanier(); 

const btnCommander = document.getElementById("btn-commander");
if (btnCommander) {
    btnCommander.addEventListener("click", () => {
        let panier = getPanier();
        
        if (panier.length === 0) {
           alert("Votre coffre-fort est déjà vide ! Ajoutez des jeux d'abord.");
           return;
        }
        
        alert("Félicitations Votre commande a été validée avec succès.");
        savePanier([]); 
        afficherPanier();
    });
}