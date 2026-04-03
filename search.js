import { games } from "./data.js";
import { afficherGames } from "./UI.js";

const input = document.getElementById("input");

 export function SearchInput(){
input.addEventListener("input", () => {
const value = input.value.toLowerCase();



const result = games.filter(game =>
   game.title.toLowerCase().includes(value)
  ); afficherGames(result)
});}

