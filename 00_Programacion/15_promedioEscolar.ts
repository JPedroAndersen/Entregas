/*Estructuras de Datos y Métodos
Promedio Escolar
• Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información*/

import * as rls from "readline-sync";

let alumnos: string [] = []; //Arreglo donde se guardaran los nombres    
let notas: number []= [];   //Arreglo donde se guardaran las notas




//Declaro funcion para cargar nombres en el arreglo

function cargaNombre (nombre: string): void {
    
    alumnos.push(nombre)

} 


//Declaro funcion para cargar las notas

function cargaNotas (nota: number): void {

    notas.push(nota)

}


let nombre: string = "name";

while (nombre !== "") {

    nombre = rls.question("Ingrese nombre del alummno/Presione enter para salir: ")

    if (nombre !== "")  {
    
        cargaNombre(nombre);

        for (let i = 1; i <= 3; i++ )       cargaNotas(rls.questionFloat(`Ingrese la nota del ${i}° Cuat: `))

    }

    //console.log(alumnos);
    //console.log(notas);
  
}

function buscarPosNombre (nombre:string): number {

    let buscar: boolean = true;
    let i: number = 0;

    while (buscar === true){

        if (nombre === alumnos[i])  buscar = false;

        else if ( i >= alumnos.length - 1) {
            
            console.log("No se encontró el alumno ", nombre)
            buscar = false;
            i = - 1;
        } 
    
        i++
    }

    return i - 1
}


function calcProm (posNombre: number): number {

    let suma: number = 0;

    for (let i = 3 * posNombre; i < 3 * posNombre + 3; i++) suma += notas[i];

    const promedio: number = suma/3; 
    
    return promedio  

}



nombre = rls.question("Ingrese el nombre del alumno buscado: ");

//console.log(buscarPosNombre(nombre));
//console.log(calcProm(buscarPosNombre(nombre)));

if (buscarPosNombre(nombre) >= 0 )

console.log(`El promedio anual de ${nombre} es ${calcProm(buscarPosNombre(nombre))}`);



