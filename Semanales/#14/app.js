/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información 
 * al respecto.
 */


const armstrongCheck = n => {
    let arr = [];
    let nString = String(n);
    let armstrong= 0;
    for(let i = 0; i < nString.length; i++){
        arr.push(nString.charAt(i));
    }
    
    for(let i = 0; i < arr.length; i++){
        armstrong = armstrong + Math.pow(Number(arr[i]),arr.length);
    }
    if(armstrong === n ) console.log('Es un numero Armstrong');
    else console.log('No es un numero Armstrong');
    
}


armstrongCheck(371);
armstrongCheck(8208);
armstrongCheck(4210818);
armstrongCheck(123);