// ARRAYS

let frutas = [];

frutas[0]= "manzanas";
frutas[1]= "bananas";
frutas[2]= "peras";
frutas[3]= "uvas";
frutas[4]= "lichas";

/* console.log(frutas); */

//PRACTICA 1 

let myFamily = [];

myFamily[0] = "Carlos";
myFamily[1] = "Yolanda";
myFamily[2] = "Isua";
myFamily[3] = "Esdras";
myFamily[4] = "Edgardo";
myFamily[5] = "Gasper";

/* console.log(myFamily); */

let familiaResumida = ["Carlos", "Yolanda", "Isua", "Esdras", "Edgardo", "Gasper"];

/* console.log(familiaResumida); */

let numFamilia = [95392589, 94530899, 90912345, 14151689, 90918765];


//CICLOS
// CICLO FOR

for (let i = 0; i < frutas.length; i++){
    if (frutas[i] === "lichas"){
        console.log("Se Encuentra en el inventario " + frutas[i]);
    }else{
        console.log("No se encontro en el inventario");
    }
    /* console.log(frutas[i]); */
}