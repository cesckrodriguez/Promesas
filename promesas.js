console.log("Esta es la primer clase sobre promesas. estudiando los dos metodos, try and catch y .then and .catch");


//primero revisamos lo de try en catch

//ejemplo donde creamos una funcion que nos dara un posible error para asi entender como se entra en los estados de try para el caso de que se pueda desarrollar y el catch para capturar el error. Esto nos sirve para que no se rompa el codigo cuando se encuentre un error, si no que ese error sea capturado y la funcion pueda continuar desarrollando el codigo.

// function Division(){
//     var VectorConVariableNoDefinidaParaLograrElError = [2,6,9,"estebas",23,4];
//     var resultado;
//     var numero = 6;
//     for(var i= 1; i<3; i++){
//         try{
//             multiplicar()//este es una funcion no definida que nos romperia el codigo si no estuviera dentro de un try and catch, sale del try y entra en el catch como error capturado pero el codigo continua
//             VectorConVariableNoDefinidaParaLograrElError.forEach((elemento, indice, arreglo)=>{
//                 resultado = (numero/elemento);
//                 console.log(resultado);
//                 console.log(elemento);
                
//             });
//            }catch{
//             console.log("error");
//             console.log(12/i);
//            }
//     }
    

//        console.log(15/3);
//        console.log(15/3);
//        console.log(15/3);
// }

// Division();

//llamada de la promesa
//sintaxis dice que tenemos primero que generar un objeto de la clase promesa: var Promesa = new Promesa(resolve, reject);


//Funciones matematicas
// Math.ceil redondea al entero siguiente ej, 5.2 --> 6;
// Math.floor redondea al entero al anterior ej, 6.7 --> 6;
// Math.random genera un numero aleatorio entre 0 y uno ej, .667;

const promesaEjemplo = ()=>{
    return new Promise((resolve,reject)=>{
        const numeroAleatorio = Math.ceil(Math.random()*10);
        console.log(numeroAleatorio)
        //setTimeOut nos simulara una funcion asincrona
        setTimeout(()=>{
            numeroAleatorio>=5?resolve(numeroAleatorio):reject(new Error(`El numero aleatorio ${numeroAleatorio} es menor que 5`))
        },2000);
    })
}
//ejecutamos la promesa con .then and .catch. Then quiere decir que si se resolvio la promesa y catch atrapa el error
promesaEjemplo().then(numero=>{
    console.log(numero);
}).catch(error=>console.log(error+ "este es el error de mi primera promesa"))

