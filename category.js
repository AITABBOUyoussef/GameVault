import { afficherGames } from "./UI.js";
const category = document.getElementById("category");

export function Affichercategory() {
  category.innerHTML = `
    <div class="flex gap-4 flex-wrap justify-center mt-6">

      <button data-name="Action" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-400 transition">
        Action
      </button>

      <button data-name="RPG" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-500 transition">
        RPG
      </button>

      <button data-name="FPS" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-500 transition">
        FPS
      </button>

      <button data-name="all" class="px-6 py-2 bg-gray-500 text-white rounded-full">
        Tous
      </button>

    </div>
  `;
}


export function FiltrerCategory(games) {

  category.addEventListener("click", (e) => {

    const categorie = e.target.dataset.name;

    if (categorie === "all") {      
      afficherGames(games)
    }
    else {
      const result = [];
      for (let i = 0; i < games.length; i++) {
        if (games[i].category.toLowerCase() === categorie.toLowerCase()) {
          result.push(games[i])

        }
      }
      afficherGames(result)
      
    }
  });
}