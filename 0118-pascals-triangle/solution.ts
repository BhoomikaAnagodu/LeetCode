function generate(numRows: number): number[][] {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    let result = [];
    for(let i = 1; i <= numRows; i++){
        let arr = [];
        for(let j = 1; j <= i ; j++) {
            if(j === 1 || j === i){
                arr.push(1);
            } else {
                arr.push((result[i-2][j-2] + result[i-2][j-1]))
            }
        }
        result.push(arr);
    }
    return result;
};
