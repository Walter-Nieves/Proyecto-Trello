import Elementos from "./elementos.js";
import { usuario } from "./sistema_usuarios.js"
import Nota from "../classes/Nota.js"
import controlador_vistas from "./controlador.js";
import three from "../imagen/three-dots-vertical.svg"


export function crearNota(event) {
    event.preventDefault()

    let titulo = "";
    let descripcion = "";

    titulo = Elementos.inputTituloNota.value;
    descripcion = Elementos.inputDescripcionNota.value;

    if (titulo.replaceAll(" ", "") == "" || descripcion.replaceAll(" ", "") == "") {
        alert(`Asegurate de llenar todos los campos ${usuario.actual.nombre}`);
        return;
    }

    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotas = [];

    if (baseNotasExiste) {
        baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));
    }


    const nuevaNota = new Nota(
        // baseNotas.length,
        titulo.replaceAll("<", "&#60;").replaceAll(">", "&#62;"),
        descripcion.replaceAll("<", "&#60;").replaceAll(">", "&#62;"),
        usuario.actual.correo,
    );

    baseNotas.push(nuevaNota);
    localStorage.setItem("Notas", JSON.stringify(baseNotas));

    alert("¡ La nota fue agregada con exito !");

    controlador_vistas.actualizar_vista(3);

    setTimeout(() => {
        Elementos.formNotes.reset();
        crearHTMLNota(nuevaNota);
    }, 500);

};

export function traerNotas(quien) {
    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotas = [];

    if (!baseNotasExiste) {
        return;
    }
    baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));

    let notasUsuario = baseNotas.filter(nota => nota.correo == quien);

    if (notasUsuario.length == 0) {
        return;
    }
    crearHTMLNota(...notasUsuario);
    // notasUsuario.forEach(
    //     (nota) => {
    //         crearHTMLNota(nota);
    //     }

    // )


}

export function limpiarNotas() {
    let notasEnGroupNotes = document.getElementsByClassName("notas-individuales");
    if (notasEnGroupNotes.length == 0) {
        return;
    }

    //con este for of recorremos el grupo de notas
    for (const notaHTML of notasEnGroupNotes) {
        notaHTML.className = "notas-individuales ocultar-nota";
    }

    // notasEnGroupNotes = Array.from(notasEnGroupNotes);

    // notasEnGroupNotes.forEach(
    //     (notaHTML) => {
    //         notaHTML.className = "notas-individuales ocultar-nota";
    //     }
    // )

    // console.log(notasEnGroupNotes);
}



function crearHTMLNota(...notas) {

    let textoHTML = "";

    for (const { id, titulo, descripcion, estado, eliminada } of notas) {

        if (eliminada) return;

        let color_select = "";
        //cuando el condicional if ocupa una sola linea tambien se puede escribir de esta manera

        if (estado == 1) color_select = "orange";
        if (estado == 2) color_select = "green";
        if (estado == 3) color_select = "red";

        if (!eliminada) {

            textoHTML += `
    <div class="mostrar-nota notas-individuales" id="nota${id}">

       <div>
         <div class="titulo-nota">
             <h3>${titulo}</h3>
             <div>
                 <img class="menu-nota" src=${three} alt="Options">
                 <ul class="ul-nota">
                     <li class="btn-modificar-nota">Modificar</li>
                     <li class="btn-borrar-nota" >Borrar</li>
                 </ul>
             </div>
           </div>
           <div>
               <p>${descripcion}</p>
               <select style="color: ${color_select}; "class="contenido opcion${estado}">
                   <option${estado == 1 ? ' selected' : ""} style="color:orange;" value="1">Pendiente</option>
                   <option${estado == 2 ? ' selected' : ""} style="color:green;"  value="2">Completo</option>
                   <option${estado == 3 ? ' selected' : ""} style="color:red;"    value="3">Incompleto</option>
               </select>
           </div>
       </div>
    </div>        
        `;

            setTimeout(() => {
                document.getElementById(`nota${id}`).className = "notas-individuales";
            }, 1000);


        }


    }
    Elementos.groupNotes.innerHTML += textoHTML;

    const evento_falso = new Event("change")

    Elementos.categoriaNotas.dispatchEvent(evento_falso);
}

