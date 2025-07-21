function reverseWords(s: string): string {
    let str = s.trim().split(" ");
    let reversedWordArr = [];
    for(let j = str.length - 1; j >= 0; j--){
        if (str[j] === "") {
            continue;
        }
       reversedWordArr.push(str[j]);
    }
    return reversedWordArr.join(" ");
};
