const panierSauvgarde = localStorage.getItem("VaultCart");
let panier = panierSauvgarde ? JSON.parse(panierSauvgarde) : [];

const cartContainer = document.getElementById("cart-items-container");
const totalArticles = document.getElementById("total-articles");
const prixTotalElement = document.getElementById("prix-total");

function afficherPanier() {
    cartContainer.innerHTML = "";
    
    // Ila kan l'panier khawi
    if (panier.length === 0) {
        cartContainer.innerHTML = `<p class="text-gray-400 text-lg text-center mt-10">Votre coffre-fort est vide.</p>`;
        mettreAJourTotal();
        return;
    }

    // Ila fih sl3a
    panier.forEach(jeu => {
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
    });

    mettreAJourTotal();
}

// Fonction dyal l'7ssab bla TVA (Mbssta)
function mettreAJourTotal() {
    let prixTotal = 0;
    let nbArticles = 0;

    panier.forEach(jeu => {
        prixTotal += jeu.price * jeu.quantite;
        nbArticles += jeu.quantite;
    });
    
    totalArticles.innerText = nbArticles;
    prixTotalElement.innerText = prixTotal.toFixed(2) + "$";
}

// Fonction katsauvi f local storage w katsme9 l'affichage
function actualiserPanier() {
    localStorage.setItem("VaultCart", JSON.stringify(panier));
    afficherPanier();
}

// ==========================================
// L'Makhina dyal les Boutons (Ktbtha nadiya)
// ==========================================

window.augmenterQuantite = function(id) {
    const jeu = panier.find(e => e.id === id);
    if (jeu) {
        jeu.quantite += 1;
        actualiserPanier();
    }
};

window.diminuerQuantite = function(id) {
    const jeu = panier.find(item => item.id === id);
    if (jeu && jeu.quantite > 1) {
        jeu.quantite -= 1;
        actualiserPanier();
    } else if (jeu && jeu.quantite === 1) {
        supprimerJeu(id); // Ila wsslat l 1 w wrekna 3la -, kanms7ouh
    }
};

window.supprimerJeu = function(id) {
    panier = panier.filter(e => e.id !== id);
    actualiserPanier();
}

// Khdemha mli t7el l'page
afficherPanier();


const btnCommander = document.getElementById("btn-commander");
if(btnCommander){
    btnCommander.addEventListener("click", ()=> {
        if(panier.length===0){
           
        }
    })
}