import { games } from "./data.js";
import { afficherJeux } from "./main.js";

const input = document.getElementById("input");

 export function SearchInput(){
input.addEventListener("input", () => {
const value = input.value.toLowerCase();



const result = games.filter(game =>
   game.title.toLowerCase().includes(value)
  ); afficherJeux(result)
});}

