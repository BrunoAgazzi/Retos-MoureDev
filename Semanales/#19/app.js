/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */



const changeHours = (days,hours,minutes,seconds) =>{

    let msInD = ((((days*24)*60)*60)*1000);
    let msInH = (((hours*60)*60)*1000);
    let msInM = ((minutes * 60)*1000);
    let msInS = (seconds *1000);
    console.log(msInD+msInH+msInM+msInS+'ms');

}

changeHours(1,2,20,40)



