import { getPanier, savePanier } from "./cart-data.js";
import { afficherPanier } from "./cart-ui.js";

// ==========================================
// LES BOUTONS (+, -, POUBELLE)
// ==========================================

window.augmenterQuantite = function(id) {
    let panier = getPanier(); // njbdo panier
    
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id === id) {
            panier[i].quantite += 1;
            break;
        }
    }
    
    savePanier(panier); // nsauviw
    afficherPanier();   // nrsmo
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

// ==========================================
// L'EXECUTION W BOUTON COMMANDER
// ==========================================

afficherPanier(); // Khtwa lwala: N'affichiw l'panier mli t7el l'page

const btnCommander = document.getElementById("btn-commander");
if (btnCommander) {
    btnCommander.addEventListener("click", () => {
        let panier = getPanier();
        
        if (panier.length === 0) {
           alert("Votre coffre-fort est déjà vide ! Ajoutez des jeux d'abord.");
           return;
        }
        
        alert("Félicitations ! 🎉 Votre commande a été validée avec succès.");
        savePanier([]); // Kan khwiw l'navigateur b tableau khawi
        afficherPanier(); // Kan 3awdo nrsmo bash yban khawi
    });
}