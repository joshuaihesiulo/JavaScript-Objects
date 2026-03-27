let staff = [
  { name: "Amara", department: "Sales", salary: 120000 },
  { name: "Bola", department: "Tech", salary: 250000 },
  { name: "Chibike", department: "Sales", salary: 135000 },
  { name: "Dele", department: "Tech", salary: 310000 }
];
let highestSalary= 0

for(i=0; i<staff.length; i++){
    if(staff[i].department == "Tech"){
        console.log(staff[i].name)
    } 
    if(staff[i].salary>highestSalary){
         highestSalary= staff[i].salary
     }
} 
console.log(highestSalary)