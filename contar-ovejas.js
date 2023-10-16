/**
 * Esta función recibe un string por parámetro. Una "O" representa una oveja, y una "L", un lobito.
 *
 * Crea una función que recibe un string con lobos y ovejas, y devuelve el número de ovejas que hay en él
 */

/**
 * 1. Vamos mirando a letra a letra, todo el texto, y por cada oveja (cada letra 0) ponemos un palito para indicar que hemos encontrado una oveja. Al final, contaremos todos palitos.
 *
 */

/**
 * Paso 2: Escribirmos de nuevo con lenguaje natural pero esta vez si hablando de JavaScript. Qué tenemos que hacer. Aquí ya podemos hablar de bucles, if...else, etc.
 */


function contarOvejas(ovejas) {
    /**
     * Necesitaremos una variable para almacenar el número de ovejas.
     *
     * Debo recorrrer el string ovejas con un for.
     *   Para cada letra, miramos si es una "O". Si es una "O", aumentamos la variable en 1
     */
    let numOvejas = 0; // todavía no he encontrado ninguna oveja
  
    for (let i = 0; i < ovejas.length; i++) {
      // console.log("siguiente animal: ", ovejas[i]); // estoy recorriendo bien el string? chivatos, depurar, etc.
      if (ovejas[i] == "O") {
        numOvejas++; // Esto es exactamente --> numOvejas = numOvejas + 1
      }
    }
  
    return numOvejas;
  }
  
  console.log(contarOvejas("O")); // 1 🐑
  console.log("Resultado de un string con 2 ovejas: ", contarOvejas("OLLO")); // 2 🐑🐑
  console.log(contarOvejas("LOOOL")); // 3 🐑🐑🐑
  console.log(contarOvejas("LLL")); // 0
  console.log(contarOvejas("OLOLOLOLL")); // 4 (porque hay 4 Oes)
  