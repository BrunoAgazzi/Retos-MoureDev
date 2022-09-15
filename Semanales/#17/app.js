/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */



const raceResult = (racetrack, route) => {
    let finish = true;      

    for (let i = 0; i < racetrack.length; i++) {
        if(racetrack[i] === '|' && route[i] === 'run'){
            console.log('Error en el tramo:' + i +' /');
            finish = false;
        }else if(racetrack[i] === '_' && route[i] === 'jump'){
            console.log('Error en el tramo:' + i +' x');
            finish = false;
        }
    }
    console.log('Supero la carrera:' + finish);
}


raceResult(['|','_','|','_','|','|'], ['jump','run','jump','run','jump','jump']);
raceResult(['|','_','|','_','_','|'], ['run','run','jump','run','jump','jump']);