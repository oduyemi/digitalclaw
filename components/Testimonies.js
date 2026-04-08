import React , {useContext, useEffect, useRef, useState} from 'react';
import { TestimonyContext } from '../contexts/TestimonyContext';
import woman from '../img/woman-in-collared-shirt-774909.png';


const Testimonies=()=> {
    const {testimonies}=useContext(TestimonyContext);
    // state={
    //     quote: ["The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.", "Mad stuff you got here", "Alright alright, good job"],
    //     testifiers: ['Jenny Wilson', 'Eluagu Eaglet', "Achilike Adindu"],
    //     position: ["Vice President", "Secretary", "Houseboy"],
    //     current: 0
    // };
    // console.log(testimonies[0])
    // let showing={
    //     quote: '',
    //     testifier: '',
    //     position: 0
    // }
    const [shw, setShw]=useState([]);
    const setTestimony=(id)=>{
        // showing.quote=testimonies[id].quote;
        // showing.testifier=testimonies[id].testifier;
        // showing.position=testimonies[id].position;
        setShw({
            quote:testimonies[id].quote,
            testifier:testimonies[id].testifier,
            position:testimonies[id].position,
        })
        //console.log("length is" + testimonies.length)
    }
    
    let count=useRef(0);
    
    useEffect(()=>{
        
        const interval=setInterval(()=>{
            //console.log(count.current)
            // console.log(testimonies[count.current])
            if(count.current < testimonies.length-1){
                count.current+=1;
                //console.log(count.current-1);
                // console.log(count.current)
                setTestimony(count.current);
                
            }else{
                count.current=0
                setTestimony(count.current);
            }
    }, 3000)
    return ()=>clearInterval(interval);
    })

//    componentWillUnmount(){
//        clearInterval(this.interval)
//    } 

    
        const nextTestimony=()=>{
            if(count.current < testimonies.length-1){
                count.current+=1;
                setTestimony(count.current);
            }else{
                count.current=0
                setTestimony(count.current);
            }
        }
        const previousTestimony=()=>{
            if(count.current > 0){
                count.current-=1
                setTestimony(count.current);
            }else{
                count.current=testimonies.length-1
                setTestimony(count.current);
            }
        }
        // const nextTestimony=()=>{
        //     let position=this.state.current;
            
        //     if(position < 2){
        //         position+=1
        //         this.setState({...this.state, current: position})
        //     }else{
        //         position=0
        //         this.setState({...this.state, current: position})
        //     }
        
        //   console.log(this.state.current);
        //   console.log(this.state.showing)
        // }
        // const previousTestimony=()=>{
        //     let position=this.state.current;
           
        //         if(position > 0){
               
        //         position-=1
        //         this.setState({...this.state, current: position})
                
        //          }else{
        //         position=2
        //         this.setState({...this.state, current: position})
        //          }
            
        //   console.log(position)
        // }
        
        return (
        <div  className='Testimonies'>
             <div className="the-testimonies">
                    <div className="each-testimony">
                    <h3 className="testimony-quote">
                   {`"${shw.quote}"`}
                    </h3>
                    </div>
                    <div className="each-testifier">
                        <div className="each-testifier-sec">
                        <div className="testify-img">
                            <img src={woman} alt="Person" className="testifier-pic" />
                        </div>
                        <div className="testifier-details">
                            <span className="testifier-name">{`${shw.testifier}`}</span><br/>
                            <span className="testifier-position">{`${shw.position}`}</span>
                        </div>
                        </div>
                        <div className="next-testifier">
                            <div className="angle" onClick={previousTestimony}>
                                <span className="the-angle">
                                <li className="fa fa-angle-left"></li>
                                </span>
                            </div>
                            <div className="angle" onClick={nextTestimony}>
                                <span className="the-angle">
                                    <li className="fa fa-angle-right"></li>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
        );
    
}
 
export default Testimonies;
 
