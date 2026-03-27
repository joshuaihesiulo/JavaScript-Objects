let sentence= 
   {word: "car", length: 3,
   word: "door", length: 4,
   word: "type", length: 4,
   word: "sleep", length: 5,
   word: "carry", length: 5}

let sentenceArray= [sentence]

for(i=0; i<sentenceArray.length; i++){
    if(sentenceArray[i].length=== sentenceArray[i].word.length){
        console.log(`Correct`)
    } else (console.log(`False`))
}