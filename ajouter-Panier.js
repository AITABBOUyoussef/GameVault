import { games } from "./data.js";
import { savePanier } from "./cart-data.js";
import { getPanier } from "./cart-data.js";
let panier = getPanier();
document.getElementById("cart-count").innerText = panier.length;

export function ajouterPanier(id_jeu) {
    
   
    let jeuChoisi = null;
    for (let i = 0; i < games.length; i++) {
        if (games[i].id === id_jeu) {
            jeuChoisi = games[i];
            break; 
        }
    }
 let jeuPanier = null;
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].id === id_jeu) {
            jeuPanier = panier[i];
            break;
        }
    }
  if (jeuPanier !== null) {
       jeuPanier.quantite += 1;
    } else {
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
    savePanier(panier);
}