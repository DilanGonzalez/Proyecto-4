const contenedor = document.getElementById('contenedor-pokemones');

//funcion asincronica async/await
const main = async () => {
    //ciclo para crear 6 pokemones
    for (let i = 0; i < 6; i++) {
        //genera un numero entero entre 1 y 248(la cantidad de pokemones que tien la API) y lo guarda en la constante poke_id
        const poke_id = Math.floor(Math.random() * 248);
        //el programa hace una pausa hasta que con el numero random que se genero en el poke_id vaya a la pokeapi y regrese un valor que guardara en la const data
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}`);
        //nuevamente se pausa el programa  para que el json() tome  al objeto del data y lo guarde en la constante pokemon
        const pokemon = await data.json();

        //mostrara en el html el nombre del pokemon y su imagine
        contenedor.innerHTML +=
        `<div class="tarjeta">
        <h2>${pokemon.name}</h2>
        <img src=${pokemon.sprites.front_default} />
        </div>`;
    }

}

main();