/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
*/


const letterRepeat = prayer => {

const words = prayer.replaceAll(',','').replaceAll('.','').toLowerCase().split(' ');
const wordsSav = [];
words.map(word => {

    let count = 0;
    for(let i = 0; i <= words.length; i++ ){
        if (words[i] === word) count = count +1;
    }
    if(!wordsSav.includes( word )) {
        console.log(word + '('+ count +')');
        wordsSav.push(word);

    };
})


}

letterRepeat('One car is red, one car is green, and one is purple.');
