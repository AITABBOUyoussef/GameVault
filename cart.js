const panierSauvgarde = localStorage.getItem("VaultCart");
let panier = panierSauvgarde ? JSON.parse(panierSauvgarde):[];

const cartContainer = document.getElementById("cart-items-container");
const totalArticles = document.getElementById("total-articles");
const sousTotalElement = document.getElementById("sous-total");
const tvaElement = document.getElementById("tva");
const prixTotalElement = document.getElementById("prix-total");

function afficherPanier(){
    cartContainer.innerHTML="";
    if(panier.length === 0){
        cartContainer.innerHTML = `<p class="text-gray-400 text-lg">Votre coffre-fort est vide.</p>`;
        mettreAJourTotal();
        return;
    }
    panier.forEach(jeu => {
        const itemHTML = `
        <div class="bg-[#1a1a24] p-4 rounded-2xl flex items-center justify-between shadow-lg mb-4 border border-gray-800">
            <div class="flex items-center gap-4">
                <img src="${jeu.image}" alt="${jeu.title}" class="w-20 h-20 object-cover rounded-xl">
                <div>
                    <h2 class="text-xl font-bold text-white">${jeu.title}</h2>
                    <p class="text-gray-400 text-sm">${jeu.category}</p>
                    
                    <div class="flex items-center gap-3 mt-2 bg-[#0b0b0e] w-fit px-3 py-1 rounded-full">
                        <button class="text-gray-400 hover:text-white">-</button>
                        <span class="text-white">${jeu.quantite}</span>
                        <button class="text-gray-400 hover:text-white">+</button>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col items-end gap-3">
                <p class="text-xl font-bold text-purple-400">${jeu.price}$</p>
                <button class="text-gray-500 hover:text-red-500 transition p-2 bg-[#0b0b0e] rounded-xl hover:bg-red-500/10">
                    🗑️
                </button>
            </div>
        </div>`;
        
        cartContainer.innerHTML += itemHTML;
    });

    mettreAJourTotal();
}
function mettreAJourTotal(){
    let prixTotal = 0;
    let nbArticles = 0;

    panier.forEach(jeu => {
        prixTotal+=jeu.price*jeu.quantite;
        nbArticles += jeu.quantite;
    })
totalArticles.innerText = nbArticles;

    prixTotalElement.innerText = prixTotal.toFixed(2) + "$";
}

afficherPanier();
