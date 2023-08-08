
let usuario = ['Jose', '12345' , 'jose123@email.com']

const agregarDatos =(usuario, dato) => usuario.push(dato); 
const Saludar =(usuario) => console.log(`Bienvenido ${usuario[0]}`); 
const Visualizar=(usuario)=> console.log(usuario);

const callback = (usuario,funcion,dato) => funcion(usuario, dato);
const callbackTwo = (usuario, func) => func(usuario); 

callbackTwo(usuario, Visualizar)
callback(usuario, agregarDatos, "Medellín")
callback(usuario, agregarDatos, "Desarrollo de Software")
callbackTwo(usuario, Saludar)
callbackTwo(usuario, Visualizar)

