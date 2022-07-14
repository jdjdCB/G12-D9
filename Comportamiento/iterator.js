/*Este patrón nos ofrece el método next para acceder al siguiente valor
 de una colección. Si hemos acabado de iterar nos lo indicará mediante 
 la propiedad done. */
 
function* iterador(coleccion) {
    var nextIndex = 0;

    while (nextIndex < coleccion.length) {
        yield coleccion[nextIndex++];
    }
}

const x = ['BOSCH A-12', 'ETNA M-10', 'MOURA ZR-350']
const gen = iterador(x)
console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())
