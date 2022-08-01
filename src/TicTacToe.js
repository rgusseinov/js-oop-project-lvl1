import Easy from "./strategies/Easy";
import Normal from "./strategies/Normal";

class TicTacToe {
  constructor(level = 'easy') {
    this.state = [
      Array(3).fill(''),
      Array(3).fill(''),
      Array(3).fill(''),
    ];

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
    if (x !== null && y !== null) {
      this.state[x][y] = 'Player';
      return this.isWinner('Player');
    }

    const [i, j] = this.strategy.getNextStep(this.state);
    this.state[i][j] = 'IA';
    return this.isWinner('IA');
  }

  isWinner(type) {
    if (this.state.find((row) => this.hasPlayerMarkedAllSteps(row, type))) {
      return true;
    }

    for (let i = 0; i < 3; i += 1) {
      if (this.state[0][i] === type && this.state[1][i] === type && this.state[2][i] === type) {
        return true;
      }
    }

    if (this.state[0][0] === type && this.state[1][1] === type && this.state[2][2] === type) {
      return true;
    }

    if (this.state[0][2] === type && this.state[1][1] === type && this.state[2][0] === type) {
      return true;
    }
  
    return false;
  }


  hasPlayerMarkedAllSteps(row, type) {
    return row.every((cell) => cell === type);
  }

  // END
}

export default TicTacToe;
