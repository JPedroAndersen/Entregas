/* Estructuras de Control
Encontrar el Número Máximo
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */

import * as rls from "readline-sync"

let n1: number = rls.questionFloat("Ingrese numero: ");
let numMax: number;

if (n1 !== 0) {

    let n2: number = rls.questionFloat("ingrese numero: ");

    if (n2 !== 0) {

        if( n1 > n2 ) numMax = n1;
        else          numMax = n2;

        let nn: number = 1;
        
        while ( nn !== 0 ) {
        
            nn = rls.questionFloat("Ingrese numero: ");

            if ( numMax < nn && nn !== 0) numMax = nn;
        }    
       
        console.log(`${numMax} es el número mayor.`);
        
    } else console.log(`${n1} es el número mayor.`);
}