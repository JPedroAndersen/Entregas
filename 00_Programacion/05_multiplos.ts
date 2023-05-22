/*Métodos

Ejercicio: Múltiplos

• Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso 
según si el primer número que se indique como parámetro es múltiplo del segundo 
• Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero 
• Recuerde que la operación mod permite saber si el resto de una división es cero*/

import * as rls from "readline-sync"

function esMultiplo ( n1: number, n2: number) : boolean {

    let res: number = n2 % n1
    let esMul: boolean              //Esta variable me resulta redundante, pero no se como resolver de otra forma
    if (res===0) esMul = true;
    else esMul = false;
    return esMul;            
}

//No estoy seguro de estar usando bien las variables Booleanas. La definicion de la variable esMul tampoco me convence.

let n1: number = rls.questionFloat("Ingrese primer N°: ");
let n2: number = rls.questionFloat("Ingrese segundo N°: ");

console.log(`esMultiplo es ${esMultiplo(n1,n2)}`);