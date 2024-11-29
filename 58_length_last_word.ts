function lengthOfLastWord(s: string): number {
    const ws = s.trim().split(/\s+/)
    const lastW = ws[ws.length-1]
    return lastW.length
};