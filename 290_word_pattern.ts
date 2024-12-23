function wordPattern(pattern: string, s: string): boolean {
    const patternLettersList = pattern.split("")
    const wordsList = s.split(" ")
    const letterWordMap = {}
    const usedWords = new Set()
    
    if(patternLettersList.length != wordsList.length) return false;

    for(let i=0; i<patternLettersList.length; i++){
        const letter = patternLettersList[i];
        if(!(letter in letterWordMap) && !(usedWords.has(wordsList[i]))){
            letterWordMap[letter] = wordsList[i]
            usedWords.add(wordsList[i])
        } else if (letterWordMap[letter]!=wordsList[i]){
            return false
        }
    }
    return true;
};