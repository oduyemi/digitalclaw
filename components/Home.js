import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

import heroImg from '../img/Illustration.png';
import arrow from '../img/Arrow 1.svg';
import arrowT from '../img/Arrow 2.png';
import arrowW from '../img/Arrow 1.png';
import arrowF from '../img/Arrow 23.png';
import pointerA from '../img/pointer 1.png';
import pointerB from '../img/pointer 2.png';
import pointerC from '../img/pointer 3.png';
import pointerD from '../img/pointer 4.png';
import workA from '../img/Card.png';
import workB from '../img/Rectangle 1313.png';
import workC from '../img/Card1.png';
import iconA from '../img/Icon.png';
import iconB from '../img/Icon1.png';
import iconC from '../img/Icon2.png';
import iconD from '../img/Icon3.png';
import iconE from '../img/Icon4.png';
import iconF from '../img/Icon5.png';
import blogA from '../img/arabic-businessman-standing-on-street-and-using-laptop-9623794.png';
import blogB from '../img/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png';
import blogC from '../img/apple-monitors-326518.png';





import Testimonies from './Testimonies';
import Update from './Update';
import Faq from './Faq';



const Home =()=> {
    

    
    
        const executeScroll=()=>{
            scroller.scrollTo("ourWork", {
                duration: 1000,
                delay: 0, 
                smooth: "easeInOutQuart"
            })
            }
            
            const [animate, setAnimate]=useState([
                {
                    haveLoad: false,
                    animatee: "fade-animation"
                }
            ])
            useEffect(() => {
               //const onScrol=()=>{
                const timeout=setTimeout(()=>{
                   //apply animation
                    // console.log([animate[0].haveLoad])
                    setAnimate([...animate, {haveLoad: !animate[0].haveLoad}])
                   
                }, 3000)
                return ()=>clearTimeout(timeout);
               //}
           // }
           }, []);
           
        
        return (
            
        <div className='Home'>
            
           <div className="hero">
              
               <div className='headline'>
                    <h1>
                        Building stellar<br/> websites for early startups
                    </h1>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa delectus illo eius nesciunt quod.</span>
                    <div className='heroButton'>
                        <div id='viewWork' onClick={executeScroll}>View Our Work</div>
                        <div id='viewPrice'> <Link to="/price">View Pricing    <img src={arrow} alt="arrow" id='arrow'></img></Link></div>
                    </div>
               </div>
               <div className="heroShot">
                <img src={heroImg} alt='Hero Illustration' className='heroImg'/>
               </div>
          
           </div>
           <div className='how-cont'>
        <div className='how-container'>
            <div className='how'>
                <div className="howO">
                <h2>How we work</h2>
                <span className="p-lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi, deleniti aperiam.</span>
                <span className='in-touch'>Get in touch with us <img src={arrowT} alt="Arrow" /></span>
                </div>
            </div>
            <div className='how-details'>
                <div className="eachpointer">
                    <div className="pointerImg"><img src={pointerA} alt="Pointer 1"/></div>
                    <div className="pointerHead"><h3>Strategy</h3></div>
                    <div className="pointerTxt">Euismod faucibus turpis eu gravida mi. </div>
                </div>
                <div className="eachpointer">
                    <div className="pointerImg"><img src={pointerB} alt="Pointer 2"/></div>
                    <div className="pointerHead"><h3>Wireframing</h3></div>
                    <div className="pointerTxt">Euismod faucibus turpis eu gravida mi. </div>
                </div>
                <div className="eachpointer">
                    <div className="pointerImg"><img src={pointerC} alt="Pointer 3"/></div>
                    <div className="pointerHead"><h3>Design</h3></div>
                    <div className="pointerTxt">Euismod faucibus turpis eu gravida mi. </div>
                </div>
                <div className="eachpointer">
                    <div className="pointerImg"><img src={pointerD} alt="Pointer 4"/></div>
                    <div className="pointerHead"><h3>Development</h3></div>
                    <div className="pointerTxt">Euismod faucibus turpis eu gravida mi. </div>
                </div>
            </div>
            </div>
        </div>
        <div className={`ourWork ${animate[0].animatee}`} >
            <div className="workHead">
                <h2>View our projects</h2>
                <span className="viewmore">View More <img src={arrowW} alt="Arrow" /></span>
            </div>
            <div className="works" id="works">
                <div className="mainWork">
                    <div className="hoverbackground">
                        <div className='h-container'>
                        <h3 className='hBackHeadtag'>Work office Webflow<br/> Webflow Design</h3>
                        <p className='hBackPtag'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <span className='hBackSpantag'>View Project <img src={arrowF} alt='Arrow' /></span>
                        </div>
                    </div>
                <img src={workA} alt="Work 1" className='workImg'/>
                </div>
                <div className="sideWorks">
                    <div className="sideImg">
                        <div className="sideHoverBack">
                        <div className='side-container'>
                        <h4 className='hBackHeadtagA'>Unisaas Website <br/>Design</h4>
                        <span className='hBackSpantagA'>View Portfolio <img src={arrowF} alt='Arrow' /></span>
                        </div>
                        </div>
                        <img src={workB} alt="Work 2" className='workImge'/>
                    </div>
                    <div className="sideImg">
                    <div className="sideHoverBack">
                        <div className='side-container'>
                        <h4 className='hBackHeadtagA'>Lorem Ipsum <br/>Design</h4>
                        <span className='hBackSpantagA'>View Portfolio <img src={arrowF} alt='Arrow' /></span>
                        </div>
                        </div>
                    <img src={workC} alt="work 3" className='workImge'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="features">
            <div className="features-block">
                <div className="features-top">
                        <span className='features-span'>Features</span>
                        <h1 className="features-head">Design that solves<br/> problems, one product at <br/>a time</h1>
                </div>
                <div className="features-content">
                    <div className='features-section'>
                        <div className="section-space">
                        <div className="section-img">
                            <img src={iconA} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">Uses Client First</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                    <div className='features-section'>
                    <div className="section-space">
                        <div className="section-img">
                            <img src={iconB} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">Two Free Revision Round</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                    <div className='features-section'>
                    <div className="section-space">
                        <div className="section-img">
                            <img src={iconC} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">Template Customization</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                    <div className='features-section'>
                    <div className="section-space">
                        <div className="section-img">
                            <img src={iconD} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">24/7 Support</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                    <div className='features-section'>
                    <div className="section-space">
                        <div className="section-img">
                            <img src={iconE} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">Quick Delivery</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                    <div className='features-section'>
                    <div className="section-space">
                        <div className="section-img">
                            <img src={iconF} alt="client" className='the-section-img'/>
                        </div>
                        <div className="sectionTxt">
                            <h6 className="sectionHead">Hands On Approach</h6>
                            <p className="section-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonials">
            <div className="testimonials-block">
                <div className="testimonialHead">
                    <h2 className="ourtestimonial">
                        What our clients<br className='breakline-testimonial'/> say about us
                    </h2>
                    <span className="ourtestimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                    </span>
                </div>
               <Testimonies/>
            </div>
        </div>
        <Faq/>
        <Update/>
        <div className="blog" id='blog'>
            <div className="blog-block">
                <div className="blog-top">
                    <h2 className="h-blog">Our blog</h2>
                </div>
                <div className="blog-down">
                    <div className="each-blog">
                    <div className="blog-img">
                        <img src={blogA} alt="Someone" className="blog-pic" />
                    </div>
                    <div className="blog-date">
                        <span className="blog-dateS">
                            
                            19 Jan 2022
                            
                        </span>
                        </div>
                    <div className="blog-txtH">
                        <h5 className="blog-txt-h">
                        How one Webflow user grew his single person consultancy from $0-100K in 14 months
                        </h5>
                    </div>
                    <div className="blog-textT">
                        
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                
                    </div>
                    <div className="blog-read">
                        
                            Read more <img src={arrowW} alt="arrow" className="blog-arrow" />
                
                    </div>
                    </div>
                    <div className="each-blog">
                    <div className="blog-img">
                        <img src={blogB} alt="Someone" className="blog-pic" />
                    </div>
                    <div className="blog-date">
                        <span className="blog-dateS">
                           
                            19 Jan 2022
                          
                        </span>
                        </div>
                    <div className="blog-txtH">
                        <h5 className="blog-txt-h">
                        How one Webflow user grew his single person consultancy from $0-100K in 14 months
                        </h5>
                    </div>
                    <div className="blog-textT">
                       
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                    
                    </div>
                    <div className="blog-read">
                        
                            Read more <img src={arrowW} alt="arrow" className="blog-arrow" />
                        
                    </div>
                    </div>
                    <div className="each-blog">
                    <div className="blog-img">
                        <img src={blogC} alt="Someone" className="blog-pic" />
                    </div>
                    <div className="blog-date">
                        <span className="blog-dateS">
                            
                            19 Jan 2022
                            
                        </span>
                        </div>
                    <div className="blog-txtH">
                        <h5 className="blog-txt-h">
                        How one Webflow user grew his single person consultancy from $0-100K in 14 months
                        </h5>
                    </div>
                    <div className="blog-textT">
                        
                            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                       
                    </div>
                    <div className="blog-read">
                        
                            Read more <img src={arrowW} alt="arrow" className="blog-arrow" />
       
                    </div>
                    </div>
                </div>
            </div>
        </div>
        

        </div>
        );
    
}
 
export default Home;