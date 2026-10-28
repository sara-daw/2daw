import { Personaje  } from "../Personaje.js";

export class Guerrero extends Personaje {
    #arma;
    #vivo;
    #vida;
    constructor(nombre,edad,vivo,casa,arma) {
        super(nombre,edad,vivo,casa);
        this.#arma = arma;
        this.vivo = true;
        this.#vida = 100;
    }
    luchar(params) {
        console.log(`${this.nombre} ataca con su ${this.arma.nombre}, causando ${this.arma.daño} puntos`);
    }
    entrenar(){
        console.log(this.nombre +" se entrana sin descanso para la proxima batalla");
    }
    morir(){
        this.vivo = false;
        console.log(this.nombre + " ha muerto");
    }
    recibirDanio(puntos) {
        this.vida -= puntos;
        if (this.vida <= 0) {
            this.vida = 0;
            this.morir();
        }
    }

    atacar(objetivo) {
        const danio = Math.floor(this.arma.danio * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${danio} puntos de daño.`);
        objetivo.recibirDanio(danio);
    }
    get arma(){
        return this.#arma;
    }

    set arma(arma){
        this.#arma = arma;
    }
    get vida(){
        return this.#vida;
    }

    set vida(vida){
        this.#vida = vida;
    }
    get vivo(){
        return this.#vivo;
    }

    set vivo(vivo){
        this.#vivo = vivo;
    }
}