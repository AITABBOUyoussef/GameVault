export function getPanier() {
    const panierSauvgarde = localStorage.getItem("VaultCart");
    if (panierSauvgarde) {
        return JSON.parse(panierSauvgarde);
    } else {
        return [];
    }
}

export function savePanier(panier) {
    localStorage.setItem("VaultCart", JSON.stringify(panier));
}