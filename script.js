//Q1.JSON iterate over all for loops (for,for in,for of)
const list = {
    "firstname": "bharath",
    "lastname": "kumar",
    "age": "23",
    "qulification": ["10", "12", "BCA", "MCA"],
    "skils": ["java", "c", "javascript", "HTML5","CSS3"]
}
//for looping:-
for (let i = 0; i < list.skils.length; i++) {
    console.log(list.skils[i]);
}
//for in looping:-
for (let j in list) {
    console.log(j,list[j]);
}
//for of looping:-
for (let k of list.qulification) {
    console.log(k);
}
console.log(`            Q1 is end         `);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Q2.create a own resume data in json format;

const resume={
    "name":{
    "firstName":"Bharath",
    "lastName":"Kumar",
    },
    "DOB":"21-02-2000",
    "passOut":"2023",
    "university":"vels university",
    "qulification":["10","12","BCA","MCA"],
    "skils":["c","java","html5","css3","javascript","communication"],
    "currentWorking":"Student",
    "role":"Webdevloper",
    "workingExperience":"1year",
    "address":{
        "street":"MGR Street",
        "area":"Anna nager",
        "city":"Chennai",
        "state":"Tamilnadu",
        "contry":"India"
    },
    "extraActivety":{
        "hobby":["reading","coding","problemSolving","photography"],
        "levels":{
            "cricket":"playing state level",
            "foodball":"playing area level"
        },
        "badhobby":["over sleeping","over eating","late night work"]
    },
    "salaryExpatation":"3LPA"
}
console.log(resume);
// console.log(resume.name);
// console.log(resume.DOB);
// console.log(resume.address.street,resume.address.area,resume.address.city,resume.address.state,resume.address.contry);
// console.log();
console.log(`            Q2 is end         `);