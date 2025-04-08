function crearId(numeroDeDigitos) {
    //se crea el id como string para poder concatenar la iteracion de i
    let ID = "";
    //se pide que i itere tantas veces como pida el parametro en la funcion
    for (let i = 0; i < numeroDeDigitos; i++) {
        // se crea el numero aleatorio
        let numeroAleatorio = Math.random();
        console.log(numeroAleatorio);
        //se multiplica por 36 digitos
        let numCifras = numeroAleatorio * 36;
        console.log(numCifras);
        //se vuelve numero entero
        let numRedondeado = parseInt(numCifras);
        console.log(numRedondeado);
        //se vuelve string deacuerdo a la codificacion seleccionada
        let numConvertido = numRedondeado.toString(36);
        console.log(numConvertido);
        //se muestra el ID definitivo como queda
        ID += numConvertido;

        // todo lo anterior se resumen de la siguiente manera 
        // let ID = "";
        // for (let i = 0; i <numeroDeDigitos; i++) ID +=  parseInt(Math.floor()*36).toString(36);
        // return ID;

    }
    return ID;
}
let idPrueba ="";

idPrueba = crearId(4);

console.log(idPrueba);
// esto se puede ver como opera desde Quoka