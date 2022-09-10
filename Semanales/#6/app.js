/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


const reverseWord = word =>{
    const numberLetter = word.length;
    let finishWord = '';
    
    for(let i = 0; i < numberLetter; i++){
        let letter = word.charAt(i);
      finishWord = letter + finishWord;
    }
    console.log(finishWord);
    
  }
  
  reverseWord('Hello world');