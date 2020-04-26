export default function MakeTurn(board) {
    updateLife(0, 0, board)
}

function updateLife(x, y, board) {
    if (y >= board[0].length) {
        return
    }
    if (x >= board.length) {
        updateLife(0, y + 1, board)
        return
    }
    let count = getNeighborsCount(x, y, board);
    updateLife(x + 1, y, board);
    if (board[x][y].ref.current.state.isAlive === true && count < 2) {
        board[x][y].ref.current.toggleDeath()
    }
    if (board[x][y].ref.current.state.isAlive === true && count > 3) {
        board[x][y].ref.current.toggleDeath()
    }
    if (board[x][y].ref.current.state.isAlive !== true && count === 3) {
        board[x][y].ref.current.toggleDeath()
    }
}

function getNeighborsCount(x, y, board) {
    let neighborCoordinates = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]];
    let aliveNeighbors = 0;
    for (let i = 0; i < neighborCoordinates.length; i++) {
        if (x + neighborCoordinates[i][0] < 0 || x + neighborCoordinates[i][0] >= board.length ||
            y + neighborCoordinates[i][1] < 0 || y + neighborCoordinates[i][1] >= board[0].length) {
            continue;
        } else if (board[x + neighborCoordinates[i][0]][y + neighborCoordinates[i][1]].ref.current.state.isAlive === true) {
            aliveNeighbors++;
        }
    }
    return aliveNeighbors;
}