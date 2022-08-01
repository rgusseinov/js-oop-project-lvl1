import Easy from "./strategies/Easy";
import Normal from "./strategies/Normal";

class TicTacToe {
  constructor(level = 'easy') {
    this.state = [
      Array(3).fill(''),
      Array(3).fill(''),
      Array(3).fill(''),
    ];
    this.currentPlayer = '';
    switch (level) {
      case 'easy':
        this.strategy = new Easy();
        break;
      case 'normal':
        this.strategy = new Normal();
        break;
    }
  }

  go(x = null, y = null) {
    console.log(this.state[0]);

    if (x !== null && y !== null) {
      this.currentPlayer = this.userPlayer;
      this.state[x][y] = this.userPlayer;
      return this.isWinner();
    }
    this.currentPlayer = this.computerPlayer;
    const [i, j] = this.strategy.getNextStep(this.state);
    this.state[i][j] = this.computerPlayer;
    return this.isWinner();
  }

  isWinner() {
    if (this.isWinnerByCellAndColumn() || this.isWinnerByDiagonal()) {
      return true;
    }
    return false;
  }

  isWinnerByCellAndColumn() {  
    if (this.state.find((row) => this.hasPlayerMarkedAllSteps(row, this.currentPlayer))) {
      return true;
    }

    for (let i = 0; i < 3; i += 1) {
      if (this.state[0][i] === this.currentPlayer && this.state[1][i] === this.currentPlayer && this.state[2][i] === this.currentPlayer) {
        return true;
      }
    }

    return false;
  }

  isWinnerByDiagonal() {
    if (this.state[0][0] === this.currentPlayer && this.state[1][1] === this.currentPlayer
        && this.state[2][2] === this.currentPlayer
        || this.state[0][2] === this.currentPlayer && this.state[1][1] === this.currentPlayer
        && this.state[2][0] === this.currentPlayer) {
      return true;
    }
    return false;
  }

  hasPlayerMarkedAllSteps(row, player) {
    return row.every((cell) => cell === player);
  }

  // END
}

export default TicTacToe;
