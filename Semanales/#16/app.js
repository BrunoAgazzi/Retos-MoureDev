/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */


const mayFunction = string =>{
    let separatWords = string.split(' ');
    console.log(separatWords);
    let finishString = '';
    for (let i = 0; i < separatWords.length; i++) {
        const word = separatWords[i].replace(' ','')
        const wordSlice = word.slice(1)
        console.log( word[0].toUpperCase() + word)        
    }
}


mayFunction('hola, como estas?');