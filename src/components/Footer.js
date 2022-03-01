import React from 'react'
import Icon from './Icon'
import '../styles/fontello.css'
import facebook from "../images/icon-white-facebook.png"
import linkedin from "../images/icon-white-linkedin.png"

function Footer() {
  return (
    <footer>
        <div className='footer-container'>
            <div className='icon-container'>
                <a href="/"><Icon className="footer-icon"/></a>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="/"><img className="facebook" src={facebook} alt="facebook" /></a></li>
                    <li><a href="/"><img className="linkedin" src={linkedin} alt="linkedin" /></a></li>
                    <li><a href="/"><i className="icon-phone"></i> +1 712-642-2755</a></li>
                    <li><a href="/"><i className="icon-mail"></i> Contact us</a></li>
                    <li>Copyright 2022. All rights reserved</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer