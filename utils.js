

function matrixProduct (mat1, mat2) {
   let newMatrix = [];
    for (let row=0; row<mat1.length; row++) {
        newMatrix[row] =[];
        for (let col=0; col<mat2.length; col++) {
            sum =0;
            for (let n=0; n<mat1.length; n++) {
                sum+= mat1[row][n]* mat2[n][col]
            }
          newMatrix[row][col]=sum;
        }
    }
    return newMatrix;
}

function sumOfMatrices (mat1, mat2) {
    let newMat=[];
    for (let row=0; row< mat1.length; row++) {
        newMat[row]=[];
        let sum=0;
        for (let col=0; col<mat1[0].length; col++) {
            sum=(mat1[row][col]+mat2[row][col]);
            newMat[row][col]=sum;
            
        }
        
    }
    return newMat;
}
function sumOfArray (arr) {
    let sum=0;
    for (let i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}

function sumOfEachRow (mat) {
let newMat =[];
for (let row=0; row<mat.length; row++){
    newMat.push(sumOfArray(mat[row]));
}
return newMat;
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow

}