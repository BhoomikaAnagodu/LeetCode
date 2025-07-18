function missingNumber(nums: number[]): number {
    let n = nums.length;
    let sum = (n * (n+1))/2;
    let arrSum = 0;
    for(let i = 0; i < n; i++){
        arrSum += nums[i]
    }
    return sum - arrSum;
};
