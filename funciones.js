// FUNCIONES

function mayorDeDosNumeros(numeroUno, numeroDos){
    if (numeroUno > numeroDos){
        return numeroUno + " Es mayor que " + numeroDos;
    } else {
        return numeroDos + " Es mayor que " + numeroUno;
    }
}

const resultado = mayorDeDosNumeros(200, 900);
/* console.log(resultado); */

//String Funciones

/* let mensaje = "Hola Clase De JavaScript Ada School" */

/* console.log(mensaje.indexOf); */

function containsWord(mensaje, texto){
    const resultado = mensaje.indexOf(texto);
    console.log(resultado);

    if (resultado !== -1){
        console.log("La Palabra " + texto + " se encuentra en el mensaje")
    }else{
        console.log("No Se encuentra el mensaje")
    }
}

containsWord("Hola clase de JavaScript Ada School", "clase");
