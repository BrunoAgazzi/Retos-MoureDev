/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


const convertToBinary = decimalNumber => {
    let restNumber = decimalNumber;
    let binaryNumber = '';

    for (let i = 1; i >= 1; i++ ){
        console.log(1);
        if (restNumber / 2 >= 2){
            binaryNumber = binaryNumber + (restNumber % 2);
            restNumber = restNumber / 2;
        }
        else {i =  0};
    }

    console.log(binaryNumber);

}
convertToBinary(100);

