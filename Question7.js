let profile= 
    {firstName: "Joshua",
    lastName: "Ihesiulo",
    age: 18,
    hobbies: ("Playing", "Video", "Games", "and", "reading", "playing", "football")}

let profileArray = [profile]
let fullName= profile.firstName + " " + profile.lastName

console.log(fullName)

console.log(profile.hobbies)

for(i=0; i<profileArray.length; i++){
    console.log(profileArray[i].hobbies)
    console.log(profileArray[i].hobbies.length)
}