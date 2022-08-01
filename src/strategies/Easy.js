// @ts-check
/* eslint-disable class-methods-use-this */

class Easy {
  getNextStep(state) {
    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        if (state[x][y] === '') {
          return [x, y];
        }
      }
    }
    return false;
  }
}
export default Easy;
