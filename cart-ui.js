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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
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
panier.forEach(e => 
    {prixTotal += e.price*e.quantite;
    nbArticles+= e.quantite;
});
    
    totalArticles.innerText = nbArticles;
    prixTotalElement.innerText = prixTotal.toFixed(2) + "$";
}