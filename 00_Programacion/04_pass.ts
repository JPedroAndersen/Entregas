/*Estructuras de Control Eureka

Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
-Tenga en cuenta que la clave es la palabra "eureka
Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos 
que hemos agotado todas las oportunidades
-Si acertamos la clave, saldremos directamente del programa*/

import * as rls from "readline-sync";

const clave: string = "eureka";
let cont: number = 2;
let ingreseClave: string = rls.question ("Ingrese su clave: ");

while (clave !== ingreseClave && cont > 0) {

    console.log("Contraseña incorrecta. Usted posee " + cont + " intentos.");
    ingreseClave = rls.question("Por favor, reingrese su clave: ");
    cont = cont - 1;
}

if ( cont === 0 && clave !== ingreseClave ) {
    console.log("Se han agotado los intentos");
}