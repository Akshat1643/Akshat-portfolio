import React from 'react'
import "../styles/Contact.scss"
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const Contact = () => {
  return (
   <section id='contact' className="contact container-fluid mt-5">
        <div className="container p-4 contact-container">
            <div className="contact_left">
                <span>Contact</span><br />
                <span>Feel free to reach out</span>
            </div>
            <div className="contact_right">
                <ul>
                    <li> <MdMailOutline /><a href="mailto:akshat160403@gmail.com">Contact Me</a></li>
                    <li><IoLogoLinkedin /><a href="https://www.linkedin.com/in/akshat-agrawal-53a6b2283/" target="_blank">My Linkedin</a></li>
                    <li><FaGithub /><a href="https://github.com/Akshat1643" target="_blank">My GitHub</a></li>
                </ul>
            </div>
        </div>
   </section>
  )
}

export default Contact
