
import Elementos from "./utilidades/elementos.js";
import controlador_vistas from "./utilidades/controlador.js";
import { IngresarUsuario, registrarusuario } from "./utilidades/sistema_usuarios.js";
import { cambiarFotoUrl,cambiarFoto,cancelarModificarFoto,aceptarModificarFoto,cambiarFotoFile} from "./utilidades/sistema_foto.js";
import * as irA from "./utilidades/sistema_vistas_simple.js";
import { cambiarEstadoNota, crearNota, filtrarNotas,cambiarNota, modificarNota, cancelarModificarNotas } from "./utilidades/sistema_notas.js";
import { guardarDatos,cancelarDatos,cambiarDatos, aceptarModificacion, cancelarModificacion } from "./utilidades/sistema.modificar.js";

// controlador_vistas.header=Elementos.header;
// controlador_vistas.seccionLogin=Elementos.seccionLogin;
// controlador_vistas.seccionPhoto=Elementos.seccionPhoto;
// controlador_vistas.seccionRegis=Elementos.seccionRegis;
// controlador_vistas.divMain=Elementos.divMain;


// controlador_vistas.asignarElementos(Elementos);


// de esta manera se crean mediaquerys en javascript para mas que todo solucionar problemas de css, cuando definitivamente no dan con la
// solucion en css y lo arreglan desde javascript ya que este tiene mas peso

// window.addEventListener("resize", ()=>{
// const mediaQuery = window.matchMedia("(max-width: 400px)");
// if(mediaQuery.matches){
// Elementos.headerLiConfig.style.color = "green";
//estilo si se cumple 
// }else{
// Elementos.headerLiConfig.style.color = "red";
//estilo si no se cumple
// }

// });

controlador_vistas.actualizar_vista(0);

Elementos.aLinkToRegis.addEventListener("click", irA.login);

Elementos.aLinkToLogin.addEventListener("click", irA.regis);

Elementos.headerLiConfig.addEventListener('click', irA.configuracion);

Elementos.headerLiExit.addEventListener('click', irA.salir);

Elementos.formRegis.addEventListener("submit", registrarusuario);

Elementos.formLogin.addEventListener("submit", IngresarUsuario);

Elementos.btnDataCancel.addEventListener('click', cancelarDatos);

Elementos.imgPhoto.addEventListener("click",cambiarFoto);

Elementos.btndataChange.addEventListener('click', cambiarDatos);

Elementos.formModalDatos.addEventListener("submit",aceptarModificacion);

Elementos.cancelarModificar.addEventListener("click",cancelarModificacion);

Elementos.btnDataSave.addEventListener('click',guardarDatos);

Elementos.formNotes.addEventListener("submit", crearNota);

Elementos.categoriaNotas.addEventListener("change", filtrarNotas);

Elementos.groupNotes.addEventListener("change", cambiarEstadoNota);

Elementos.groupNotes.addEventListener("click",cambiarNota);

Elementos.formModalNotas.addEventListener("submit",modificarNota);

Elementos.cancelarNotaModificar.addEventListener("click",cancelarModificarNotas);

Elementos.btnCancelarChangeImage.addEventListener("click", cancelarModificarFoto);

Elementos.btnChangeUrlFoto.addEventListener("click",cambiarFotoUrl);

Elementos.formModalFoto.addEventListener("submit",aceptarModificarFoto);

Elementos.btnChangeFileFoto.addEventListener("change",cambiarFotoFile);



// patchElimimarNotas();


// function patchElimimarNotas() {
//     //verificamos si la base de datos existe
//     let baseNotas = localStorage.getItem("Notas");
//     if (!baseNotas) return;
//     baseNotas = JSON.parse(baseNotas);
//     if (!baseNotas) return;


//     // si no tienen la propiedad "eliminada", la agregamos forzosamente
//     baseNotas.forEach(nota => {
//         if (nota.eliminada == undefined) {
//             nota.eliminada = false;
//         }
//     });

//     //actualizamos la base de datos 
//     localStorage.setItem("Notas", JSON.stringify(baseNotas));

// }


// function crearId(numeroDeDigitos) {
//     let ID = "";
//     for (let i = 0; i < numeroDeDigitos; i++) {
//         let numeroAleatorio = Match.random();
//         console.log(numeroAleatorio);

//         let numCifras = numeroAleatorio * 36;
//         console.log(numCifras);

//         let numRedondeado = parseInt(numCifras);
//         console.log(numRedondeado);

//         let numConvertido = numRedondeado.toString(36);
//         console.log(numConvertido);

//         ID += numConvertido;

//     }
//     return ID;
// }









// Elementos.btnPhotoSave.addEventListener('click',


// ()=>{
//     let urlFoto= Elementos.imgPhoto.style.backgroundImage;
//     let extraerUrl = urlFoto.replace('url("',"").replace('")',"");

//     controlador_vistas.usuario_actual.foto=extraerUrl;
//     localStorage.setItem(controlador_vistas.usuario_actual.correo,
//                          JSON.stringify(controlador_vistas.usuario_actual)
//     );
//     Elementos.imgHeader.style.backgroundImage=`url(${controlador_vistas.usuario_actual.foto})`;

// controlador_vistas.actualizar_vista(3);

// }

// );