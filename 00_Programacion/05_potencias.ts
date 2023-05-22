/*Métodos

Ejercicio: Potencias

• Realice un programa que devuelva la potencia de un número. La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero. Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.*/

import * as rls from "readline-sync"

function potencia (base: number, exp:number) : number {

    let pot: number = base ** exp;
    return pot;
}

let base: number = rls.questionFloat("Ingrese base: ");
let exp: number = -1;

while ( exp<0 ) exp = rls.questionFloat("Ingrese exponente: ");

console.log(`La potencia es ${potencia(base,exp)}`);

