/*

FUNCTIONS 

*/

function restar(numberOne, numberTwo){
    return numberTwo-numberOne;
}

/**
 * Anonymous functions 
*/

const sumarDosNumeros = function(number1,number2){
    return number1+number2; 
}

console.log(sumarDosNumeros(4,7)); 

/*
Arrow functions
*/ 

/**
 * 
 * @param {numero 1} n1 
 * @param {number2} n2 
 * @returns 
 */
const multiplicarDosNumeros =(n1,n2) =>{
    return n1*n2; 
}

/*
No recibe parametros 
*/ 
const multiDos= () =>{
    return 1*0; 
}

/**
 * 
 * @param {numero a multiplicar} n1 
 */
const multiTres = n1 =>{
    return n1*10; 
}

/**
 * Se realiza de inmediato la operacion, no se incluye return
 * @param {numero 1} n1 
 * @param {numero 2} n2 
 * @returns 
 */
const multiCuatro =(n1,n2) => n1*n2; 

/**
 * 
 * @param {numero 1} numberOne 
 * @param {numero 2} numberTwo 
 * @param {la funcion  que recibe, lo que hará, llamada callback function} operacion 
 */
const operacionesMatematicas = (numberOne,numberTwo, operacion) =>{
    return operacion(numberOne,numberTwo); 
}

console.log(operacionesMatematicas(2,5,multiCuatro));

/**
 * Arreglos 
 */

let userData = ['juan','1234','@gmail.com'];

const userDataTwo = [{name:'Juan', pass:1234, mail:'@gmail.com'}]; 

/***
 * length.    Longitud(cantidad de datos) 
 *
 * index.     Posición en el arreglo
 * 
 * push.      ingresar un dato(al dinal del arreglo)
 * 
 * pop.       Sacar el ultimo dato
 */




