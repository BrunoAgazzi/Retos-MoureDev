/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */


const factorial = number => {
    
    let rest = 1;
    for (let i = 1; i <= number; i++) {
        rest = rest * i ;
        
    } 
    console.log(rest)
}

factorial(5);