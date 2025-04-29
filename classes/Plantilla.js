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
        let id;
        //consultar localstorage baseusuarios y basenotas
        //consular usuarios
        //guardar arreglo solo ids
        //consultarnotas
        //guardar arreglo solo ids
        //fusionar arreglos de ids
        //agregar ids al set
        do {
            id = "";
            for (let i = 0; i < n; i++) {
                id += parseInt(Math.random() * 36).toString(36); 
            }
        } while (Plantilla.idsGenerados.has(id)); // Mientras el ID ya exista, genera otro
        Plantilla.idsGenerados.add(id); // Guarda el nuevo ID
        return id;
    }
}

export default Plantilla;