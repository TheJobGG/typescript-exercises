// Proporciona una matriz en formato string, ej '1 2 3 \n4 5 6\n7 8 9'
// y devuelve esa matriz pero en un array de number[][] formando así la matriz, ej:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

export class Matrix {
  private stringMatrix: string;
  constructor(stringMatrix: string) {
    this.stringMatrix = stringMatrix;
  }

  private convertToArrayOfNums() {
    const rowValues = this.stringMatrix.split('\n');
    const numArray = rowValues.map((str) => str.split(' ').map(Number));
    return numArray;
  }

  get rows(): number[][] {
    return this.convertToArrayOfNums();
  }

  get columns(): number[][] {

    const arr = this.convertToArrayOfNums();
    let pushed = [];
    let temp = [];

    for (let i = 0; i < arr[0].length; i++) {

      for (let j = 0; j < arr.length; j++) {
        temp.push(arr[j][i])
      }
      pushed.push(temp)
      temp = [];
    }
    return pushed
  }
}

/* let arr = '1 2'
const a = new Matrix(arr)

console.log(a.rows[0]);
console.log(a.columns[2]); */