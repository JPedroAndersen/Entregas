/*
Par/Impar
• Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero)
*/

import * as rls from "readline-sync"

let parImpar: number = rls.questionInt("Ingrese n entero: ");

while (parImpar === 0) parImpar = rls.questionInt("Ingrese n entero: ")


if ( parImpar % 2 === 0 ) console.log (parImpar, " es par.")

    else if ( (parImpar + 1) % 2 === 0 ) console.log (parImpar, " es impar.");
    



