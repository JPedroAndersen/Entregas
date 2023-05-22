/* Tipos de Números en Arreglo

Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario).

• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay. */

import * as rls from "readline-sync";

let dimArr: number = rls.questionInt("Ingrese dimension del arreglo: "); //definicion de dimension del arreglo

while (dimArr <= 0) dimArr = rls.questionInt("Ingrese dimension válida: "); //Validamos la dimension del arreglo

const arr: number [] = new Array(dimArr); 

//inicializa variables de conteo

let contPos: number = 0;
let contNeg: number = 0;
let contZero: number = 0;

//Carga de valores y análisis al mismo tiempo

for (let i: number = 0; i < arr.length; i++ ){

    arr [i] = rls.questionFloat(`Ingrese N° ${i+1}/${arr.length}: `)

    if (arr[i] > 0) contPos += 1;
    if (arr[i] < 0) contNeg += 1;
    if (arr[i] === 0) contZero += 1; 
}

//Se muestra el resultadp

console.log(`El recuento arroja ${contPos} positivos, ${contNeg} negativos y ${contZero} ceros.`);