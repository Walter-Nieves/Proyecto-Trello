// class Plantilla {
//     constructor() {
//         this.id = this.crearIdUnico(8);
//     }
//     crearIdUnico(n) {
//         let id = "";
//         for (let i = 0; i < n; i++) {
//             id += parseInt(Math.random() * 36).toString(36); 
//         }
//         return id;
//     }
// }





class Plantilla {
    static idsGenerados = new Set();

    constructor() {
        this.id = this.crearIdUnico(8);
    }

    crearIdUnico(n) {
        let id = "";
        //consultar localstorage baseusuarios y basenotas
        const baseUsuariosExiste = localStorage.getItem("Usuarios");
        let baseUsuarios = [];
        if (baseUsuariosExiste) {
            baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuariosExiste));
        }
        //guardar arreglo solo ids
        const baseNotasExiste = localStorage.getItem("Usuarios");
        let baseNotas=[];
        if(baseNotasExiste){
            baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste))
        }
        //guardar arreglo solo ids
        baseUsuarios.forEach(element => {
            Plantilla.idsGenerados.add(element.id);
        });
        baseNotas.forEach(element => {
            Plantilla.idsGenerados.add(element.id);
        });
        //fusionar arreglos de ids
        //agregar ids al set
        do {
            id = "";
            for (let i = 0; i < n; i++) {
                id += parseInt(Math.random() * 36).toString(36); 
            }
        } while (Plantilla.idsGenerados.has(id)); // Mientras el ID ya exista, genera otro
        // Plantilla.idsGenerados.add(id); // Guarda el nuevo ID
        return id;
    }
}

export default Plantilla;