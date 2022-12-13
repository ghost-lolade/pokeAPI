import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./services/pokemon.service";

class App {
    public app: Application;

    constructor() {

        this.app = express();
        this.setConfig();
        this.setControllers();
    }

    private setConfig() {
        // Allows us to receive requests with darta in json format
        this.app.use(bodyParser.json({ limit: "50mb"}));

        // Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

        // Enables cors
        this.app.use(cors());
    }

    private setControllers(): void {

        // Creating a new instance of Pokemon Controller
        const pokemonController = new PokemonController(new PokemonService());

        // Telling express to use out controller's routes
        this.app.use("/pokemon", pokemonController.router);
    }
}

export default new App().app;