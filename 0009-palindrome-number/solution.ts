function isPalindrome(x: number): boolean {
    if(x < 0){
        return false;
    }
    let reverseNum = 0;
    let xCopy = x;
    while(x > 0){
        reverseNum = (reverseNum * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return xCopy == reverseNum;
};
