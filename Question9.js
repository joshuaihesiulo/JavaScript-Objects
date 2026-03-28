function verifyLengthOfWord(){

    let sentence= [
       {word: "car", length: 3},
       {word: "door", length: 4},
       {word: "type", length: 4},
       {word: "sleep", length: 5},
       {word: "carry", length: 5}]
    
    
    for(i=0; i<sentence.length; i++){
        if(sentence[i].length=== sentence[i].word.length){
            console.log(`Correct`)
        } else (console.log(`False`))
    }
    return
}
verifyLengthOfWord()