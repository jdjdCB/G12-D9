//prototipo: Se basa en que en base a un objeto definido podemos 
//crear prototipos para otros objetos. Con esto se elimina la duplicidad de código.

const bateria = {
    marca: 'BOSCH',
    modelo: 'a-12',
    mostrar: function(){
        console.log(`bateria ${this.marca} ${this.modelo}!`)
    }
}

// crea un objeto a partir del prototipo
let mybateria = Object.create (bateria); 

mybateria.mostrar();

console.log(mybateria);
// output: {} -> el objeto está vacío porque las propiedades y métodos
//               se encuentran en el prototipo

// podemos reemplazar las propiedades 
bateria.marca = 'ETNA';
bateria.mostrar();

// output: 