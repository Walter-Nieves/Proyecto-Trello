import Elementos from "./elementos.js";

const controlador_vistas = {
   

    //importamos los elementos y ya no es necesario estas lineas de codigo 
    // seccionLogin:{},
    // seccionRegis:{},
    // seccionPhoto:{},
    // header:{},
    // divMain:{},
    // asignarElementos( {seccionLogin,seccionRegis,seccionPhoto,header,divMain,divNotes,formNotes,groupNotes}){
          
    //        this.seccionLogin=seccionLogin;
    //        this.seccionRegis=seccionRegis;
    //        this.seccionPhoto=seccionPhoto;
    //        this.header=header;
    //        this.divMain=divMain;
    //        this.divNotes=divNotes;
    //        this.formNotes=formNotes;
    //        this.groupNotes=groupNotes;

    // },

    actualizar_vista(cual_vista) {

        this.animar("ocultar-tarjeta","ocultar-nota" );
        setTimeout(() => {
                // vista 0
                Elementos.seccionLogin.style.display = cual_vista == 0 ? "flex" : "none";
                //vista 1
                Elementos.seccionRegis.style.display = cual_vista == 1 ? "flex" : "none";
                //vista 2
                Elementos.seccionPhoto.style.display = cual_vista == 2 ? "flex" : "none";
                //vista 3 es dashboard - header
                Elementos.header.style.bottom = cual_vista == 3 ? "0" : "50%";
                Elementos.divMain.style.display = cual_vista == 3 ? "none" : "flex";
                Elementos.divNotes.style.display= cual_vista == 3 ? "flex" : "none";

                this.animar("mostrar-tarjeta","mostrar-nota");
            }, 500);


    },
    animar(mostrar_ocultar, mostrar_ocultar_notas) {
        Elementos.divMain.className = `contiene-formularios ${mostrar_ocultar}`;
        Elementos.formNotes.className = `formulario-notas ${mostrar_ocultar}`
        // Elementos.groupNotes.className= `tres-notas ${mostrar_ocultar_notas}`

    }
};

export default controlador_vistas;