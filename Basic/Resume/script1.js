//Program-1
//Aasignment On Resume Using Object & Array

const resume = [{
    name: "Priyank Mehra",
    title: "Certified Full Stack Wed Developer",
    contactNo: "(718)212-6466",
    linkedInProfil: "linkedn.com/in/priyankamehra",
    emailId: "priyanka.mehra@gmaail.com",
    discription: "Dedicated and effecient full stack developer with 6+ year experience in application layers,presentation layers,and database.Certified in both F/E and B/E technologies",
    experience: [
        {
            startDate: "2016-05",
            endDate: "2019-06",
            title: "Full Stack Developer",
            company: "Generl Gaming",
            location: "Bostan,MA",
            responsibilities: [
                "1) DFS web applications which processed,analzyed and render data",
                "2) Liaised with back and developers,qyality tester and CTO as need",
                "3) Managed time-senstive updates,including content and database",
                "4) Planned, wrote, and ebugged web application and software with complete accuracy"
            ],
            achievements: "Spreaheaded transition from LAMP stack to MEAN stack and reduce latency 40% and increased database 20%",
        },
        {
            startDate: "2012-12",
            endDate: "2017-04",
            title: "Junior Full Stack Developer",
            company: "Crazy Lazy Apps",
            location: "Los Angles,CA",
            responsibilities: [
                "1) Maximized app.effic., data, scope, flexibilty",
                "2) Used various data for computing, large scale design, real time data process and storage",
                "3) Managed, Optimized and upadate PHP databsae",
                "4) Developed app intregation with REST/ SOAP and other AIPs"
            ]
        }

    ],
    education: [
        {
            year: 2011,
            course: "Bsc In Software Development",
            college: "Champlain College",
            location: "Burlington,VT",
            relevantCourses: [
                `OSA,L/U Programer, Usablilty in Website and software Design, C++ Programmer I&II,Wed Page Developer,Database designer `
            ]
        }
    ],
    skills: [
        {
            language: "Google Compute Engine",
            rate: 5
        },
        {

            language: "Android and iOS App Development",
            rate: 3
        },
        {

            language: "HTML,CSS,JS,PHP",
            rate: 5
        },
        {

            language: "Bootstrap and Angular JS",
            rate: 4
        },
        {

            language: "SQL & jQuery",
            rate: 5
        }
    ]


}]


let { skills: { language: x } } = resume;
console.log(x);
