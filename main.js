import { games } from "./data.js";
const boite = document.getElementById("games-container");

function afficherJeux(listeJeux){
    boite.innerHTML="";
    listeJeux.forEach(jeux => {
        const carteHTML = `
        <div class="flex flex-col w-full h-full rounded-3xl overflow-hidden shadow-lg bg-[#a855f7]">
            
            <div class="relative w-full h-[260px] shrink-0 bg-[#1a1a24]">
                <img src="${jeux.image}" alt="${jeux.title}" class="w-full h-full object-cover">
            </div>
            
            <div class="w-full flex flex-col flex-grow p-4">
                
                <div class="flex justify-between items-center w-full mb-3">
                    <span class="bg-green-500 rounded-xl px-3 py-1 flex justify-center items-center h-8 shadow-md">
                        <p class="text-sm font-medium text-white">${jeux.category}</p>
                    </span>
                    <p class="text-xl font-semibold text-white drop-shadow-md">${jeux.price}$</p>
                </div> 
                
                <div class="flex mb-4">
                    <p class="text-xl md:text-2xl font-semibold text-white line-clamp-2">${jeux.title}</p>
                </div>
                
                <div class="flex mt-auto justify-center items-center w-full">
                    <button class="bg-sky-500 w-full p-3 rounded-3xl text-xl font-bold text-white hover:bg-sky-400 hover:shadow-lg transition-all cursor-pointer">add to cart</button>
                </div>
                
            </div>
            
        </div>`;
        boite.innerHTML += carteHTML;
    });
}

afficherJeux(games);