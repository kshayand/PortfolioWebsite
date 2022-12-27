import React from "react";
import './Contact.css'
//https://www.emailjs.com/docs/examples/reactjs/
export default function Contact(){
    return(
        <div id = "contact-me">
            <div className = "profile-container">
                <div className = "profile-parent">
                    <div className = "profile-details">
                        <div className = "profile-details-name">
                            <span className = "primary-text">
                                Contact Me
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "socials">
                <div className = "socials-icon">
                    <a href = 'https://www.linkedin.com/in/akshaya-anand-271814100' >
                        <i className = "fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )

}

