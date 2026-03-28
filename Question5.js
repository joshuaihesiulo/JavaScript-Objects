function gradeScores(){
  
    let students= [
        {name: "Solomon", score: 95},
        {name: "Emmanuel", score: 100},
        {name: "George", score: 49}
    ]
    let count= 0
    
    for(i=0; i<students.length; i++){
        console.log(students[i].name, students[i].score)
        if(students[i].score>=50){
            count++
        }
    }
    console.log(`${count} students passed at the end.`)
    return
}
gradeScores()