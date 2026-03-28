function listHobbies(){

    let profile= 
        {firstName: "Joshua",
        lastName: "Ihesiulo",
        age: 18,
        hobbies: ["Playing", "Video", "Games", "and", "reading", "playing", "football"]}
    
    let fullName= profile.firstName + " " + profile.lastName
    
    console.log(fullName)
    
    for(i=0; i<profile.hobbies.length; i++){
        console.log(profile.hobbies[i])
        
    }
    return
}
listHobbies()