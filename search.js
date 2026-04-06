import { games } from "./data.js";
import { afficherJeux } from "./main.js";

const input = document.getElementById("input");

export function SearchInput() {
    input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
        
        // 1. Kancreew tableau khawi
        const resultat = [];
        
        // 2. Kandoro 3la ga3 les jeux b boucle FOR
        for (let i = 0; i < games.length; i++) {
            // 3. Ila lqina smya katchbeh dakchi li tktb, kanzidouha f resultat
            if (games[i].title.toLowerCase().includes(value)) {
                resultat.push(games[i]);
            }
        }
        
        // 4. Kan'affichiw resultat
        afficherJeux(resultat);
    });
}