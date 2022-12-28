import React from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';

//https://www.emailjs.com/docs/examples/reactjs/
export default function Contact(){
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nu5g5qf', 'template_jnm57bj', e.currentTarget, '6J2-eWPmRMfex5r6l')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          })
      }
    return(
        <div id = "contact-me">
            <div className = "profile-container">
                <div className = "profile-parent">
                    <div className = "profile-details">
                        <div className = "profile-details-name">
                            <span className = "primary-text">
                                Contact Me
                                <form onSubmit={sendEmail} >
                                    <input type="text" name="user_name" placeholder = "Your name"/>
                                    <br></br>
                                    <input type="email" name="user_email" placeholder = "your email"/>
                                    <br></br>
                                    <textarea name="message" placeholder = "Message"/>
                                    <br></br>
                                    <div className = "submit-button">
                                    <input className = "btn highlighted-btn" type="submit" value="Send" />
                                    </div>
                                </form>
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

