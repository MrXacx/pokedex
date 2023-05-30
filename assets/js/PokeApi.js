let pokeApi = {};

pokeApi.getPokemonDetails = function(pokemon){
	return fetch(pokemon.url)
		.then(details => details.json());
}

pokeApi.getPokemons = function(offset = 0, limit = 12){
	return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)  // Issue an async GET request to API
		.then( response =>  response.json()) // Convert Promise getted to json
		.then( jsonBody => jsonBody.results) // Get result list from request
		.then( pokemons => pokemons.map(pokeApi.getPokemonDetails))
		.then( detailsRequest => Promise.all(detailsRequest))
		.then( pokemonList => pokemonList.map(pokemon => new PokemonModel(pokemon)))
		
		.catch( error => console.log(error)); // Print the error
}


pokeApi.getPokemon = function(name){
	return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)  // Issue an async GET request to API
		.then( response =>
						response.json()
							.then(json => new PokemonModel(json))) // Convert Promise getted to json
		.then( pokemon => 
			Promise.all(pokemon.abilities.map(pokeApi.getAbility))
					.then( abilityList => {
						pokemon.abilities = abilityList
						return pokemon;
					}))
		.then( pokemon => 
			Promise.all(pokemon.moves.map(pokeApi.getMove))
					.then( moveList =>{
						pokemon.moves = moveList
						return pokemon;

					}))
		.catch( error => console.log(error)); // Print the error
}


pokeApi.getAbility= function(ability){
	return fetch(ability.url)  // Issue an async GET request to API
		.then( response =>  response.json()) // Convert Promise getted to json
		.then( ability => new AbilityModel(ability))
		.catch( error => console.log(error)); // Print the error
}

pokeApi.getMove= function(move){
	return fetch(move.url)  // Issue an async GET request to API
		.then( response =>  response.json()) // Convert Promise getted to json
		.then( move => new MoveModel(move))
		.catch( error => console.log(error)); // Print the error
}

