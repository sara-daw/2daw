export class Reino {
    #nombre;
    #rey;
    #casas=[];
    constructor(nombre,rey,casas) {
        this.#nombre=nombre;
        this.#rey=rey;
        this.#casas=casas;
    }

    //metodos
    añadirCasa(casa){
        this.#casas.push(casa);
        console.log("La Casa "+ casa.nombre+ " ha sido añadida al Reino de "+ this.nombre);
    }
    listarCasas(){
        console.log("Casas del Reino "+ this.nombre+":");
        for (let casa of this.casas) {
            console.log("- "+casa.nombre);
        }
    }
    informacionRey(){
        console.log(rey.nombre);
        console.log(rey.edad);
        console.log(rey.vivo);
        console.log(rey.casa);
    }

    //getters
    get nombre(){
        return this.#nombre;
    }
    get rey(){
        return this.#rey;
    }
    get casas(){
        return this.#casas;
    }

    //setters
    set nombre(nombre){
        this.#nombre=nombre;
    }
    set rey(rey){
        this.#rey=rey;
    }
    set casas(casas){
        this.#casas=casas;
    }
}