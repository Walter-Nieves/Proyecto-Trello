const Elementos={
// elementos del Header

header : document.querySelector("header"),
nombrePerfilHeader :  document.getElementById("nombreUsuarioHeader"),
headerMobileCheck : document.getElementById("checkbox"),
imgHeader : document.querySelector("#user"),
headerLiConfig : document.getElementById("configuracion"),
headerLiExit : document.getElementById("salir"),

//contenedor principal
divMain : document.getElementById("cont-regis"),
divNotes : document.getElementById("cont-notes"),
formNotes:document.getElementById("formulario-notas"),
groupNotes:document.getElementById("tres-notas"),

// elementos del login vista 0

seccionLogin : document.getElementById("vista0"),
formLogin : document.getElementById("iniciarSesion"),
correoLogin : document.getElementById("inputCorreoInicio"),
claveLogin : document.getElementById("inputContrasenaInicio"),
pErrorLogin : document.querySelector("#inicio"),
aLinkToRegis : document.querySelector("#NoTengoCuenta"),

//elementos de registro vista 1

seccionRegis : document.getElementById("vista1"),
formRegis : document.getElementById("registrarUsuario"),
nombreRegis : document.getElementById("inputNombre"),
apellidoRegis : document.getElementById("inputApellido"),
edadRegis : document.getElementById("inputEdad"),
correoRegis : document.getElementById("inputEmailRegistro"),
claveRegis : document.getElementById("inputContrasenaRegistro"),
claveConfirmRegis : document.getElementById("inputConfirmarContrasena"),
pErrorRegis : document.getElementById("registro"),
aLinkToLogin : document.getElementById("yaTengoCuenta"),

//elementos de cambio de foto vista 2

seccionPhoto : document.getElementById("vista2"),
nombrePerfil: document.getElementById("nombreUsuario"),
imgPhoto : document.getElementById("userForm"),
btndataChange : document.getElementById("cambiardatos"),
btnDataCancel : document.getElementById("cancelar"),
btnDataSave : document.getElementById("guardar"),
categoriaNotas: document.getElementById("agrupar-notas"),
inputTituloNota: document.getElementById("create-notes"),
inputDescripcionNota: document.getElementById("descripcion"),

// modalFotos:document.getElementById("modal-foto"),
// imgPhotoUrl : document.getElementById("mod-foto-url"),
// imgPhotoArchivo:document.getElementById("mod-foto-archivo"),
// cancelarPhoto:document.getElementById("mod-cancelar-foto"),


//modal modificar datos

modalDatos : document.getElementById("modal-datos"),
formModalDatos : document.getElementById("form-modificar"),
nombreModificar : document.getElementById("inputModNombre"),
apellidoModificar :document.getElementById("inputModApellido"),
edadModificar :document.getElementById("inputModEdad"),
correoModificar :document.getElementById("inputModEmailRegistro"),
claveModificar :document.getElementById("inputModContrasenaRegistro"),
claveNuevaModificar :document.getElementById("inputModConfirmarContrasena"),
claveNuevaConfirmacionModificar :document.getElementById("inputModConfirmarNuevaContrasena"),
cancelarModificar :document.getElementById("Modcancelar"),
pErrorModificar : document.getElementById("p-modificar"),

//modal modificar notas
modalNotas : document.getElementById("mod-cont-notes"),
formModalNotas: document.getElementById("form-mod-notas"),
tituloNotaModificar : document.getElementById("mod-create-notes"),
descripcionNotaModificar:document.getElementById("mod-descripcion"),
cancelarNotaModificar: document.getElementById("mod-cancelar"),



};



export default Elementos;