export function cambiarEstadoNota(event) {
    if (event.target.tagName != "SELECT") return;

    // estilo del campo , el color
    const selectDeLaNota = event.target;
    // valor del localStorage
    const idDeLaNota = selectDeLaNota.closest(".notas-individuales").id.replace("nota", "");
    const nuevoEstado = selectDeLaNota.value;


    //aca verificamos que las notas realmente existan
    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotas = [];

    if (!baseNotasExiste) {
        alert("Error al acceder a la base de datos");
        return;
    }

    baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));

    const indiceNotaObtenida = baseNotas.findIndex(nota => nota.id == (idDeLaNota));

    if (!indiceNotaObtenida == -1) {
        alert("Error al cambiar el estado de la nota");
        return;
    }

    let estado_anterior = selectDeLaNota.className.replace("contenido opcion", "")

    selectDeLaNota.querySelector(`option:nth-child(${estado_anterior})`).toggleAttribute("selected", false);

    const notaModificable = new Nota();

    notaModificable.colocarValores(baseNotas[indiceNotaObtenida]);
    // selectedIndex es una propiedad para tomar la posicion del arreglo
    let estadoPalabra = selectDeLaNota.options[selectDeLaNota.selectedIndex].text;

    notaModificable.cambiarEstado(estadoPalabra);

    baseNotas[indiceNotaObtenida] = notaModificable;

    localStorage.setItem("Notas", JSON.stringify(baseNotas));

    selectDeLaNota.style.color = selectDeLaNota.querySelector(`option:nth-child(${nuevoEstado})`).style.color;

    selectDeLaNota.className = `contenido opcion${nuevoEstado}`;

    selectDeLaNota.querySelector(`option:nth-child(${nuevoEstado})`).toggleAttribute("selected", true);

    const evento_falso = new Event("change")

    Elementos.categoriaNotas.dispatchEvent(evento_falso);


}


function desplegarModificarNota(nota,idNota, posicionNota, baseNotas) {
    Elementos.tituloNotaModificar.value = baseNotas[posicionNota].titulo;
    Elementos.descripcionNotaModificar.value = baseNotas[posicionNota].descripcion;
    Elementos.modalNotas.classList.remove("modal-hidden");
    Elementos.modalNotas.classList.add(`nota${idNota}`);

}


export function modificarNota(event) {
    event.preventDefault();

    const baseNotasExiste = localStorage.getItem("Notas");
    const baseNotas = baseNotasExiste ? JSON.parse(baseNotasExiste) : [];

    if(!baseNotas.length){
        alert("Error al acceder a la base de datos");
        return;
    }

    let idNota="";

    for (const clase of Elementos.modalNotas.classList) {
        if (clase.startsWith("nota")) {
            idNota= clase;
            Elementos.modalNotas.classList.remove(clase);
        }
    }

 

    const indiceNotaExiste = baseNotas.findIndex(not => not.id == idNota.replace("nota",""));

    if(indiceNotaExiste == -1){
        alert("La nota que desea modificar ya no existe");
        return;
    }

    baseNotas[indiceNotaExiste].titulo = Elementos.tituloNotaModificar.value.replaceAll("<", "&#60;").replaceAll(">", "&#62;");
    baseNotas[indiceNotaExiste].descripcion = Elementos.descripcionNotaModificar.value.replaceAll("<", "&#60;").replaceAll(">", "&#62;");
    localStorage.setItem("Notas",JSON.stringify(baseNotas));


    const htmlNota = document.getElementById(idNota);

    Elementos.modalNotas.classList.add("modal-hidden"); 
    
    setTimeout(() => {
        Elementos.formModalDatos.reset();
        htmlNota.classList.add("ocultar-nota");
         //ocultar la antigua nota
        setTimeout(() => {
         htmlNota.querySelector("h3").textContent = Elementos.tituloNotaModificar.value;
           htmlNota.querySelector("p").textContent = Elementos.descripcionNotaModificar.value;
            //cambiar html
            setTimeout(() => {
                htmlNota.classList.remove("ocultar-nota");
                htmlNota.classList.add("mostrar-nota");
                //mostrar

            }, 1000);
        }, 2000);
    }, 300);

}


