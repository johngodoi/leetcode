/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const merged:number[] = [];
    let pos = 0;
    let i = 0;
    let j = 0;

    while(pos<(m+n)){
        if(i==m){
            merged[pos] = nums2[j];
            j++;
        }
        else if(j==n){
            merged[pos] = nums1[i];
            i++;
        }
        else if(i<m && nums1[i]<nums2[j]){
            merged[pos] = nums1[i];
            i++;
        }
        else if(j<n) {
            merged[pos] = nums2[j];
            j++;
        }
        pos++;
    }
    for(let k=0; k<m+n; k++){
        nums1[k] = merged[k]
    }
};