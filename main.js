const a = require('./utils.js')
let A = [
    [1, 2],
    [3, 4],
];

let B = [
    [5, 6],
    [7, 8],
];
console.log(a.sumOfEachRow(B))
console.log(a.matrixProduct(A,B))
console.log(a.sumOfMatrices(A,B));