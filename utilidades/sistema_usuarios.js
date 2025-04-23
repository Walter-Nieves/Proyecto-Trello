import Elementos from "./elementos.js";
import controlador_vistas from "./controlador.js";
import Usuario from "../classes/usuario.js";

export const usuario = { 
    actual: {},
    temporal: {},

};


export function registrarusuario(event) {
    event.preventDefault();
    //verificamos si el arreglo de usuario existe
    const baseUsuariosExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];
    // si el usuario existe quiere decir que probablemente tenga usuarios ya registrados dentro
    if (baseUsuariosExiste) {
        //combinar arreglo vacio con datos obtenidos del localStorage
        baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));
        //buscamos en dicho arreglo si existe un usuario ya registrado con el correo que pusimos en el campo de registro
        const usuarioExistente = baseUsuarios.find(user=> user.correo.toLowerCase() == Elementos.correoRegis.value.toLowerCase());
        // si el usuario existe arrojar un error
        if (usuarioExistente != undefined) { // aqui tambien podriamos dejar el condicional de esta manera  if(usuarioExistente)
            Elementos.pErrorRegis.textContent = "Ya hay alguien registrado con este correo"
            return;
        }
    }

    // sin importr si existe o no el usuario preguntamos si la clave de confirmacion es la misma
    if (Elementos.claveRegis.value != Elementos.claveConfirmRegis.value) {
        Elementos.pErrorRegis.textContent = "La contraseña deber ser la misma"
        return;
    }


    //si no hay ningun error,vaciamos el parrafo de error
    Elementos.pErrorRegis.textContent = "";
    //tambien creamos un objeto con los datos a guardar
    const usuarioGuardar = new Usuario(
        // baseUsuarios.length,
        Elementos.nombreRegis.value.replaceAll("<", "&#60;").replaceAll(">","&#62;"),
        Elementos.apellidoRegis.value.replaceAll("<", "&#60;").replaceAll(">","&#62;"),
        Elementos.edadRegis.value.replaceAll("<", "&#60;").replaceAll(">","&#62;"),
        Elementos.correoRegis.value.toLowerCase().replaceAll("<", "&#60;").replaceAll(">","&#62;"),
        Elementos.claveRegis.value.replaceAll("<", "&#60;").replaceAll(">","&#62;"),
        "./imagen/user.svg"
    );
    //sin importar si el arreglo exite o no ,agregamos el usuario al arreglo
    baseUsuarios.push(usuarioGuardar);
    //localStorge no entiende los arreglos ,asi que lo convertimos en JSON
    const stringBaseUsuarioConUsuarioGuardado = JSON.stringify(baseUsuarios);
    //guardamos el JSON bajo la clave "usuarios",ya que no queremos mezclar los usuarios con las notas ,ambos estaran en arreglos
    localStorage.setItem("Usuarios", stringBaseUsuarioConUsuarioGuardado);
    //luego de haber  guardado en localStorage ,felicitamos al usuario 
    alert("¡Usuario registrado con exito!");
    //borramos los campos 
    setTimeout(
        () => {
            Elementos.formRegis.reset();
        }, 500);

    //ayudamos al usuario colocandole el correo en el formLogin
    Elementos.correoLogin.value = Elementos.correoRegis.value;
    // nos vamos para form login
    controlador_vistas.actualizar_vista(0);

};

export function IngresarUsuario(event) {
    event.preventDefault();
    // consultar si existe la base de datos de "Usuarios"
    const baseUsuariosExiste = localStorage.getItem("Usuarios");

    let baseUsuarios = [];
    //si no existe la base de datos, arrojar un error diciendo que no esta registrado o encontrado
    if (!baseUsuariosExiste) {
        Elementos.pErrorLogin.textContent = "Usuario no encontrado";
        return;
    }
    //si existe ,fusionarlo con el arreglo vacio
    baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));

    let campoCorreo = Elementos.correoLogin.value.toLowerCase().replaceAll("<", "&#60;").replaceAll(">","&#62;");

    const usuarioExistente = baseUsuarios.find(user => user.correo.toLowerCase() == campoCorreo.toLowerCase());

    //si el usuario no existe arrojar un error
    if (!usuarioExistente) {
        Elementos.pErrorLogin.textContent = "Usuario no encontrado";
        return;
    }

    let campoClave = Elementos.claveLogin.value.replaceAll("<", "&#60;").replaceAll(">","&#62;");


    if (usuarioExistente.clave != campoClave) {
        Elementos.pErrorLogin.textContent = "Contraseña incorrecta";
        return;
    }
    Elementos.pErrorLogin.textContent = "";

    alert(`¡Bienvenido/a ${usuarioExistente.nombre.replaceAll("&#60;", "<").replaceAll("&#62;",">")}!`);

    usuario.actual = usuarioExistente;
    Elementos.nombrePerfil.textContent = `${usuarioExistente.nombre.replaceAll("&#60;", "<").replaceAll("&#62;",">")} ${usuarioExistente.apellido.replaceAll("&#60;", "<").replaceAll("&#62;",">")}`
    Elementos.nombrePerfilHeader.textContent = `${usuarioExistente.nombre.replaceAll("&#60;", "<").replaceAll("&#62;",">")}} `


    Elementos.imgPhoto.src = usuario.actual.foto;

    setTimeout(() => {
        Elementos.formLogin.reset();
    }, 500);

    controlador_vistas.actualizar_vista(2);

    for (const clave in usuario.actual){
        usuario.temporal[clave] = usuario.actual[clave];
    }

};



