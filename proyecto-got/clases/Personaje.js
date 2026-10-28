export class Personaje {
    #nombre;
    #edad;
    #casa;
    constructor(nombre,edad,casa) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#casa = casa;
    }

    //metodos
    presentacion(){
        console.log("Soy "+ this.nombre + " de la Casa " + this.casa.nombre);
    }

    //getters
    get nombre(){
        return this.#nombre;
    }
    get edad(){
        return this.#nombre;
    }
    get casa(){
        return this.#casa;
    }

    //setters
    set nombre(nombre){
        this.#nombre = nombre;
    }
    set edad(edad){
        this.#edad = edad;
    }
    set casa(casa){
        this.#casa = casa;
    }
}