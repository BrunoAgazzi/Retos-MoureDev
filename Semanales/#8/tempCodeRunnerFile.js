const convertToBinary = decimalNumber => {
    let restNumber = decimalNumber;
    let binaryNumber = '';

    for (let i = 1; i >= 1; i++ ){
        if (restNumber >= 2){
            binaryNumber = binaryNumber + (restNumber % 2);
            restNumber = restNumber / 2;
        }
        else i = i + 0;
    }

    console.log(binaryNumber);

}
convertToBinary(100);