import { Pokemon } from "../models/pokemon.model"
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";

export class PokemonService {
    
    public getWelcomeMessage(): string {
        return WELCOME_MESSAGE;
    }
}