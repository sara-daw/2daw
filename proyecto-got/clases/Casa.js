export class Casa {
    #nombre;
    #lema;
    #miembros=[];
    constructor(nombre,lema,miembros) {
        this.#nombre=nombre;
        this.#lema=lema;
        this.#miembros=miembros;
    }

    //metodos
    aniadirMiembro(miembro){
        this.#miembros.push(miembro);
        miembro.casa=this;
    }
    listarMiembros(){
        console.log("Miembros de la Casa " +  this.nombre);
        for (let miembro of this.miembros) {
            console.log("- "+miembro.nombre);
        }
    }

    //getters
    get nombre(){
        return this.#nombre;
    }
    get lema(){
        return this.#lema;
    }
    get miembros(){
        return this.#miembros;
    }

    //setters
    set nombre(nombre){
        this.#nombre=nombre;
    }
    set lema(lema){
        this.#lema=lema;
    }
    set miembros(miembros){
        this.#miembros=miembros;
    }
}