function summaryRanges(nums: number[]): string[] {
    const ranges: string[] = [];
    let firstElement: number = nums[0];
    for(let i=0; i<nums.length; i++){
        if(i == nums.length-1){
            if(firstElement != nums[i]){
                ranges.push(`${firstElement}->${nums[i]}`)
            } else {
                ranges.push(`${firstElement}`)
            }
        } else if(nums[i]+1!=nums[i+1]){
            if(firstElement != nums[i]){
                ranges.push(`${firstElement}->${nums[i]}`)
            } else {
                ranges.push(`${firstElement}`)
            }
            firstElement = nums[i+1]
        } 
    }
    return ranges
};