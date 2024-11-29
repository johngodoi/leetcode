function isPalindrome(s: string): boolean {
    const word = s.split("").map(c => new RegExp("^[a-zA-Z0-9]+$").test(c)? c.toLowerCase() : "").join("")
    return word == word.split("").reverse().join("")
};