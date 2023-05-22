/* Métodos
Ejercicio: Divisores

• Implemente un método llamado cantidad DeDivisores que reciba un número entero y devuelva la cantidad de divisores 
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5
Re-utilice el método esMultiplo implementado para el ejercicio anterior */

import * as rls from "readline-sync"

function esMultiplo ( n1: number, n2: number) : boolean {

    let res: number = n2 % n1
    let esMul: boolean              //Esta variable me resulta redundante, pero no se como resolver de otra forma
    if (res===0) esMul = true;
    else esMul = false;
    return esMul;            
}

function cantDeDivisores (entrada: number) : number {

    let contador: number = 0;

    for (let i : number = 1; i <= entrada; i++){
        
        if ( esMultiplo(i,entrada) === true ) contador += 1;
              
    }

    return contador;
}

let entrada: number = rls.questionInt("Ingrese número a evaluar: ");

console.log(`El número ${entrada} posee ${cantDeDivisores(entrada)} divisores.`);
