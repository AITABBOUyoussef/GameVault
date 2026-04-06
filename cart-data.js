// Fonction bash tjib l'panier mn navigateur
export function getPanier() {
    const panierSauvgarde = localStorage.getItem("VaultCart");
    if (panierSauvgarde) {
        return JSON.parse(panierSauvgarde);
    } else {
        return [];
    }
}

// Fonction bash tkhbi l'panier f navigateur
export function savePanier(panier) {
    localStorage.setItem("VaultCart", JSON.stringify(panier));
}