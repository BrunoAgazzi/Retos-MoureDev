/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */


const funcion = expresión =>{

    let open = []
    let closed= []
    let balanceada = true;
    for(let i = 0 ; i < expresión.length; i++ ){
        let letter = expresión.charAt(i);
        if(letter === '[' || letter === '{' || letter === '(') open.push(letter); 
        else if(letter === ']' || letter === '}' || letter === ')') closed.unshift(letter); 
    }
    for(let i = 0 ; i < open.length; i++){
        if(open[i] === '{'){
            if (closed[i] !== '}') balanceada = false;
        }else if(open[i] === '['){
            if (closed[i] !== ']') balanceada = false;
        }else if(open[i] === '('){
            if (closed[i] !== ')') balanceada = false;
        }
    }
    if(balanceada)console.log('Expresión balanceada');
    else console.log('Expresión no balanceada');
    
}

funcion('{ [ a * ( c + d ) ] - 5 }');
funcion('{ a * ( c + d ) ] - 5 }');
