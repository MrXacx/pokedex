class AbilityModel{
	constructor (ability){
		this.name = ability.name;
		this.effect = ability.effect_entries[1].short_effect.effect;
	}
}

class MoveModel{
	constructor (move){
		this.name = move.name;
		this.type = move.type.name;
	}

}


class PokemonModel{

	constructor (pokemon){
		this.number = pokemon.id;
		this.name = pokemon.name;
		
		this.types = pokemon.types.map(typeSlot => typeSlot.type.name);
		[this.type] =this.types;
		
		this.abilities = pokemon.abilities.map(abilitySlot => abilitySlot.ability);
		this.moves = pokemon.moves.map(moveSlot => moveSlot.move);
		
		
		this.photo = pokemon.sprites.other.dream_world.front_default;
		this.url = pokemon.species.url;
	}

}



