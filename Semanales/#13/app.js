/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */


let factorial = n => {
   
    if (n = 0){
        return 1;

    }
    else 
    return n * factorial(n - 1)
}

factorial(5);


