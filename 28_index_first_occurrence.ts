function strStr(haystack: string, needle: string): number {
    return haystack.search(new RegExp(needle, "g"))
};