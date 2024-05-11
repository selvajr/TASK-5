let MyResume = {
    name: "Selvaraj C",
    Title: "Full Stack Devloper",
    contact: {
        email: "magicalselva@gmail.com",
        phone: "9025062604",
        linkedin: "https://www.linkedin.com/in/selvaraj-c-5945a520a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQfBuus6FRGC9HRAdyS%2FGFg%3D%3D"
    },
    skills: ["HTML", "CSS", "JAVASCRIPT", "JAVA"],
    education : {
        degree: "Bachelor's in Computer Science and Engineering",
        university : "Anna University",
        College : "Excel Engineering College",
        graduationYear: 2021
    },
    School : {
        Name : "ST.Joseph' Hr Secondary School",
        graduationYear: 2017
    },
    "experience": [
        {
            "position": "Intern",
            "company": "Shiash Info tech Sollution PVT",
            "duration": "3months",
            "description": "Java Intern."
        },
    ],
}
for(let key in MyResume){
    console.log(key, MyResume)
}