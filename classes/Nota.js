import Plantilla from "./Plantilla.js";

class Nota extends Plantilla {
    constructor( titulo = new String, descripcion = new String, correo = new String) {
       super();
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.correo = correo;
        // 1 pendiente // 2 completo //3  incompleto
        this.estado = 1;
       
    }
    cambiarEstado(nuevo_estado) {
        switch (nuevo_estado) {
            case "Pendiente":
                this.estado = 1;
                break;
            case "Completo":
                this.estado = 2;
                break;
            case "Incompleto":
                this.estado = 3;
                break;
            default:
                throw new Error(`Error: trataste de ingresar ' ${nuevo_estado}' pero los valores validos son 'Pendiente', 'Completo' o 'Incompleto'`);
        }
    }
    colocarValores(objeto) {
        for (const clave in this) {
            this[clave] = objeto[clave];
        }
    }
}


// let nota = new Nota();

// nota.cambiarEstado("Completo")

// console.log(nota.estado)

//si descomento esto se detiene el programa aqui por que verifica que la opcion escojida este correcta incluyendo minusculas y mayusculas
// nota.cambiarEstado("completo")

// nota.cambiarEstado("parrafo")

// console.log(nota.estado)

export default Nota;