export function cancelarModificarNotas() {

    Elementos.modalNotas.classList.add("modal-hidden");

    for (const clase of Elementos.modalNotas.classList) {
        if (clase.startsWith("nota")) {
            Elementos.modalNotas.classList.remove(clase);
        }
    }

    setTimeout(() => {
        Elementos.formModalDatos.reset();
    }, 300);
}


export function filtrarNotas(event) {
    const selectDeLaNota = event.target;
    const nuevoEstado = parseInt(selectDeLaNota.value);
    selectDeLaNota.style.color = selectDeLaNota.querySelector(`option:nth-child(${nuevoEstado + 1})`).style.color;

    const notasAgregadas = Elementos.groupNotes.getElementsByClassName("notas-individuales");

    if (notasAgregadas.length == 0) {
        return;
    }
    for (const nota of notasAgregadas) {
        const select_De_La_Nota = nota.querySelector("select");
        const valor_Elegido = select_De_La_Nota.value;


        if (nuevoEstado == 0) {
            animarNotaEspecifica(nota, true);
        } else {
            animarNotaEspecifica(
                nota,
                valor_Elegido == nuevoEstado
            );
        }
    }
}

export function cambiarNota(event) {
    const etiqueta = event.target;

    if (etiqueta.tagName != "LI") return;
    //obtengo la nota
    const nota = etiqueta.closest(".notas-individuales");
    //obtengo el id de la nota eliminando la palabra nota para que solo queden los caracteres alfanumericos del id
    const idNota = nota.id.replace("nota", "");
    //se llama el localstorage
    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotas = [];

    if (!baseNotasExiste) {
        alert("Error, la base de datos de notas no exite");
        return;
    }
    baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));
    //findIndex actua como un bucle for que va iterar en todo el arreglo y nos va devolver el idNota que estamos pidiendo
    const indiceNotaExiste = baseNotas.findIndex(i => i.id == idNota);

    if (indiceNotaExiste == -1) {
        alert("Error, la nota no exite");
        return;
    }


    if (etiqueta.className == 'btn-modificar-nota') {
        desplegarModificarNota(nota, idNota, indiceNotaExiste, baseNotas);
    }
    if (etiqueta.className == 'btn-borrar-nota') {
        borrarNota(nota, idNota, indiceNotaExiste, baseNotas);
    }
}


function borrarNota(elementoNota, idNota, posicionNota, baseNotas) {
    //pide que va borrar(posicionNota) y cuantos va borrar(1) con el metodo de arreglos y sring splice
    baseNotas.splice(posicionNota, 1);
    localStorage.setItem("Notas", JSON.stringify(baseNotas));

    animarNotaEspecifica(elementoNota, false);
    setTimeout(() => {
        document.getElementById(`nota${idNota}`).remove();
    }, 2000);

}


function animarNotaEspecifica(cual, quiero_mostar) {
    //si quiero mostrar,ejecuto esto
    if (quiero_mostar) {
        //si ya tiene la clase no animar
        if (cual.className == "notas-individuales mostrada") return;
        //le coloco la clase de animacion
        cual.className = "notas-individuales mostrar-nota";
        //si ya se animo ,le quito la clase
        setTimeout(() => {
            cual.className = "notas-individuales mostrada"
        }, 2000);
    } else {
        //si ya tiene la clase no animar
        if (cual.className == "notas-individuales oculta") return;
        //le coloco la clase de animacion
        cual.className = "notas-individuales ocultar-nota"
        //si ya se animo le quito la clase
        setTimeout(() => {
            cual.className = "notas-individuales oculta"
        }, 2000);
    }
}

