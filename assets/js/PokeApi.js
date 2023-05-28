let pokeApi = {}

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
