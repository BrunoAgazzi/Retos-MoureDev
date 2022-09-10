/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const areaFuction =  (base, altura, lados) => {
 
  	if(lados === 3){
      const area = base * altura /2;
      console.log('El área es ' + area);
    }else if(lados === 4){
      const area = base * altura ;
      console.log('El área es ' + area);
    }else console.log('Solo Triángulo, Cuadrado o Rectángulo');
  
}

areaFuction(120, 150, 3);