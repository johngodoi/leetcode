function isSubsequence(s: string, t: string): boolean {
    const sLetters = s.split("")
    const tLetters = t.split("")
    let lastFoundPosition = 0;
    let countFindings = 0;
    for(let i=0; i<sLetters.length; i++){
        for(let j=lastFoundPosition; j<tLetters.length; j++){
            if(sLetters[i]==tLetters[j]){
                lastFoundPosition = j+1;
                countFindings++;
                break
            }
        }
        if(countFindings==0){
            break
        }
    }
    return sLetters.length == countFindings
};