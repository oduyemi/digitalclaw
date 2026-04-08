import React from 'react'
import socialA from '../img/fb.png';
import socialB from '../img/twitter.png';
import socialC from '../img/ig.png';
import socialD from '../img/linkedin.png';
import {scroller} from 'react-scroll';
import {Link} from 'react-router-dom';



const Footer = () => {
    const goToAbout=()=>{
        scroller.scrollTo("Testimonies", {
            duration: 1000,
            delay: 0, 
            smooth: "easeInOutQuart"
        })
        }
    const goToFeatures=()=>{
        scroller.scrollTo("features", {
            duration: 1000,
            delay: 0, 
            smooth: "easeInOutQuart"
        })
        }
    const goToFaq=()=>{
        scroller.scrollTo("faq", {
            duration: 1000,
            delay: 0, 
            smooth: "easeInOutQuart"
        })
        }
    const goToBlog=()=>{
        scroller.scrollTo("blog", {
            duration: 1000,
            delay: 0, 
            smooth: "easeInOutQuart"
        })
        }
    return ( 
    <div className='Footer' id='footer'>
        <div className="social">
            <div className="social-block">
                <div className="social-head">
                    <div className="social-h-div">
                    <h2 className="social-h">{"{finsweet"}</h2>
                    </div>
                    <div className="social-intro-div">
                        <span className="social-intro">
                        We are always open to discuss your project and improve your online presence.
                        </span>
                    </div>
                    <div className="social-head-down">
                        <div className="social-email">
                            <span className='email'>Email me at</span><br />
                            <span>contact@website.com</span>
                        </div>
                        <div className="social-no">
                            <span className='email'>Call Us</span><br />
                            <span>0927 6677 89075</span>
                        </div>
                    </div>
                </div>
                <div className="social-tail">
                    <div className="social-tail-h">
                        <h2>Lets Talk!</h2>
                    </div>
                    <div className="social-tail-p">
                        <span className="social-tail-txt">
                        We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                        </span>
                    </div>
                    <div className="social-tail-icon">
                        <div className="social-icon">
                            <img src={socialA} alt="Facebook" className="social-img" />
                        </div>
                        <div className="social-icon">
                            <img src={socialB} alt="Twitter" className="social-img" />
                        </div>
                        <div className="social-icon">
                            <img src={socialC} alt="Instagram" className="social-img" />
                        </div>
                        <div className="social-icon">
                            <img src={socialD} alt="LinkedIn" className="social-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-block">
            <div className="copy">
                <span className="copyright">
                    Copyright 2022, Finsweet.com
                </span>
            </div>
            <div className="footnav">
                <ul className='footerul'>
                   <li className="footernav"> <Link to="/">Home</Link></li>
                    <li className="footernav" onClick={goToAbout}>About us</li>
                    <li className="footernav" onClick={goToFeatures}>Features</li>
                    <li className="footernav"><Link to="/price">Pricing</Link></li>
                    <li className="footernav" onClick={goToFaq}>FAQ</li>
                    <li className="footernav" onClick={goToBlog}>Blog</li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default Footer;