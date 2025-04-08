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
btnPhotoCancel : document.getElementById("cancelar"),
btnPhotoSave : document.getElementById("guardar"),
categoriaNotas: document.getElementById("agrupar-notas"),
inputTituloNota: document.getElementById("create-notes"),
inputDescripcionNota: document.getElementById("descripcion"),


};

export default Elementos;