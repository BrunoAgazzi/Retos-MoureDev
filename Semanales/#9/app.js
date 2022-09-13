/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */



const morseConverter = strg =>{

    const codeMorse = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "CH": "----",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...---",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        '"': ".-..-.",
        "/": "—··—·",
        " ": " ",
    }
    const caracteres = /[a-zA-Z0-9]/;
    
    let typeCode = caracteres.test(strg);
    if(typeCode){
         //alf to morse
         let cMorse = '';
         for(let i = 0; i < strg.length; i++){
             let letter = strg.charAt(i).toUpperCase();
             cMorse = cMorse + codeMorse[letter] + " ";
         }
         console.log(cMorse);
    }else{
         //morse to alf
         let alfString = '';
         let arrLetter = strg.split(' ');
         for(let i = 0; i < arrLetter.length; i++){
             let letterMorse = arrLetter[i];
             let letter = Object.keys(codeMorse).find(key => codeMorse[key] === letterMorse);
             if(letter)alfString = alfString + letter ;
             else alfString = alfString + ' ';
         }
         console.log(alfString.toLowerCase())
      
    }
}
morseConverter('sos');
morseConverter('... --- ...');



