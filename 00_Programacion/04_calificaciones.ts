/*Estructuras de Control
Calificaciones
Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/

import * as rls from "readline-sync"

let name: string = "name";

let n1: number; // Nota práctica
let n2: number; // Nota problemas
let n3: number; // Nota teórica
let nota: number; // Nota final

while (name !== ""){

    name = rls.question("Ingrese nombre del alumno: ");  
  
        if (name !== "") {

            n1 = rls.questionFloat("Ingrese nota (1 a 10) de la parte práctica: ");    
            n2 = rls.questionFloat("Ingrese nota (1 a 10) de la parte problemas: ");
            n3 = rls.questionFloat("Ingrese nota (1 a 10) de la parte teórica: ");
            nota = 0.10 * n1 + 0.50 * n2 + 0.40 * n3;   
            
            if (((n1>0) && (n1<=10)) && ((n2>0) && (n2<=10)) && ((n3>0) && (n3<=10)))   console.log (`La nota de ${name} es ${nota}`);
            
            else console.log("Error en el cargado de notas");    
        }
}