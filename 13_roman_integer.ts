function romanToInt(s: string): number {
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const sRoman = s.split("");
    let smallerPrevious = false;
    let result = 0;
    for(let i=0; i<sRoman.length; i++){
        if(smallerPrevious){
            result += romans[sRoman[i]] - romans[sRoman[i-1]]
            smallerPrevious = false;
        }
        else if(romans[sRoman[i]] < romans[sRoman[i+1]]){
            smallerPrevious=true;
            continue;
        } else {
            result += romans[sRoman[i]]
        }
    }
    return result
};