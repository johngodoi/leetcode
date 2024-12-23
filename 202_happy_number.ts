function isHappy(n: number): boolean {
    if(n==1) return true
    if(n==2) return false
    if(n==3) return false
    if(n==4) return false
    const digits = n.toString().split("").map(i=> parseInt(i))
    let newN = 0;
    for(let i=0; i<digits.length; i++){
        newN+=digits[i]*digits[i]
    }
    return isHappy(newN)
};