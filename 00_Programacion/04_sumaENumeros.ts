/*
Suma entre Números
• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

import * as rls from "readline-sync"

let n1: number = rls.questionInt("Ingrese n1 entero: ");
while (n1 < 0){
    n1 = rls.questionInt("Ingrese n1 entero: ");
}

let n2: number = rls.questionInt("Ingrese n2 entero: ");
while (n2 < 0){
    n2 = rls.questionInt("Ingrese n2 entero: ");
}

let sum: number = 0;

if ( n1 === n2 ) {
    sum = n1 + n2;
}   

    else if (n1 < n2) {
    for ( n1 = n1 ; n1 <= n2 ; n1++ ) {
        sum = sum + n1
    }
    }   

    else {
        for ( n1 = n1 ; n1 >= n2 ; n1-- ) {
        sum = sum + n1
        }

    }    
console.log("La suma entre n es: ", sum);