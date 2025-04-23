import Elementos from "./elementos.js";
import { usuario } from "./sistema_usuarios.js";



export function cambiarFoto() {
    let nuevaFoto = prompt("Ingresa el enlace a la nueva foto");
    if (nuevaFoto == null) {
        return;
    }

    const fotoPrueba = new Image();

    

    fotoPrueba.onload = ()=>{
        Elementos.imgPhoto.src = nuevaFoto;
        usuario.temporal.foto= nuevaFoto;
    };
    
    fotoPrueba.onerror = ()=>{
        alert("Url no valido");
    }

    fotoPrueba.src = nuevaFoto;
}

