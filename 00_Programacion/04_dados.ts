/*Estructuras de Control
Dados
• Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor
• Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato ingresado por el usuario) */

import * as rls from "readline-sync"

const cantTiros: number = rls.questionInt("Ingrese N° de tiros: ");
let proba: number = 1;

for (let i: number = 1; i <= cantTiros; i++) proba = proba * (1/6);

console.log(`La probalididad es ${proba}`);

