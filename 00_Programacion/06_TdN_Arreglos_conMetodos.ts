/* Tipos de Números en Arreglo

Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario).

• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay. */

import * as rls from "readline-sync";


//Definicion de la dimension del arreglo y validacion de entrada

let dimArr: number = rls.questionInt("Ingrese dimension del arreglo: "); 

while (dimArr <= 0) dimArr = rls.questionInt("Ingrese dimension válida: "); 

let arr: number [] = new Array(dimArr); 

//Declaracion de las funciones a utilizar

//Carga de valores 

function cargaDatos (arr:number[]): void  {
    
for (let i: number = 0; i < arr.length; i++ ) arr [i] = rls.questionFloat(`Ingrese N° ${i+1}/${arr.length}: `)

}

// Contador de Positivos

function contPos (arr:number[]): number {
    
    let contPos: number = 0;
    for (let i: number = 0; i < arr.length; i++ )   if (arr[i] > 0) contPos += 1;

    return  contPos
}

// Contador de negativos

function contNeg (arr:number[]): number {
    
    let contNeg: number = 0;
    for (let i: number = 0; i < arr.length; i++ )   if (arr[i] < 0) contNeg += 1;

    return  contNeg
}

// Contador de ceros

function contZero (arr:number[]): number {
    
    let contZero: number = 0;
    for (let i: number = 0; i < arr.length; i++ )   if (arr[i] === 0) contZero += 1;

    return  contZero
}

    
//Se muestra el resultado

cargaDatos(arr);

console.log(`El recuento arroja ${contPos(arr)} positivos, ${contNeg(arr)} negativos y ${contZero(arr)} ceros.`);