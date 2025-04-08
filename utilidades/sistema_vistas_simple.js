import controlador_vistas from "./controlador.js";
import Elementos from "./elementos.js";
import { limpiarNotas } from "./sistema_notas.js";
import { usuario } from "./sistema_usuarios.js";

export function configuracion() {
    Elementos.imgPhoto.src = usuario.actual.foto;
    Elementos.nombrePerfil.textContent = `${usuario.actual.nombre.replaceAll("&#60;", "<").replaceAll("&#62;", ">")} ${usuario.actual.apellido.replaceAll("&#60;", "<").replaceAll("&#62;", ">")}`
    limpiarNotas();
    Elementos.headerMobileCheck.checked = false;
    setTimeout(() => {
        controlador_vistas.actualizar_vista(2);
        Elementos.groupNotes.innerHTML = "";
    }, 1000);


}

export function salir() {
    usuario.actual = {};
    Elementos.nombrePerfil.textContent = "";
    Elementos.imgPhoto.src = "";
    Elementos.headerMobileCheck.checked = false;
    Elementos.formNotes.reset();
    limpiarNotas();

    setTimeout(() => {
        controlador_vistas.actualizar_vista(0);
        Elementos.groupNotes.innerHTML = "";
        Elementos.nombrePerfilHeader.textContent = "";

    }, 1000);

}

export function login() {
    controlador_vistas.actualizar_vista(1);
    Elementos.formRegis.reset();
}

export function regis() {
    controlador_vistas.actualizar_vista(0);
    Elementos.formLogin.reset();
}