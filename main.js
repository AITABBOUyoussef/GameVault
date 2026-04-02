import { games } from "./data.js";
const boite = document.getElementById("games-container");
function afficherJeux(listeJeux){
    boite.innerHTML="";
     listeJeux.forEach(jeux => {
        const carteHTML=
    `<div class="flex justify-center items-center flex-col  w-full">
    <img src="${jeux.image}" alt="" class="w-full  h-56 object-cover ">
<div class="bg-purple-600 min-h w-full rounded-b-3xl flex flex-col">
    <div class="flex justify-around p-4">
        <span  class="bg-green-500 rounded-xl flex justify-center items-center w-auto p-1 max-md:h-5 h-7 "><p class="text-lg font-medium ">${jeux.category}</p></span>
    <p class="text-xl font-semibold">${jeux.price}$</p></div> 
    <div class="flex ml-5 m-2"><p class="text-2xl font-semibold">${jeux.title}</p></div>
    <div class="flex m-2 justify-center items-center"><button class="bg-sky-500 p-3 rounded-3xl text-xl font-bold">add to cart</button></div>
</div>
</div>`
boite.innerHTML += carteHTML;
});
}
afficherJeux(games)



