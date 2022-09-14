/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */


const checkLetters = (str1,str2) =>{
    let out1 = str1;
    let out2 = str2;
    for(let i = 0; i < str1.length ; i++ ){
        let letter = str1.charAt(i);
        out2 = out2.replaceAll(letter,'');
    }
    for(let i = 0; i < str2.length ; i++ ){
        let letter = str2.charAt(i);
        out1 = out1.replaceAll(letter,'');
    }
    console.log(out1);
    console.log(out2);
}

checkLetters('hola', 'comas');  

