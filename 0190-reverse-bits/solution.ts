function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let bit = (n >>> i) & 1;
        let position = 31 - i;
        result += bit << position;
    }

    return result >>> 0; 
};
