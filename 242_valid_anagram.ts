function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false
    const sList = s.split("");
    const sSet = new Set(sList);

    const tList = t.split("");
    const tSet = new Set(tList);
    const arr1 = Array.from(sSet).sort();
    const arr2 = Array.from(tSet).sort();
    if(arr1.some((value, index) => value !== arr2[index])) return false;

    const sLetterCount = {}
    const tLetterCount = {}
    for(let i=0; i<sList.length; i++){
        if(sList[i] in sLetterCount){
            sLetterCount[sList[i]]=sLetterCount[sList[i]]+1
        } else {
            sLetterCount[sList[i]]=1
        }
    }
    for(let i=0; i<tList.length; i++){
        if(tList[i] in tLetterCount){
            tLetterCount[tList[i]]=tLetterCount[tList[i]]+1
        } else {
            tLetterCount[tList[i]]=1
        }
    }
    for(const k in sLetterCount){
        if(tLetterCount[k]!=sLetterCount[k]){
            return false
        }
    }
    return true;
};