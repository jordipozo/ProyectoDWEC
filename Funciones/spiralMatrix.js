/**
 *  Given a matrix of m x n elements (m rows, n columns),
 *  return all elements of the matrix in spiral order.
 *  For example,
 *  Given the following matrix:
 *  [
 *   [ 1, 2, 3 ],
 *   [ 4, 5, 6 ],
 *   [ 7, 8, 9 ]
 *  ]
 *
 *
 *  It should return [1, 2, 3, 6, 9, 8, 7, 4, 5].
 */
function spiral_traversal(array) {
    var result = [];

    if (array.length == 0 ){
        return result;
    }

    var max = array[0].length -1;

    // Grab the first row | result.push.apply(result,array[0])
    for (var i=0;i<=max;i++){
        result.push(array[0][i]);
    }

    // Grab the last column
    for (var i=1;i< max;i++){
        result.push(array[i][max]);
    }

    // Grab the last row
    for (var i=max;i>=0;i--){
        result.push(array[max][i]);
    }

    // Grab the first column
    for (var  i=max-1;i> 0;i--){
        result.push(array[i][0]);
    } 

    subarray = [];
    // Form the inner matrix
    for (var i=1;i<max;i++){
        subarray.push(array[i].splice(1,max-1));
    }

    //call it recursively
    result = result.concat( spiral_traversal(subarray) );

    return result;
}