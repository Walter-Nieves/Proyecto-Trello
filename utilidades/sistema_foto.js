import Elementos from "./elementos.js";
import { usuario } from "./sistema_usuarios.js";
//import extractFrom from "extract-uri-image";



export function cambiarFoto() {
    Elementos.changeImagePrevia.src = Elementos.imgPhoto.src;
    Elementos.modalFoto.classList.remove("modal-hidden");

}

export function cancelarModificarFoto() {
    Elementos.modalFoto.classList.add("modal-hidden");
    setTimeout(() => {
        Elementos.changeImagePrevia.src = "./imagen/user.svg"
        Elementos.formModalFoto.reset();
    }, 300);

}


export function cambiarFotoUrl() {

    let nuevaFoto = prompt("Ingresa el enlace a la nueva foto");

    if (nuevaFoto == null) {
        return;
    }

    const fotoPrueba = new Image();

    fotoPrueba.onload = async () => {
        try {
            const resultado = await extractFrom.url(nuevaFoto);
            Elementos.changeImagePrevia.src = resultado;
        } catch (error) {
            Elementos.changeImagePrevia.src = error;
        }
    };

    fotoPrueba.onerror = () => {
        alert("Url no valido");
    }

    fotoPrueba.src = nuevaFoto;
}

export async function cambiarFotoFile(event) {

    const input = event.target;

    if(input.files[0] == undefined) return;

        try {
            const resultado = await extractFrom.input(input);
            Elementos.changeImagePrevia.src = resultado;
        } catch (error) {
            Elementos.changeImagePrevia.src = error;
        }
    
}



export function aceptarModificarFoto(event){
    event.preventDefault();

        //consultar si existe la base de datos "Usuarios"
        const baseUsuariosExiste = localStorage.getItem("Usuarios");
        let baseUsuarios = [];
    
        //si no existe la base de datos,arrojar un error diciendo que no esta registrado o encontrado 
        if(!baseUsuariosExiste){
            alert("Error al acceder a la base de datos")
            return;

        }
        //si existe, fusionarlo con el arreglo vacio 
        baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));

        const usuarioExistente= baseUsuarios.find(usuarioBuscar => usuarioBuscar.correo.toLowerCase() == usuario.actual.correo.toLowerCase());

        if(!usuarioExistente){
            alert("Error al cambiar la foto de perfil");
            return;
        }

        usuario.temporal.foto = Elementos.changeImagePrevia.src;

        Elementos.imgPhoto.src = usuario.temporal.foto;

        Elementos.modalFoto.classList.add("modal-hidden");
    
        alert("Se ha modificado el usuario correctamente \nPresione 'Guardar' para confirmar cambios");

        setTimeout(() => {
            Elementos.formModalFoto.reset();
        }, 300);
    
}



