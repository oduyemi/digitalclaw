import React from 'react';
import Faq from './Faq';


import pointerA from '../img/Pointer.png';
import pointerB from '../img/Pointer1.png';


const Pricing = () => {
    return ( 
        <div className='Pricing'>

            <div className='pricing'>
                <div className="pricing-block">
                    <div className="pricing-head">
                        <h1 className="pricing-head-txt">
                            Our Pricing Plans
                        </h1>
                        <span className="pricing-head-span">
                        When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
                        </span>
                    </div>
                    <div className="pricing-tail">
                        <div className="pricing-whiteblck">
                            <div className="price-space">
                                <div className="amount-block">
                                    <span className='amount'>$299</span>
                                    <span className='amount-des'>Per Design</span>
                                </div>
                                <div className="price-type">
                                    <span className="type-name">
                                        Landing Page
                                    </span>
                                    <span className="type-des">
                                        When you're ready to go beyond prototyping in Figma.
                                    </span>
                                </div>
                                <div className="price-features">
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> All limited links</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Own analytics platform</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Chat support</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerB} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Optimize hashtags</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerB} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Unlimited users</div>
                                    </div>
                                    <div className="each-feature"  style={{opacity: 0}}>
                                        <div className="img-point"> <img src={pointerB} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Unlimited users</div>
                                    </div>
                                </div>
                                <div className="price-btn-whi">
                                    Get Started
                                </div>
                            </div>
                        </div>
                        <div className="pricing-darkblck">
                        <div className="half-circle">
                        </div>
                            <div className="price-space-drk">
                                
                                <div className="amount-block">
                                    <span className='amount'>$399</span>
                                    <span className='amount-des-drk'>Multi Design</span>
                                </div>
                                <div className="price-type">
                                    <span className="type-name">
                                        Website Page
                                    </span>
                                    <span className="type-des">
                                    When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.
                                    </span>
                                </div>
                                <div className="price-features">
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> All limited links</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Own analytics platform</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Chat support</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Optimize hashtags</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Unlimited users</div>
                                    </div>
                                </div>
                                <div className="price-btn-drk">
                                    Get Started
                                </div>
                                </div>
                       
                            </div>
                            <div className="pricing-whiteblck">
                            <div className="price-space">
                                <div className="amount-block">
                                    <span className='amount'>$499 +</span>
                                    <span className='amount-des'>Per Design</span>
                                </div>
                                <div className="price-type">
                                    <span className="type-name">
                                        Complex Project
                                    </span>
                                    <span className="type-des">
                                        When you're ready to go beyond prototyping in Figma.
                                    </span>
                                </div>
                                <div className="price-features">
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> All limited links</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Own analytics platform</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Chat support</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Optimize hashtags</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Unlimited users</div>
                                    </div>
                                    <div className="each-feature">
                                        <div className="img-point"> <img src={pointerA} alt="Pointer" className="pointer" /></div>
                                        <div className="img-txt"> Assist and help</div>
                                    </div>
                                </div>
                                <div className="price-btn-whi">
                                    Get Started
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Faq/>
            <br/>
            <br/>
            
        </div>
     );
}
 
export default Pricing;