/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

const palindromoCheck = text =>{
    let check = false;
    let textCut = text.toLowerCase().replace(' ','').replace('.','').replace(',','').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let textRevers= '';
    for (let i = 0; i < textCut.length; i++) {
        const letter = textCut.charAt(i);
        textRevers = letter + textRevers;
        
    }
    if(textCut === textRevers) check = true;
    console.log(check);
    console.log(textCut);

}

palindromoCheck('anana');
palindromoCheck('coco');
