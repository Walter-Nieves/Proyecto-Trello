import Elementos from "./elementos.js";
import controlador_vistas from "./controlador.js";
import { usuario } from "./sistema_usuarios.js";
import { traerNotas } from "./sistema_notas.js";


export function cancelarCambioFoto() {
    Elementos.imgHeader.src = usuario.actual.foto;
    Elementos.nombrePerfilHeader.textContent = usuario.actual.nombre.replaceAll("&#60;", "<").replaceAll("&#62;",">");
    controlador_vistas.actualizar_vista(3);

    setTimeout(() => {
        traerNotas(usuario.actual.correo);
    }, 500);
}


export function cambiarDatos() {
    let nuevaFoto = prompt("Ingresa el enlace a la nueva foto");
    if (nuevaFoto == null) {
        return;
    }

    const fotoPrueba = new Image();

    

    fotoPrueba.onload = ()=>{
        Elementos.imgPhoto.src = nuevaFoto;
    };
    
    fotoPrueba.onerror = ()=>{
        alert("Url no valido");
    }

    fotoPrueba.src = nuevaFoto;
}

export function guardarCambioFoto() {
    //extraer el URL de la foto
    let extraerUrl = Elementos.imgPhoto.src;
   
    // buscar en el localStorage la base de datos de usuarios
    const baseUsuariosExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];
    //si no existe error
    if (!baseUsuariosExiste) {
        alert("Error al acceder a la base de datos");
        return;

    }
    // fusionar arreglo vacio con la base de datos
    baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));
    // buscar indice o posicion del usuario
    const indiceUsuarioExistente = baseUsuarios.findIndex(usuarioBuscar => usuarioBuscar.correo == usuario.actual.correo);
    // si el indice es -1 (es decir no lo encontro en el arreglo ), dar error los arreglos empiezan con cero
    if (indiceUsuarioExistente == -1) {
        alert("Error al cambiar la foto de perfil");
        return;
    }

    baseUsuarios[indiceUsuarioExistente].foto = extraerUrl;

    usuario.actual.foto = extraerUrl;

    Elementos.imgHeader.src = extraerUrl;
    
    Elementos.nombrePerfilHeader.textContent = usuario.actual.nombre.replaceAll("&#60;", "<").replaceAll("&#62;",">");

    localStorage.setItem("Usuarios", JSON.stringify(baseUsuarios));

    controlador_vistas.actualizar_vista(3);

    setTimeout(() => {
        traerNotas(usuario.actual.correo);
    }, 500);

}