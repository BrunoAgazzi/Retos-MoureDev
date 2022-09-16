/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */





let board = new Array(3);
board[0] = new Array(3);
board[1] = new Array(3);
board[2] = new Array(3);
board[0][0] = 'X';
board[0][1] = 'X';
board[1][0] = 'O';
board[1][1] = 'X';
board[0][2] = 'X';
board[2][1] = 'O';
board[1][2] = 'X';
board[2][0] = 'O';
board[2][2] = 'O';


const checkWin = (board,type) => {
    let result = false;

    if((board[0][0]+board[0][1]+board[0][2] ) === type) result = true;
    else if(board[1][0]+board[1][1]+board[1][2] === type) result = true;
    else if((board[2][0]+board[2][1]+board[2][2]) === type) result = true;
    else if((board[0][0]+board[1][0]+board[2][0]) === type) result = true;
    else if((board[0][1]+board[1][1]+board[2][1]) === type) result = true;
    else if((board[0][2]+board[1][2]+board[2][2]) === type) result = true;
    else if((board[0][0]+board[1][1]+board[2][2]) === type) result = true;
    else if((board[2][0]+board[1][1]+board[0][2]) === type) result = true;
    return result;
}


const resultGame = board => {

    let winX = checkWin(board,'XXX');
    let winO = checkWin(board,'OOO');
    console.table(board)
    if(!winO && winX) console.log('Win X');
    else if(winO && !winX) console.log('Win O');
    else if(!winO && !winX) console.log('Empate');
    else console.log('Nulo')
}

resultGame(board);



