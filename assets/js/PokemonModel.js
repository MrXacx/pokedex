class PokemonModel{

	constructor (pokemon){
		this.number = pokemon.id;
		this.name = pokemon.name;
		this.types = pokemon.types.map(typeSlot => typeSlot.type.name);
		[this.type] =this.types;
		this.photo = pokemon.sprites.other.dream_world.front_default;
	}

}

