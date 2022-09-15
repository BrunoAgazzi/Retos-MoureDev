/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


const anagramFuction = (word1, word2) => {
  if (word1 === word2){
    console.log(false);
    return;
  }

  let arr1 = Object.assign([], word1);
  let arr2 = Object.assign([], word2);
  arr2.sort();
  arr1.sort();

  const res = arr1.length==arr2.length && arr1.every(function(v,i) { return v === arr2[i] })
  console.log(res);
}


anagramFuction('roma','mora');
anagramFuction('roma','moras');