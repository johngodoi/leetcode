function removeElement(nums: number[], val: number): number {
    const removed: number[] = [];
    let pos = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=val){
            removed[pos] = nums[i];
            pos++;
        }
    }
    for(let j=0; j<nums.length; j++){
        nums[j] = removed[j];
    }
    return pos;
};