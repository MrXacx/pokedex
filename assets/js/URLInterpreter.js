let id = parseInt(window.location.search.split('?')[1].replace('q=', ''));

if( id >= 1 &&  id  <= 151){
	pokeApi.getPokemon(id)
		.then(pokemon =>	
			document.querySelector('.wrapper').innerHTML = 	
				 	`
						<section class="pokemon ${pokemon.type}">
							<header>
								<div class="details">
									<span class="name">${pokemon.name}</span>
									<ol class="type-list">
										${pokemon.types.map(type => `<li class="type ${type}" title="${type.effect}">${type}</li>`).join('')}
									 </ol>												
									</div>
								<span class="number">#${pokemon.number}</span>
								</header>
								<img class="pokemon-image" src="${pokemon.photo}" alt="${pokemon.name}">			
							</section>
						<section class="stats">
							<section>
								<h2>Abilities</h2>
								<ul class="abilities-list">
									${pokemon.abilities.sort().map(ability => `<li class="${pokemon.type}">${ability.name}</li>`).join('')}
								</ul>
							</section>
							<section>
								<h2>Moves</h2>
								<ul class="moves-list">
									${pokemon.moves.map(move => `<li class="${move.type}">${move.name}</li>`).join('')}
								</ul>
							</section>
						</section>`)

			.catch( error => console.log(error)); // Prinfile:///home/ariel/Workspace/angular/projects/PokeApp/pokemon.html/?q=namet the error on console
}
else if (isNaN(id)){
	window.location.href = './index.html';
}

