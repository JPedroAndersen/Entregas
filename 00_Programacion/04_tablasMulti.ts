/* Estructuras de Control
Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from "readline-sync"

let numMult: number = -1;
let numCort: number = -1;


while ( numMult <= 0 ) numMult = rls.questionInt("Ingrese n° entero: ");
while ( numCort <= 0 ) numCort = rls.questionInt("Ingrese n° entero de corte: ");

let men: string = "";

for (let i : number = 1; i <= numCort; i++)     men += (`${numMult} x ${i} = ${ i * numMult } \n`);

console.log(men);
