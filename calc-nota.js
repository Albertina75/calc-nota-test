/** Pssst: Recuerda leer el fichero README.md */



function calcNota(input, solution) {
  if (input.length !== solution.length) {
    throw new Error ("Las respuestas del estudiante y la solución no tienen la misma longitud ");
  }
  let puntuacion = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === solution [i]) {
      puntuacion += 1;
    } else {
      puntuacion -= 0.25;
  }
}puntuacion = Math.max(0, Math.min(100, puntuacion));

  return puntuacion;
}

console.log(calcNota("ABCDBBACAD", "ABCDBBACAD")); // 100 (el examen está perfecto)
console.log(calcNota("CBCDBBACAC", "ABCDBBACAD")); // 80 (hay 2 errores)
console.log(calcNota("CCACCCDVVA", "ABCDBBACAD")); // 0 (todo mal...)