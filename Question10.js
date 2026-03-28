function claculateSumOfEvens(){
   
    let numericals= [
        {number: 10},
            {number: 22},
            {number: 33},
            {number: 44},
            {number: 55
        }]
    let sumOfEven= 0
    
    
    for(i=0; i<numericals.length; i++){
        if(numericals[i].number %2===0){
            sumOfEven+= numericals[i].number
            console.log(`Even`)
        } else (console.log(`False`))
    }
    console.log(sumOfEven)
    return
}
claculateSumOfEvens()