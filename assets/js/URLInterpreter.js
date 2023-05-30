let id = parseInt(window.location.search.split('?')[1].replace('q=', ''));

if( id >= 1 &&  id  <= 151){
	pokeApi.getPokemon(id)
		.then(pokemon =>	{
			// First box
			document.querySelector('.pokemon').classList.add(pokemon.type);
		    document.querySelector('.name').innerHTML = 	pokemon.name;
		    document.querySelector('.type-list').inneHTML  = pokemon.types.map(type => `<li class='type ${type}'>${type}</li>`).join('');
		    document.querySelector('.number').innerHTML = `#${pokemon.number}`;
		    let pokemonImg = document.querySelector('.pokemon-image');
		    pokemonImg.src = pokemon.photo;
		    pokemonImg.alt = pokemon.name;
		    	    
		    document.querySelector('.ability-list').innerHTML = pokemon.abilities.map(ability =>  `<li class='${pokemon.type}' >${ability.name}</li>`).join('');
		    document.querySelector('.move-list').innerHTML = pokemon.moves.map(move =>  `<li class='${move.type}'>${move.name}</li>`).join('');
		    
		    
		    
		})
		.catch( error => console.log(error)); // Prinfile:///home/ariel/Workspace/angular/projects/PokeApp/pokemon.html/?q=namet the error on console
} else if (isNaN(id)) {
	window.location.href = './index.html';
} else {
	document.querySelector('.pokemon').classList.add(	'null');
	document.querySelector('.name').innerHTML = 	'These pokemon is not found';
	document.querySelector('.number').innerHTML = '#???';
	 let pokemonImg = document.querySelector('.pokemon-image');
	 pokemonImg.id = 'not-found';
    pokemonImg.src = 'assets/img/not_found.png';
    pokemonImg.alt = 'pokemon is not found';
}


