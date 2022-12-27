import { SVGicon } from './icons'

let timelineElements = [
    {
        id:1,
        title: "Masters Student",
        location: "University of Maryland, College Park", 
        description: "First year student in the UMD Machine Learning Masters Program.",
        skillIcons: [],
        date: "September 2022 - Present",
        icon: "school"

    },
    {
        id:2,
        title: "Korion Health",
        location: "Pittsburgh", 
        description: "Co-founder of a healthcare-tech company called Korion Health. We are developing a stethoscope and guided user interface to empower individuals to record their own heart and lung sounds.",
        skillIcons: [SVGicon.html5, SVGicon.js, SVGicon.react],
        date: "March 2022 - Present",
        icon: "work"

    },
    
    {
        id:3,
        title: "Technica Hackathon Award",
        location: "University of Maryland, College Park", 
        description: "Poseify - A web application to create stick-figure gifs from live video",
        link : <a href = "https://devpost.com/software/poseify" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [SVGicon.html5, SVGicon.js],
        date: "November 2022",
        icon: "award"

    }, 
    {
        id:5,
        title: "Automated 5 phase classification of CT scans",
        location: "The National Institutes of Health, Bethesda", 
        description: "Automated classification of arterial, portal venous, nephrographic, delayed, and non-contrast phases for axial CT.",
        skillIcons: [SVGicon.python],
        date: "September 2021 - September 2022",
        icon: "work"

    }, 
    {
        id:4,
        title: "Treehacks Hackathon Award",
        location: "Stanford University", 
        description: "EmergeNeed - An app to provide tools to use during a medical emergency.",
        link : <a href = "https://devpost.com/software/hospital-hop" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [],
        date: "February 2022",
        icon: "award"
    },
    {
        id:7,
        title: "Technica Hackathon Award",
        location: "University of Maryland, College Park", 
        description: "SheConnect - An app to connect women+ in tech through coffee chats.",
        link : <a href = "https://devpost.com/software/sheconnect" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [SVGicon.python,SVGicon.react, SVGicon.figma],
        date: "November 2021",
        icon: "award"

    },
    {
        id:2,
        title: "Rare Variant Analysis and Risk Classification",
        location: "The National Institutes of Health, Bethesda", 
        description: "Conducted rare variant analysis of GRASP cohort and identified variant of interest. Used Random Forest Classifier to identify significant features from a large dataset of genes, TCR-B sequences, and clinical information",
        skillIcons: [SVGicon.python, SVGicon.r],
        date: "September 2020-September 2021",
        icon: "work"

    },
    {
        id:6,
        title: "Bachelors Dual-Degree",
        location: "University of Maryland, College Park", 
        description: "Graduated with dual-degree in Computer Science and Biology.",
        skillIcons: [],
        date: "September 2015 - December 2019",
        icon: "school"

    },
    {
        id:7,
        title: "Bitcamp Hackathon Award",
        location: "University of Maryland, College Park", 
        description: "CloseCall - An Android app to detect a car crash and notify first responders.",
        link : <a href = "https://devpost.com/software/close-call" target="_blank" rel="noopener noreferrer">Check out on Devpost<br /></a>,
        skillIcons: [SVGicon.android,SVGicon.js],
        date: "November 2021",
        icon: "award"

    }
    
    
    
]
export default timelineElements;