function twoSum(nums: number[], target: number): number[] {
    const result = {};
    for(let i = 0; i < nums.length; i++){
        const sub = target - nums[i];
        if(result[sub] !== undefined){
           return [result[sub], i]
        } 
        result[nums[i]] = i;
    }
};
