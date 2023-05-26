function convertPokemonToLi(pokemon){
	return `
					<li class="pokemon">
						<span class="number">#001</span>
						<span class="name">${pokemon.name}</span>
						
						<div class="details">
							<ol class="type-list">
								<li class="type">Grass</li>
								<li class="type">Poison</li>
							</ol>
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
						</div>
						
					</li>`;
}

pokeApi.getPokemons().then( pokemonList => {
	document.getElementById('pokemon-list').innerHTML = pokemonList.map(convertPokemonToLi).join('') // Insert <li> to <ol> from html
})
.catch( error => console.log(error)) // Print the error on console
	


