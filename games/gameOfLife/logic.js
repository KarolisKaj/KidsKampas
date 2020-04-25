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
    var count = getNeighborsCount(x, y, board);
    updateLife(x + 1, y, board);
    if (board[x][y].state.isAlive && count < 2)
        board[x][y] = 0;
    if (board[x][y].state.isAlive && count > 3)
        board[x][y] = 0;
    if (!board[x][y].state.isAlive && count == 3)
        board[x][y] = 1;
}

const neighborCoordinates = [
    [1, 0]
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1]]

function getNeighborsCount(x, y, board) {
    let aliveNeighbors = 0;
    for (i = 0; i < neighborCoordinates.Length; i++) {
        if (x + neighborCoordinates[i][0] < 0 || x + neighborCoordinates[i][0] >= board.Length ||
            y + neighborCoordinates[i][1] < 0 || y + neighborCoordinates[i][1] >= board[0].Length) {
            // Out of bounds;
            continue;
        }
        if (board[x + neighborCoordinates[i][0]][y + neighborCoordinates[i][1]].state.isAlive) {

            aliveNeighbors++;
        }
    }
    return aliveNeighbors;
}