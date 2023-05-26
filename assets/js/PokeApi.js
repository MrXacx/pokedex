let pokeApi = {}

pokeApi.getPokemons = function(offset = 0, limit = 10){
	return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)  // Issue an async GET request to API
		.then( response =>  response.json()) // Convert Promise getted to json
		.then( jsonBody => jsonBody.results) // Get result list from request
		.catch( error => console.log(error)); // Print the error
}
