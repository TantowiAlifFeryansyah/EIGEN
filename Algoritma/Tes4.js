function diagonalDifference(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    const difference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return `maka hasilnya adalah ${primaryDiagonalSum} - ${secondaryDiagonalSum} = ${difference}`;
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
console.log(diagonalDifference(matrix));
