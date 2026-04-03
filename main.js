import { games } from "./data.js";
import { SearchInput } from "./search.js";
import { FiltrerCategory } from "./category.js";
const boite = document.getElementById("games-container");


export function afficherJeux(listeJeux){
    boite.innerHTML="";
    listeJeux.forEach(jeux => {
        const carteHTML = `
        <div class="flex flex-col w-full h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
            
            <div class="relative w-full h-[250px] shrink-0">
                <img src="${jeux.image}" alt="${jeux.title}" class="w-full h-full object-cover">
                
                <span class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    ${jeux.category}
                </span>
            </div>
            
            <div class="flex flex-col flex-grow p-5">
                
                <div class="flex justify-between items-start gap-2 mb-4">
                    <h2 class="text-xl font-bold text-white line-clamp-2">${jeux.title}</h2>
                    <span class="text-lg font-extrabold text-purple-400 whitespace-nowrap">${jeux.price}$</span>
                </div> 
                
                <div class="mt-auto w-full">
                    <button id="btnAdd" class="w-full bg-gray-800 hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition-colors duration-300">
                        Add to cart
                    </button>
                </div>
                
            </div>
            
        </div>`;
        
        boite.innerHTML += carteHTML;
    });
}

afficherJeux(games);
SearchInput();
FiltrerCategory(games);