import { Guerrero } from "./personajesEspeciales/Guerrero.js";

export class Batalla {
    #muertos = [];
    #supervivientes = [];
    #batallaEnCurso;
    constructor() {
        this.#muertos = [];
        this.#supervivientes = [];
        this.#batallaEnCurso = false;
    }
    iniciarBatalla(casaA,casaB){
        //Impedir que una casa se enfrente a sí misma.
        if(casaA===casaB){
            console.log("Son la misma casa");
            return;
        }

        //Evitar que se inicie una nueva batalla si la batalla actual ya está en curso.
        if(this.batallaEnCurso===true){
            console.log("Ya hay una batalla en curso");
            return;
        }

        let muertosCasaA= [];
        let muertosCasaB= [];
        let guerrerosA = [];
        let guerrerosB = [];

        //Obtener los personajes pertenecientes a cada casa.
        let miembrosA = casaA.miembros;
        let miembrosB = casaB.miembros;

        //Seleccionar únicamente los personajes que sean guerreros. y Excluir del combate a los personajes que no sean guerreros.
        for (let miembro of miembrosA) {
            if(miembro instanceof Guerrero && miembro.vida > 0){
                guerrerosA.push(miembro);
            }
        }
        for (let miembro of miembrosB) {
            if(miembro instanceof Guerrero && miembro.vida > 0){
                guerrerosB.push(miembro);
            }
        }

        //Comprobar que ambas casas disponen de al menos un guerrero vivo.
        if(guerrerosA.length===0 || guerrerosB.length===0){
            console.log("alguna de las 2 casas o las 2 no tienen guerreros vivos");
            return;
        }

        //Inicia la batalla
        /* 
            explicacion de como funciona la batalla, para que no se haga tan pesado leerlo;

            se cogen 2 numeros aleatorios uno para la casaA y otra para la casaB;
            en la condición se comprueba que no hayan muertos ya todos los guerreros de ambas casas;
            en cada ciclo son numeros aleatorios de nuevo.

            el if sirve para que no se repitan los muertos
            mientras los dos guerreros sigan vivos segurian luchando
            lo demas ya es para añadir los muertos al array

            en el final solo se comprueba cual de las 2 casas ha ganado
            si mueren todos, por que esta hecho a posta de que ambos ataquen a la vez, hay empate
        */
        this.batallaEnCurso=true;
        for (let i = Math.floor(Math.random()* guerrerosA.length),j = Math.floor(Math.random()* guerrerosB.length);
            muertosCasaA.length !== guerrerosA.length && muertosCasaB.length !== guerrerosB.length;
            i = Math.floor(Math.random()* guerrerosA.length),j = Math.floor(Math.random()* guerrerosB.length))
            {
                if (guerrerosA[i].vivo === true && guerrerosB[j].vivo === true) {
                    while(guerrerosA[i].vivo === true && guerrerosB[j].vivo === true){
                        guerrerosA[i].atacar(guerrerosB[j]);
                        guerrerosB[j].atacar(guerrerosA[i]);
                    }
                    if(guerrerosA[i].vivo === false){
                        muertosCasaA.push(guerrerosA[i]);
                    }
                    if(guerrerosB[j].vivo === false){
                        muertosCasaB.push(guerrerosB[j]);
                    }
                }
        }
        if(muertosCasaA.length !== guerrerosA.length){
            console.log("la casa "+ casaA.nombre + " ha ganado");
            for (let miembro of casaA.miembros) {
                if(miembro.vivo === true){
                    this.#supervivientes.push(miembro);
                }
            }
        }else if(muertosCasaB.length !== guerrerosB.length){
            console.log("la casa "+ casaB.nombre + " ha ganado");
            for (let miembro of casaB.miembros) {
                if(miembro.vivo === true){
                    this.#supervivientes.push(miembro);
                }
            }
        }else{
            console.log("han muertos todos, hay un empate");
        }
        this.#muertos.push(...muertosCasaA,...muertosCasaB);
        this.batallaEnCurso=false;
        //finaliza la batalla
        
    }
    mostrarGuerrerosMuertosEnCombate(){
        console.log("Lista de muertos:")
        for (let muerto of this.muertos) {
            console.log(muerto.nombre + " ha muerto");
        }
    }
    mostrarSupervivientes(){
        console.log("Lista de supervivientes:")
        for (let superviviente of this.supervivientes) {
            console.log(superviviente.nombre + " ha sobrevivido");
        }
    }
    get muertos(){
        return this.#muertos;
    }
    set muertos(muertos){
        this.#muertos = muertos;
    }
    get supervivientes(){
        return this.#supervivientes;
    }
    set supervivientes(supervivientes){
        this.#supervivientes = supervivientes;
    }
    get batallaEnCurso(){
        return this.#batallaEnCurso;
    }
    set batallaEnCurso(batallaEnCurso){
        this.#batallaEnCurso = batallaEnCurso;
    }
}