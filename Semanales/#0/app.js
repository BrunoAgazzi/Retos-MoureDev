
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (var i = 0; i <= 100 ; i++){
	
    var fizz = Number.isInteger(i / 3);
    var buzz = Number.isInteger(i / 5);

    if ( i == 0 ){
    console.log(i);
  }else if( fizz === true && buzz == false ){
    console.log('fizz');
  }else if( fizz == false  && buzz === true ){
    console.log('buzz');
  }else if( fizz === true && buzz === true){
    console.log('fizzbuzz');
  }else{
    console.log(i);
  }
}