import { games } from "./data.js";
import { afficherJeux } from "./main.js";

const input = document.getElementById("input");
const number = document.getElementById("number")

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
// export function SearchNumber(){
//     number.addEventListener("number" , ()=>{
//         const num = number.value;
        
//             const res = games.filter((games) => games.price === num)
//             afficherJeux(res)
        

//     })
//  // result.filter((games) => games.category.toLowerCase() === categorie.toLowerCase())
     
// }