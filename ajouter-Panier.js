import { games } from "./data.js";
import { afficherJeux } from "./main.js";


let panier = [];
const btnAdd = document.getElementById("btnAdd");

export function ajouterPanier(id_jeu){
    const jeuChoisi = games.find(jeu=> jeu.id===id_jeu);
    const  jeuPanier = panier.find(e=>e.id===id_jeu)
    if(jeuPanier){
        jeuPanier.quantite+=1;
        console.log(panier);
    }else{
        panier.push({...jeuChoisi,quantite:1});
    
    }
    document.getElementById
}