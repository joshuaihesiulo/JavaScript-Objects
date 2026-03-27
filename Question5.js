let students= [
    Student1= {name: "Solomon", score: 95},
    Student2= {name: "Emmanuel", score: 100},
    Student3= {name: "George", score: 49}
]
let count= 0

for(i=0; i<students.length; i++){
    console.log(students[i].name, students[i].score)
    if(students[i].score>=50){
        count++
    }
}
console.log(`${count} students passed at the end.`)