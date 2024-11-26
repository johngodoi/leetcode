function decodeMessage(key: string, message: string): string {
    let subs = {};
    let pos = 'a';
    let newMsg = '';
    for(let i=0; i<key.length; i++){
        if(key[i]!=' '){
            if(pos=='a' || subs[key[i]]==undefined){
                subs[key[i]]=pos;
                pos = String.fromCharCode(pos.charCodeAt(0) + 1);
            }
        }
    }
    
    for(let j=0; j<message.length; j++){
        if(message[j]==' '){
            newMsg+=' ';
        }
        else {
            newMsg+=subs[message[j]];
        }
    }
    return newMsg;
};