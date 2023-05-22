/*
Contar la cantidad de cada vocal del texto entregado.
*/

import * as rls from "readline-sync";

const cadenaDeTexto: string = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";

let cadenasinmayusculas: string = cadenaDeTexto.toLowerCase();
let cadenasinsimbolos: string = cadenasinmayusculas 
.replace(/[áàäâ]/g, 'a')
.replace(/[éèëê]/g, 'e')
.replace(/[íìïî]/g, 'i')
.replace(/[óòöô]/g, 'o')
.replace(/[úùüû]/g, 'u');

let vocales: string = "aeiou"

function contVocales(letra: string, texto: string): number {
    let contador: number = 0;
    for (let x: number = 0; x < texto.length; x++) {
        if(texto[x]===letra) contador+=1; 
        
    }
    
    return(contador);
}


for (let y: number = 0; y < vocales.length; y++) { 
    
    console.log(`Se encontraron ${contVocales(vocales[y],cadenasinsimbolos)} letra ${vocales[y]}`);
  
}    
      
    
  