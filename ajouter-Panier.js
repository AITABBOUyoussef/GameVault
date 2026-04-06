import { games } from "./data.js";

const panierSauvgarde = localStorage.getItem("VaultCart");
let panier = panierSauvgarde ? JSON.parse(panierSauvgarde) : [];
document.getElementById("cart-count").innerText = panier.length;

export function ajouterPanier(id_jeu) {
    
    // 1. Nqelbo 3la l'jeu f data.js b boucle FOR
    let jeuChoisi = null;
    for (let i = 0; i < games.length; i++) {
        if (games[i].id === id_jeu) {
            jeuChoisi = games[i];
            break; // Mli nlqawh, kan7bso l'boucle
        }
    }

    // 2. Nqelbo wach had l'jeu deja kayn f l'panier b boucle FOR
    let jeuPanier = null;
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id === id_jeu) {
            jeuPanier = panier[i];
            break;
        }
    }

    // 3. L'Logique dyal l'ajout
    if (jeuPanier !== null) {
        // Ila lqinah f l'panier, kanzido ghir l'quantité
        jeuPanier.quantite += 1;
    } else {
        // Ila malqinahch, kanzidouh kml b push
        panier.push({
            id: jeuChoisi.id,
            title: jeuChoisi.title,
            price: jeuChoisi.price,
            category: jeuChoisi.category,
            image: jeuChoisi.image,
            quantite: 1
        });
    }

    document.getElementById("cart-count").innerText = panier.length;
    localStorage.setItem("VaultCart", JSON.stringify(panier));
}