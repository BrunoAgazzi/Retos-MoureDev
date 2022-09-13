/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


const convertToBinary = decimalNumber => {  
    let binaryNumber = '';
    for( let i = 2; decimalNumber > 0; i ++  ){
        if(decimalNumber >= 2){
            binaryNumber= (decimalNumber % 2) + binaryNumber;
            decimalNumber = Math.floor(decimalNumber/2);
        }else{
            binaryNumber= 1 + binaryNumber;
            decimalNumber = 0;
        }    
    }
    console.log(binaryNumber);
}
convertToBinary(85);
