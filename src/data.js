import { SVGicon } from './icons'

let timelineElements = [
    {
        id:4,
        title: "Masters Student",
        location: "University of Maryland, College Park", 
        description: "First year student in the UMD Machine Learning Masters Program.",
        skillIcons: [],
        date: "September 2022",
        icon: "school"

    },
    {
        id:3,
        title: "Korion Health",
        location: "Pittsburgh", 
        description: "Co-founded a healthcare-tech company called Korion Health. We are developing a stethoscope and guided user interface to empower individuals to record their own heart and lung sounds.",
        skillIcons: [SVGicon.html5, SVGicon.js, SVGicon.react],
        date: "March 2022",
        icon: "work"

    },
    
    {
        id:1,
        title: "Automated 5 phase classification of CT scans",
        location: "The National Institutes of Health, Bethesda", 
        description: "Automated classification of arterial, portal venous, nephrographic, delayed, and non-contrast phases for axial CT.",
        skillIcons: [SVGicon.python],
        date: "September 2021",
        icon: "work"

    },{
        id:2,
        title: "Rare Variant Analysis and Risk Classification",
        location: "The National Institutes of Health, Bethesda", 
        description: "Conducted rare variant analysis of GRASP cohort and identified variant of interest. Used Random Forest Classifier to identify significant features from a large dataset of genes, TCR-B sequences, and clinical information",
        skillIcons: [SVGicon.python, SVGicon.r],
        date: "Septmenber 2020",
        icon: "work"

    }
    
    
    
]
export default timelineElements;