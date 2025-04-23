import Elementos from "./elementos.js";
import controlador_vistas from "./controlador.js";
import Usuario from "../classes/usuario.js";
import { usuario } from "./sistema_usuarios.js";
import { traerNotas } from "./sistema_notas.js";



export function guardarDatos(){
    const baseUsuariosExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];

    if(!baseUsuariosExiste){
        alert("Error al acceder a la base de datos");
        return;
    }
  
    baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));

    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotas = [];

    if(baseNotasExiste){
        baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));

    }

    const indiceUsuarioExiste = baseUsuarios.findIndex(usuarioBuscar => usuarioBuscar.correo = usuario.actual.correo);
    if(indiceUsuarioExiste == -1){
        alert("Error al guardar cambios en la base de datos");
        return;
    }

    const correoTemporal = usuario.actual.correo;

    for(const clave in usuario.temporal){
        usuario.actual[clave]= usuario.temporal[clave];
        baseUsuarios[indiceUsuarioExiste][clave] = usuario.actual[clave];
    }

    baseNotas.forEach(
        (nota)=>{
            if(nota.correo == correoTemporal){
                nota.correo = usuario.actual.correo;
            }
        }
    );

    Elementos.imgHeader.src = usuario.actual.foto;
    Elementos.nombrePerfilHeader.textContent = usuario.actual.nombre.replaceAll("&#60;","<").replaceAll("&#62;",">");
    localStorage.setItem("Notas", JSON.stringify(baseNotas));
    controlador_vistas.actualizar_vista(3);

    setTimeout(() => {
        traerNotas(usuario.actual.correo);
        Elementos.contCategorias.className = `cont-categorias show-category`
    }, 500);

    usuario.temporal = {};
}

export function cancelarDatos(){
    usuario.temporal = {};
    Elementos.imgHeader.src = usuario.actual.foto;
    controlador_vistas.actualizar_vista(3);
    Elementos.nombrePerfilHeader.textContent = usuario.actual.nombre.replaceAll("&#60;","<").replaceAll("&#62;",">");
    setTimeout(() => {
        traerNotas(usuario.actual.correo);
        // quien es contCategorias  y las clases de CSS cont-categorias show-category
        // Elementos.contCategorias.className = `cont-categorias show-category`;
    }, 500);
   
}

export function cambiarDatos(){
    Elementos.nombreModificar.value = usuario.temporal.nombre;
    Elementos.apellidoModificar.value = usuario.temporal.apellido;
    Elementos.edadModificar.value = usuario.temporal.edad;
    Elementos.correoModificar.value = usuario.temporal.correo;
   Elementos.modalDatos.classList.remove("modal-hidden");
}

export  function cancelarModificacion(){
    Elementos.modalDatos.classList.add("modal-hidden");
    setTimeout(() => {
        Elementos.formModalDatos.reset();
    }, 300);
}

export  function aceptarModificacion(event){
    event.preventDefault();
    //consultar si existe la base de datos "Usuarios"
    const baseUsuariosExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];

    //si no existe la base de datos,arrojar un error diciendo que no esta registrado o encontrado 
    if(!baseUsuariosExiste){
        Elementos.pErrorModificar.textContent= "Error al acceder a la base de datos";
        return;
    }
    //si existe, fusionarlo con el arreglo vacio 
    baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));

    let campoCorreo = Elementos.correoModificar.value.replaceAll("<","&#60;").replaceAll(">","&#62;");

    const usuarioExistente = baseUsuarios.find(usuarioBuscar => usuarioBuscar.correo.toLowerCase()== campoCorreo.toLowerCase());

    //si el usuario existe , y no es el mismo arrojar un error
    if(usuarioExistente){
        if(usuarioExistente.correo != usuario.actual.correo){
            Elementos.pErrorModificar.textContent = "El nuevo correo ya fue usado por otra cuenta";
            return;
        }
    }
    //la clave anterior no es la misma
    let campoClaveAnterior = Elementos.claveModificar.value.replaceAll("<","&#60;").replaceAll(">","&#62;");

    if(campoClaveAnterior != usuario.actual.clave){
        Elementos.pErrorModificar.textContent = "La clave anterior no es la misma";
        return;
    }

    //la clave nueva y su confirmacion no son la misma
    let campoClaveNueva = Elementos.claveNuevaModificar.value;
    let campoClaveNuevaConfirmar = Elementos.claveNuevaConfirmacionModificar.value;
    if(campoClaveNueva != campoClaveNuevaConfirmar){
        Elementos.pErrorModificar.textContent = "La clave nueva y su confirmacion no son la misma ";
        return;
    }

    //si todo esta bien,modificar el usuario 
    Elementos.pErrorModificar.textContent = "";

    usuario.temporal.nombre = Elementos.nombreModificar.value.replaceAll("<","&#60;").replaceAll(">","&#62;");
    usuario.temporal.apellido = Elementos.apellidoModificar.value.replaceAll("<","&#60;").replaceAll(">","&#62;");
    usuario.temporal.edad = Elementos.edadModificar.value.replaceAll("<","&#60;").replaceAll(">","&#62;");
    usuario.temporal.correo = campoCorreo;
    usuario.temporal.clave = campoClaveNueva;

    Elementos.nombrePerfil.textContent = usuario.temporal.nombre.replaceAll("<","&#60;").replaceAll(">","&#62;")+ " "+ usuario.temporal.apellido.replaceAll("&#60;","<").replaceAll("&#62;",">");
    Elementos.modalDatos.classList.add("modal-hidden");

    alert("Se ha modificado el usuario correctamente \nPresione 'Guardar' para confirmar cambios");
    setTimeout(() => {
        Elementos.formModalDatos.reset();
    }, 300);
}
