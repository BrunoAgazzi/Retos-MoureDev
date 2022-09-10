/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const numeroPrimoFuction = numberP => {
    let checkP = true;
    for ( let i = 2 ; i < numberP / 2 ; i++){  
    if (numberP % i === 0){
        checkP = false;
    }
          
    
    }
    if(numberP === 1 || numberP === 4){
        return;
    }
    if(checkP) {
        console.log(numberP);
    }
  }
  
for (let i = 1; i <= 100; i++) {
    numeroPrimoFuction(i);
}