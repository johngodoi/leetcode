function majorityElement(nums: number[]): number {
    const appears = {}
    let majorityElement = 0
    let highFrequency = 0
    nums.forEach(n => {
        if(n in appears){
            appears[n] = appears[n]+1
        } else {
            appears[n] = 1
        }
    })
    for(let k in appears){
        if(highFrequency < appears[k]){
            highFrequency = appears[k]
            majorityElement = parseInt(k)
        }
    }
    return majorityElement
};