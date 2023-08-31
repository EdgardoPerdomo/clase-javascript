//Ejemplo Condicional

const nombre = "Ada School";
let edad = 123;
let nota = 8;

if (nombre === "Ada School" && nota > 7) {
    console.log("Hola " + nombre + " su nota es = " + nota);
}else{
    console.log("El Nombre no existe");
}

//Practica

const mensaje1 = "Positivo";
const mensaje2 = "Negativo";

let numPositivo= 72;
let numNegativo= -10;

if (numPositivo > 0){
    console.log("El Numero es " + mensaje1);
}else{
    console.log("El Numero es " + mensaje2);
}

if (numNegativo < 0){
    console.log("El Numero es " + mensaje2);
}else{
    console.log("El Numero es " + mensaje1);
}

//Funciones

function areaCircunferencia(radio){
    const pi = 3.1415169;
    const resultado = pi * radio * radio;
    //console.log(resultado);
    return resultado
}

const res01 = areaCircunferencia(10);
const res02 = areaCircunferencia(12344);
const res03 = areaCircunferencia(144);
console.log(res01);
console.log(res02);
console.log(res03);