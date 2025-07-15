function romanToInt(s: string): number {
    let romanObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let num = 0;
 
    for(let i = 0; i < s.length; i++){
        if(s[i] === "I" && s[i+1] === "V"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        }else if(s[i] === "I" && s[i+1] === "X"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        } else if(s[i] === "X" && s[i+1] === "L"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        } else    if(s[i] === "X" &&  s[i+1] === "C"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        } else if(s[i] === "C" && s[i+1] === "D"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++;
        } else if(s[i] === "C" && s[i+1] === "M"){
            num += romanObj[s[i+1]] - romanObj[s[i]];
            i++; 
        } else {
            num += romanObj[s[i]];
        }
    }
    return num;
};
