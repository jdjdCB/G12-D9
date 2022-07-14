/*agregar funcionalidades a las instancias de clase. */

class Bateria{
    constructor(){
        this.precio = 200.00;
    }
}

const mibat = new Bateria();

// añadir función a la instancia de la clase Bateria
mibat.aplicarDescuento = function(){
    this.precio -= 50.00;
}

mibat.aplicarDescuento();
console.log(mibat.precio);