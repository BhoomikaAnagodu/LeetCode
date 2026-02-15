function shuffle(nums: number[], n: number): number[] {
    const arr = [];
    let x = 0;
    for(let i =0; i < n; i++){
        arr[x] = nums[i];
        arr[x+1] = nums[i+n];
        x+=2;
    }
    return arr;
};
