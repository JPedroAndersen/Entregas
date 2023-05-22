/* Estructuras de Control
Cantidad y Distribución de Positivos

• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total */

import * as rls  from "readline-sync"


let contTotal: number = 0;
let contPos: number = 0;
let nn: number = 1;

while ( nn !== 0) {

    nn = rls.questionFloat("Ingrese número: ");
    
    if(nn !==0) contTotal += 1;
    if (nn > 0) contPos += 1;
}

console.log(`${contPos} casos positivos, ${contPos/contTotal*100} % del total`);
