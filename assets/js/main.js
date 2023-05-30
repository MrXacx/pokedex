let offset = 0;
let limit = 5;
const maxRecords = 151;
let loadMore = document.getElementById("load-more");

loadPokemonItems(offset, limit);
loadMore.addEventListener('click', evt => {
	offset += limit;
	if(offset+limit >= maxRecords){
		limit =  maxRecords-offset;
		loadMore.parentElement.removeChild(loadMore);
	}
	loadPokemonItems(offset, limit)
	
});

function loadPokemonItems(offset, limit){
	pokeApi.getPokemons(offset, limit).then( pokemonList => document.getElementById('pokemon-list').innerHTML += pokemonList.map(pokemon => 				
				`<li class="pokemon ${pokemon.type}" onclick="redirection('${pokemon.number}')">
					<span class="number">#${pokemon.number}</span>
					<span class="name">${pokemon.name}</span>
					
					<div class="details">
						<ol class="type-list">
							${pokemon.types.map( type  => `<li class="type ${type}">${type}</li>`).join('\n')}						
						</ol>
						
						<img class="pokemon-image" src="${pokemon.photo}" alt="${pokemon.name}">
					</div>
					
				</li>`).join(''))// Insert <li> to <ol> from html
	.catch( error => console.log(error)) // Print the error on console
}

function changeLimit(input){
	let aux = parseInt(input.value);
	if((aux >= 5 && aux <= 50) && aux%5==0){
		limit = aux;
		resetSerch()
		loadPokemonItems(offset, limit);
	}
}

 function resetSerch(){
 	offset = 0;
 	document.getElementById('pokemon-list').innerHTML = "";
 }


function redirection(name){
	window.location.href = `./pokemon.html?q=${name}`;
 }
