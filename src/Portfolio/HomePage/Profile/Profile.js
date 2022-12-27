import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile(){
    return (
        <div className = "profile-container">
            <div className = "profile-parent">
                <div className = "profile-details">
                    
                    <div className = "profile-details-name">
                        <span className = "primary-text">
                            {" "}
                            Hello, I'm <span className = "highlighted-text"> Akshaya</span> 
                        </span>
                    </div>
                    <div className = "profile-details-role">
                        <span className = "primary-text">
                            {" "}
                            <h1>
                            <Typical
                            steps={['Python', 2000, 'Pytorch', 2000, 'Javascript', 2000, 'HTML/CSS', 2000, 'React', 2000]}
                            loop={Infinity}
                            wrapper="p"
                            />
                            </h1>
                            <span className= "profile-details-role-tagline">
                                At the intersetion of computer science and healthcare
                            </span>
                        </span>
                    </div>
                    <div className = "profile-buttons">
                        <button className = "btn primary-btn">
                            Contact Me {" "}
                        </button>
                        <a href = "AkshayaResume2022.pdf" download = "AkshayaResume.pdf">
                            <button className = "btn highlighted-btn">Download Resume</button>
                        </a>
                        
                    </div>
                </div>
                <div className = "profile-picture">
                    <div className = "profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
    )
}
