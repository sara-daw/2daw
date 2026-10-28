export class Arma {
    #nombre;
    #danio;
    #tipo;
    constructor(nombre,danio,tipo) {
        this.#nombre=nombre;
        this.#danio=danio;
        this.#tipo=tipo;
    }

    //metodos
    descripcion(){
        console.log(this.nombre +"("+ this.tipo +")"+ " - daño: " + this.daño);
    }

    //getters
    get nombre(){
        return this.#nombre;
    }
    get danio(){
        return this.#danio;
    }
    get tipo(){
        return this.#tipo;
    }

    //setters
    set nombre(nombre){
        this.#nombre=nombre;
    }
    set danio(danio){
        this.#danio=danio;
    }
    set tipo(tipo){
        this.#tipo=tipo;
    }
}