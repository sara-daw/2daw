import { Personaje  } from "../Personaje.js";

export class Rey extends Personaje {
    #aniosReinado;
    constructor(nombre,edad,vivo,casa,aniosReinado) {
        super(nombre,edad,vivo,casa);
        this.#aniosReinado = aniosReinado;
    }

    luchar(params) {
        console.log(this.nombre + "lidera la batlla y anima a sus tropas")
    }

    gobernar(){
        console.log(`${this.nombre} gobierna con sabiduria desde hace ${this.aniosReinado} años.`);
    }

    get aniosReinado(){
        return this.#aniosReinado;
    }

    set aniosReinado(aniosReinado){
        this.#aniosReinado = aniosReinado;
    }
}