import mongoose, { model } from "mongoose";
import { IPokemon } from "../pokemon.interface";

const PokemonSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Field is required"] },
    gender: { type: String, required: [true, "Field is required"] },
    type: { type: String, required: [true, "Field is required"] },
    height: { type: Number, required: [true, "Field is required"] },
    Weight: { type: Number, required: [true, "Field is required"] },
    photo: { type: String, required: [true, "Field is required"] },
});

export const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);