/**
 * forEach.  Evitarme la estructura de un For
 */

const numeros =[1,5,10,30,50]; 
let replica =0;
numeros.forEach((item) => {
    replica +=item;

});

console.log(replica);

/** 
 * map.
 */
//Multiplica por dos cada valor del vector original y lo guarda en doble 
const doble= numeros.map((valor)=>valor*2);
console.log(doble);

/**
 * vector de objetos
 */

const estudiantes =[
    {nombre:'Pedro',apellido:'Perez'},
    {nombre:'Pablo',apellido:'Moncada'},
    {nombre:'Andres',apellido:'Montoya'}
];

const nombreCompleto = estudiantes.map((student)=>{
    return `${student.nombre} ${student.apellido}`;
})
console.log(nombreCompleto);

/**
 * filter.  Filtrado y se pone la condición 
 */

const numerosFiltrados = numeros.filter((numero)=> numero<30);
console.log(numerosFiltrados); 

const objetoFiltrado = estudiantes.filter((student)=>student.apellido ==='Perez');
console.log(objetoFiltrado);

/**
 * every. 
 */

const frutas =['Banano','Papaya','Mango','Fresa']; 

const cumple = frutas.every((word) => word.length >3);
console.log(cumple); 

const objetoFrutas = [
    {nombre: 'Banano', buena:true},
    {nombre: 'Papaya', buena:false},
    {nombre: 'mango', buena:true},
    {nombre: 'Fresa', buena:true}
];

const comible = objetoFrutas.every((objeto) => objeto.buena === true); 
console.log(comible);

/**
 * OBJETOS
 */
//cantidad de propiedades fijas
const auto = {
    color:'azul', 
    año: 1982,
    cantPuertas: 4,
    marca: 'Mazda',
    revisiones: {
        fechaIngreso:'10-enero-2020',
        fechaSalida: '20-enero.2020',
        estadoSalida:'bueno',
        entregadoPor: 'Juan Perez',
    },
    tieneSeguro: true,
    registradoTransito: true
}; 

let autos = [];
autos.push(auto); 
console.log(autos); 