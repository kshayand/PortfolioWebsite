import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "../../../data"
import './Footer.css'
import {ReactComponent as WorkIcon} from '../../../assets/home/laptop-code-solid.svg'
import {ReactComponent as SchoolIcon} from '../../../assets/home/school-flag-solid.svg'
import {ReactComponent as AwardIcon} from '../../../assets/home/medal-solid.svg'

export default function Footer(){
    let workIconStyles = {background: '#111'}
    let schoolIconStyles = {background:  '#0098ED'}
    let awardIconStyles = {background: '#d6751a'}
    return (
        <div className = "footer-container">
            <VerticalTimeline
            lineColor= "#FF5823"
            className = "vertical-timeline.vertical-timeline-custom-line"
            >
                {timelineElements.map((element) => {
                    //let isWorkIcon = element.icon === "work";
                    //let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== ""; 
                    return (
                        <VerticalTimelineElement 
                            key={element.id}
                            date = {element.date}
                            dateClassName= "date"
                            iconStyle= {element.icon === "work" ? workIconStyles : (element.icon === "school" ? schoolIconStyles : awardIconStyles)}
                            icon = {element.icon === "work" ? <WorkIcon /> : (element.icon === "school" ? <SchoolIcon /> : <AwardIcon />)}
                            //iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            //icon = {isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
                            className="vertical-timeline-element--work"
                            iconClassName="vertical-timeline-element-icon"
                        >
                        
                            <div className="vertical-timeline-element-content-box">
                                <h3 className = "vertical-timeline-element-title">{element.title}</h3>
                                <h5 className = "vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id = "description">{element.description}</p>
                                {element.link}
                                {element.skillIcons.map(icon => (<span style={{height:'200px',width: '500px'}}>{icon}</span>))}
                                {//showButton && (
                                   //<a className = {`button ${isWorkIcon ? "workButton":"schoolButton" }`} href = '/'></a>)
                                }
                                
                            </div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
            
        </div>
    )
}