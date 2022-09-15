/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

const daysDate = strg => {
    let dateCut = strg.split('/');
    let days = Number(dateCut[0]);
    let monthDays = Number(dateCut[1]);
    let yearDays = Number(dateCut[2]);

    //from month to days
    let arrMonth = [0,31,59,90,120,151,181,212,243,273,304,334];
    days = days + arrMonth[monthDays -1];
    //leap-year
    if(yearDays % 4 === 0 && monthDays <= 2 ) days--; 
    //from years to days
    days = days + (yearDays * 365)+ Math.floor(yearDays/4);
    return days;  
}

const daysDifference = (strg1,strg2) => {
    let days1 = daysDate(strg1);
    let days2 = daysDate(strg2);
    if(days1 > days2) console.log('La diferencia es de: ' + (days1 - days2)+ ' días');
    else console.log('La diferencia es de: ' + (days2 - days1 + ' días'));

} 



daysDifference('21/02/2000','03/03/1998');
daysDifference('29/09/1998','15/09/2022');
