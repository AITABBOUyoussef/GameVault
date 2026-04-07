import { getPanier } from "./cart-data.js";

const cartContainer = document.getElementById("cart-items-container");
const totalArticles = document.getElementById("total-articles");
const prixTotalElement = document.getElementById("prix-total");

export function afficherPanier() {
    let panier = getPanier(); 
    cartContainer.innerHTML = "";
    
    if (panier.length === 0) {
        cartContainer.innerHTML = `<p class="text-gray-400 text-lg text-center mt-10">Votre coffre-fort est vide.</p>`;
        mettreAJourTotal(panier);
        return;
    }

    for (let i = 0; i < panier.length; i++) {
        let jeu = panier[i];
        
        const itemHTML = `
        <div class="bg-[#1a1a24] p-4 rounded-2xl flex items-center justify-between shadow-lg mb-4 border border-gray-800">
            <div class="flex items-center gap-4">
                <img src="${jeu.image}" alt="${jeu.title}" class="w-20 h-20 object-cover rounded-xl">
                <div>
                    <h2 class="text-xl font-bold text-white">${jeu.title}</h2>
                    <p class="text-gray-400 text-sm">${jeu.category}</p>
                    <div class="flex items-center gap-3 mt-2 bg-[#0b0b0e] w-fit px-3 py-1 rounded-full">
                        <button onclick="diminuerQuantite(${jeu.id})" class="text-gray-400 hover:text-white cursor-pointer px-2">-</button>
                        <span class="text-white font-bold">${jeu.quantite}</span>
                        <button onclick="augmenterQuantite(${jeu.id})" class="text-gray-400 hover:text-white cursor-pointer px-2">+</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-end gap-3">
                <p class="text-xl font-bold text-purple-400">${(jeu.price * jeu.quantite).toFixed(2)}$</p>
                <button onclick="supprimerJeu(${jeu.id})" class="text-gray-500 hover:text-red-500 transition p-2 bg-[#0b0b0e] rounded-xl hover:bg-red-500/10 cursor-pointer">
                    🗑️
                </button>
            </div>
        </div>`;
        
        cartContainer.innerHTML += itemHTML;
    }

    mettreAJourTotal(panier);
}

function mettreAJourTotal(panier) {
    let prixTotal = 0;
    let nbArticles = 0;

    for (let i = 0; i < panier.length; i++) {
        prixTotal += panier[i].price * panier[i].quantite;
        nbArticles += panier[i].quantite;
    }
    
    totalArticles.innerText = nbArticles;
    prixTotalElement.innerText = prixTotal.toFixed(2) + "$";
}