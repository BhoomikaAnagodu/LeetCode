function hasAlternatingBits(n: number): boolean {
    let binaryNum = n.toString(2);
    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] === binaryNum[i + 1]) {
            return false;
        }
    }
    return true;
};
