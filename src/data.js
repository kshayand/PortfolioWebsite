import { SVGicon } from './icons'

let timelineElements = [
    {
        id:1,
        title: "Masters Student",
        location: "University of Maryland College Park", 
        description: "First year student in the UMD Machine Learning Masters Program.",
        skillIcons: [],
        date: "September 2022 - Present",
        icon: "school"

    },
    {
        id:2,
        title: "Co-founder",
        location: "Korion Health", 
        description: "Co-founder of a healthcare-tech company called Korion Health. We are developing a stethoscope and guided user interface to empower individuals to record their own heart and lung sounds.",
        link : <a href = "https://www.korionhealth.com/" target="_blank" rel="noopener noreferrer">Check us out<br /></a>,
        skillIcons: [SVGicon.html5, SVGicon.js, SVGicon.react],
        date: "March 2022 - Present",
        icon: "work"

    },
    {
        id:3,
        title: "Independent Contractor",
        location: "5Metis", 
        description: "Automating data processing pipelines.",
        skillIcons: [SVGicon.python],
        date: "March 2022 - Present",
        icon: "work"

    },
    {
        id:4,
        title: "Dance Teacher",
        location: "Jayamangala School of Music and Dance", 
        description: "Teaching Classical Indian dance.",
        skillIcons: [],
        date: "September 2019 - Present",
        icon: "school"
    },
    {
        id:5,
        title: "Technica Hackathon Award",
        location: "University of Maryland College Park", 
        description: "Poseify - A web application to create stick-figure gifs from live video.",
        link : <div><a href = "https://devpost.com/software/poseify" target="_blank" rel="noopener noreferrer">Check out on Devpost<br/></a><a href = "https://editor.p5js.org/kshayand/sketches/8TIDJ8xyI" target="_blank" rel="noopener noreferrer">Try Demo<br></br></a></div>,
        skillIcons: [SVGicon.html5, SVGicon.js],
        date: "November 2022",
        icon: "award"

    }, 
    {
        id:6,
        title: "Automated 5 phase classification of CT scans",
        location: "The National Institutes of Health", 
        description: "Automated classification of arterial, portal venous, nephrographic, delayed, and non-contrast phases for axial CT. Accepted as oral presentation at SPIE Medical Imaging 2023.",
        skillIcons: [SVGicon.python],
        date: "September 2022",
        icon: "work"

    }, 
    {
        id:7,
        title: "Treehacks Hackathon Award",
        location: "Stanford University", 
        description: "EmergeNeed - An app to provide tools to use during a medical emergency.",
        link : <a href = "https://devpost.com/software/hospital-hop" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [],
        date: "February 2022",
        icon: "award"
    },
    {
        id:8,
        title: "Technica Hackathon Award",
        location: "University of Maryland College Park", 
        description: "SheConnect - An app to connect women+ in tech through coffee chats.",
        link : <a href = "https://devpost.com/software/sheconnect" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [SVGicon.python,SVGicon.react, SVGicon.figma],
        date: "November 2021",
        icon: "award"

    },
    {
        id:9,
        title: "Rare Variant Analysis and Risk Classification",
        location: "The National Institutes of Health", 
        description: "Conducted rare variant analysis using genomic data. Used Random Forest Classifier to identify significant features from a large dataset of genes, TCR-B sequences, and clinical information.",
        skillIcons: [SVGicon.python, SVGicon.r],
        date: "September 2021",
        icon: "work"

    },
    {
        id:10,
        title: "Teaching Assistant",
        location: "FAES-NIH", 
        description: "Introduction to python.",
        skillIcons: [],
        date: "March 2021",
        icon: "school"

    },
    {
        id:11,
        title: "Bachelors Dual-Degree",
        location: "University of Maryland College Park", 
        description: "Graduated with dual-degree in Computer Science and Biology.",
        skillIcons: [],
        date: "December 2019",
        icon: "school"

    },
    {
        id:12,
        title: "Independent Contractor",
        location: "AgriMetis", 
        description: "Set up database and visualizations for agri-chemical efficacy data. Automated the data processing pipeline.",
        skillIcons: [SVGicon.python],
        date: "September 2019",
        icon: "work"

    },
    {
        id:13,
        title: "Teaching Assistant",
        location: "University of Maryland College Park", 
        description: "Bioinformatic Algorithms.",
        skillIcons: [],
        date: "May 2019",
        icon: "school"

    },
    {
        id:14,
        title: "Teaching Assistant",
        location: "University of Maryland College Park", 
        description: "Introductory Web Development.",
        skillIcons: [],
        date: "December 2018",
        icon: "school"

    },
    {
        id:15,
        title: "Bitcamp Hackathon Award",
        location: "University of Maryland College Park", 
        description: "CloseCall - An Android app to detect a car crash and notify first responders.",
        link : <a href = "https://devpost.com/software/close-call" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [SVGicon.android,SVGicon.js],
        date: "April 2018",
        icon: "award"

    }
    
    
    
]
export default timelineElements;