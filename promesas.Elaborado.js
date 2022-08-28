//Primero realizamos un try and catch

function Multiplicar() {

    var vector = [1,2,3,4,5];

    vector.forEach((elemento, indice, arreglo)=>{
        try {
            var resultado = (5*elemento);
            console.log(resultado);
            if(elemento==3){
                dividir(A/B);
            }
        } catch {
            console.log(`Aqui ocurrio un problema, pero el catch hace que el codigo no se rompa, sino que captura el error`);
        }
    })
    
}

 //Multiplicar();

//Elaboramos la promesa, recordando que la promesa es un objeto de la clase Promesa y que recibe como parametros un arrow function con el parametro de resolve y reject

const solicitarPromesa = () =>{
    return new Promise((resolve, reject)=>{
        var numeroAleatorio = Math.ceil(Math.random()*10);
        console.log(numeroAleatorio);

        setTimeout(()=>{
            numeroAleatorio>=5?resolve(numeroAleatorio):reject(new Error(`El numero ${numeroAleatorio} Es menor a 5, `)) //resolve and reject solo retornan valores que despues utilizaremos en then y catch
        }, 2000);
    })
}

//primer forma de interpretar una promesa then and catch
// solicitarPromesa().then(numero=>{
//     console.log(numero);
// }).catch(error=>console.log(error + "Este es mi primer error capturado en promesas"))

//segunda forma de interpretar una promesa dentro de un try and catch
const funcionAsync = async ()=>{
    try{
        const numeroRetornado = await solicitarPromesa();
        console.log(numeroRetornado);
    }catch(error){
        console.log(error);
    }
}

funcionAsync()