function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for(let i=0; i<nums.length-k; i+=k){
        for(let j=i+k; j<nums.length; j+=k){
            if(nums[i]==nums[j] && Math.abs(i-j)<= k)
                return true;
        }
    }
    return false
};