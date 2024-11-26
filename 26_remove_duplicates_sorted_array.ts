function removeDuplicates(nums: number[]): number {
    let n = [];
    let pos:number = 0;
    for(let i=0; i<nums.length; i++){
        if(pos==0 || n[pos-1]!=nums[i]){
            n[pos]=nums[i];
            pos++
        }
    }
    for(let j=0; j<nums.length; j++){
        if(n.length>0 && n[j] != undefined){
            nums[j]=n[j]
        } else {
            nums[j]=0
        }
    }
    return pos
};