import { games } from "./data.js";

const boite = document.getElementById("games-container");

function afficherJeux(listeJeux) {
    // 1. Kan khwiw l'boite bach matb9ach mkhrb9a
    boite.innerHTML = "";
    
    // 2. Kan doro 3la les jeux
    listeJeux.forEach(jeux => {
        const carteHTML = `
<div class="bg-[#1a1a24] rounded-2xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 group">
    
    <div class="relative w-full h-[250px]">
        <img src="${jeux.image}" alt="${jeux.title}" class="w-full h-full object-cover">
        
        <span class="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
            ${jeux.category}
        </span>
    </div>

    <div class="p-5 flex flex-col flex-grow">
        
        <div class="flex justify-between items-start gap-4 mb-4">
            <h2 class="text-xl font-bold text-white line-clamp-2">${jeux.title}</h2>
            <span class="text-xl font-extrabold text-purple-400 whitespace-nowrap">${jeux.price}$</span>
        </div>
        
        <div class="flex-grow"></div>
        
        <button class="w-full mt-4 bg-[#2a2a35] hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Add to Vault
        </button>
    </div>
    
</div>`;
        boite.innerHTML += carteHTML;
    });
}

afficherJeux(games);