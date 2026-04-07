import { games } from "./data.js";
import { afficherJeux } from "./main.js";

const input = document.getElementById("input");

export function SearchInput() {
    input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
   
        
        const resultat = [];

        for (let i = 0; i < games.length; i++) {
            if (games[i].title.toLowerCase().includes(value)) {
                resultat.push(games[i]);
            }
        }
        
      
        afficherJeux(resultat);
    });
}