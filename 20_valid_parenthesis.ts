function isValid(s: string): boolean {
    const characters = s.split("")
    const stack:string[] = []
    for(let i=0; i<characters.length; i++){
        const character = characters[i]
        if(characters.length%2==1){
            return false
        } else if (["(", "[", "{"].includes(character)) {
            stack.push(character)
        } else if ([")", "]", "}"].includes(character)) {
            const last = stack[stack.length-1]
            if(character == ")" && last != "(") return false
            if(character == "]" && last != "[") return false
            if(character == "}" && last != "{") return false
            stack.pop()
        }
    }
    return stack.length == 0
};