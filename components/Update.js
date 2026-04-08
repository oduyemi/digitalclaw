import React, {useContext} from 'react';
import { TestimonyContext } from '../contexts/TestimonyContext';


import arrowE from '../img/Arrow 4.png';
import womanWriting from '../img/woman-writing-on-paper-3228878.png';

const Update = () => {

    const {updateTestimony}=useContext(TestimonyContext);
    let myData={
        q: [],
        t: [],
        p: []
    }
    const updateQuote=(e)=>{
        e.preventDefault();
        console.log("updating")
        let theData={
            q: myData.q.slice(-1),
            t: myData.t.slice(-1),
            p: myData.p.slice(-1)
        }
        updateTestimony(theData.q, theData.t, theData.p)
    }
    
    const changeQ=(e)=>{
        
        myData={...myData, q: [...myData.q, e.target.value]}
       // console.log(myData)
    }
    const changeP=(e)=>{
        myData={...myData, p: [...myData.p, e.target.value]}
       //console.log(myData)
    }
    const changeT=(e)=>{
        myData={...myData, t: [...myData.t, e.target.value]}
       //console.log(myData)
    }
    return ( 
        <div className='Update' id='contactus'>
             <div className="contact-form">
            <div className="contact-form-block">
                <div className="explain">
                    <div className="explain-div">
                        <div className="explain-div-block">
                        <h1 className="explain-h">
                        Building stellar <br className="no-br" /> websites for <br className="no-br" /> early startups
                        </h1>
                        <span className="explain-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</span>
                        </div>
                    </div>
                    <img src={womanWriting} alt="Someone writing" className="explain-img" />
                </div>
                <div className="actual-form">
                    <div className="actual-form-block">
                    <div className="formhead">
                        <h3 className='form-h'>Update Testimony</h3>
                        <p className='form-p'> This is actually contact us page but I had to use it to make our clients testimony section updatable. </p>
                    </div>
                    <form className="contact-us-form" onSubmit={updateQuote}>
                        <input type="text" className="inp-quote inp" placeholder='Enter Testimony' onChange={changeQ}/><br/>
                        <input type="text" className="inp-testifier inp" placeholder='Enter Testifier Name' onChange={changeT}/><br/>
                        <input type="text" className="inp-position inp" placeholder='Enter Testifier Position' onChange={changeP}/><br/>
                        <input type="submit" value="Update Testimony" className='update-btn'/>
                        <div className="getin-contact">Get in touch with us <img src={arrowE} alt="arrow" className="contactarrow" /></div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Update;