import React from "react";
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Contact from '../Contact/Contact'

export default function Home(){
    return (
        <div className = "home-container">
            <Profile />
            <Footer />
            <Contact />
        </div>
    )
}