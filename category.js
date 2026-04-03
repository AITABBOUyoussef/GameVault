import { games } from "./data.js";
import { afficherJeux } from "./main.js";
const category = document.getElementById("category");

export function FiltrerCategory(games) {

  category.addEventListener("click", (e) => {

    const categorie = e.target.dataset.name;

    if (categorie === "All") {      
      afficherJeux(games)
    }
    else {
      const result = [];
      for (let i = 0; i < games.length; i++) {
        if (games[i].category.toLowerCase() === categorie.toLowerCase()) {
          result.push(games[i])

        }
      }
      afficherJeux(result)
      
    }
  });
}