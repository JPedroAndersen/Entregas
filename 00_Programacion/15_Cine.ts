/* Cine
• Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada */

import * as rls from "readline-sync";

const cantButacas: number = rls.questionInt("Ingrese la cantidad de butacas que posee la sala: ");

let butacas: boolean [] = [];


function cargaButacas (cantBut: number): void {

    let azar: number = 0;

    for(let i = 0; i < cantBut; i++) {

        azar = Math.random();

        if (azar <= 0.5)    butacas.push(true);
        
        else    butacas.push(false);
    
    }    
    
}

cargaButacas(cantButacas);
console.log(butacas);

function buscaButaca (butacas: boolean[]): number {

    let contador: number = 0;

    butacas.forEach( butaca => {
        
        if(butaca === false)    contador++

    })

    return contador;    
}

console.log(`El cine posee ${buscaButaca(butacas)} butacas libres de ${cantButacas}`);






