import { Arma  } from "./clases/Arma.js";
import { Casa  } from "./clases/Casa.js";
import { Personaje  } from "./clases/Personaje.js";
import { Reino  } from "./clases/Reino.js";
import { Rey } from "./clases/personajesEspeciales/Rey.js";
import { Consejero } from "./clases/personajesEspeciales/Consejero.js";
import { Guerrero } from "./clases/personajesEspeciales/Guerrero.js";



let aguja = new Arma("Aguja",15,"espada");
let garra = new Arma("Garra",25,"espada");
let robert = new Rey("Robert Baratheon",40,true,undefined,15);
let tyrion = new Consejero("Tyrion Lannister",30,true,undefined,"ganar batalla");
let jon = new Guerrero("Jon Snow",20,true);
let casaStark = new Casa("Stark","Ejemplo de lema",[]);
let casaLannister = new Casa("Lannister","Ejemplo de lema",[]);
let reinoPoniente = new Reino("Poniente",undefined,[]);

casaStark.aniadirMiembro(jon);
jon.arma=garra;
jon.presentacion();
jon.luchar();
jon.entrenar();
casaLannister.aniadirMiembro(tyrion);
tyrion.presentacion();
tyrion.aconsejar(robert);
casaLannister.aniadirMiembro(robert);
robert.gobernar();
robert.luchar();

