/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


const convertToBinary = decimalNumber => {  
    let binaryNumber = '';
    for( let restNumber = decimalNumber; restNumber >= 2; restNumber / 2  ){
        restNumber = Math.floor(restNumber);
        binaryNumber = binaryNumber + (restNumber % 2);
    }
    console.log(binaryNumber);
}
convertToBinary(100);

