function longestCommonPrefix(strs: string[]): string {
    let lastCommonLetter = -1;
    const firstWordLetters = strs[0].split("")
    let nonCommonLetter = false;
    for(let i=0; i<firstWordLetters.length; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[j].charAt(i)!=firstWordLetters[i].charAt(0)){
                console.log(`failed at${i}`)
                nonCommonLetter = true;
                break;
            }
        }
        if(!nonCommonLetter){
            lastCommonLetter=i
        } else break;
    }
    return strs[0].substring(0,lastCommonLetter+1)
};