import { Personaje  } from "../Personaje.js";

export class Consejero extends Personaje {
    #especialidad;
    constructor(nombre,edad,vivo,casa,especialidad) {
        super(nombre,edad,vivo,casa);
        this.#especialidad = especialidad;
    }
    luchar(params) {
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
    }

    aconsejar(personaje){
        console.log(this.nombre + " aconseja a " + personaje.nombre + " sobre " + this.especialidad);
    }
    get especialidad(){
        return this.#especialidad;
    }

    set especialidad(especialidad){
        this.#especialidad = especialidad;
    }
}