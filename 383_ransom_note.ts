function canConstruct(ransomNote: string, magazine: string): boolean {
    let magazineLetters = magazine.split("")
    let countMatches = 0;
    const ransomNoteLetters = ransomNote.split("")
    ransomNoteLetters.forEach(l => {
        for(let i=0; i<magazineLetters.length; i++){
            if(magazineLetters[i]==l){
                magazineLetters.splice(i, 1);
                countMatches++;
                break
            }
        }
    });
    return countMatches == ransomNoteLetters.length
};