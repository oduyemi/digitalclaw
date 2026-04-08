import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

class NavBar extends Component {
    
    state={
        isShowing: false,
        flex: {display: "flex"},
        none: {display: "none"},
    }
    render() { 

        const goToAbout=()=>{
            scroller.scrollTo("Testimonies", {
                duration: 1000,
                delay: 0, 
                smooth: "easeInOutQuart"
            })
            }
        const goToContact=()=>{
            scroller.scrollTo("Update", {
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
        const goToFeatures=()=>{
            scroller.scrollTo("features", {
                duration: 1000,
                delay: 0, 
                smooth: "easeInOutQuart"
            })
            }

        const closePopup=()=>{
            this.setState({
                ...this.state,
                isShowing: !this.state.isShowing
            })
        }
        const displayType=this.state.isShowing?(this.state.flex.display):(this.state.none.display)
        return (
        <div className='NavBar'>
            <header>
            <div className="navbar">
                <div className='navbarLogo'>{`{finsweet`}</div>
                <div className="actualNav">
                    <ul className='navUl'>
                        <Link to="/"><li className='navLi'>Home</li></Link>
                        <a href='#about'><li className='navLi' onClick={goToAbout}>About Us</li></a>
                        <li className='navLi' onClick={goToFeatures}>Features</li>
                        <Link to="/price"><li className='navLi'>Pricing</li></Link>
                        <li className='navLi' onClick={goToFaq}>FAQ</li>
                        <li className='navLi' onClick={goToBlog}>Blog</li>
                        <li className='navLi' id='contactus' onClick={goToContact}>Contact</li>
                    </ul>
                </div>
                <div className='mobNav' onClick={closePopup}>
                    <i className='fa fa-bars menuIcon'></i>
            
                </div>
            </div>
            </header>
            <div className="popup" style={{display: displayType}}>
                <div className="cancelpopup" onClick={closePopup}>x</div>
                <div className="popuptxt">
                <span style={{textAlign:"center"}}>Mf Wants to Chill Out! Izutechs designed this shit bro.</span> <br/><a className='contactMeClick' href='https://wa.link/8f6zfk'>Contact Me</a>
                </div>
            </div>
        </div>
        );
    }
}
 
export default NavBar;