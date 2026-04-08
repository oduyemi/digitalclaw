import React, {createContext, useState } from 'react'



export const TestimonyContext=createContext();


const TestimonyContextProvider =(props)=> {
    const [testimonies, setTestimonies]=useState([
        {quote: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.", testifier: "Jenny Wilson", position: "Vice President", id: 0},
        {quote: "Mad stuff you got here", testifier: "Eluagu Eaglet", position: "Cleaner", id: 1},
        {quote: "Alright alright, good job", testifier: "Achilike Adindu", position: "House boy", id: 2}
    ])
    // state={
    //     quote: ["The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.", "Mad stuff you got here", "Alright alright, good job"],
    //     testifiers: ['Jenny Wilson', 'Eluagu Eaglet', "Achilike Adindu"],
    //     position: ["Vice President", "Secretary", "Houseboy"],
    //     testimonyLength: 3,
    //     current: 0
    // }

    const updateTestimony=(q, t, p)=>{
        let testLength=testimonies.length;
        console.log("The size of testimonies is "+ testLength);
        setTestimonies([...testimonies, {quote: q, testifier: t, position: p, id: testLength+=1}])
    }
    // updateTestimony=(q, t, p)=>{
    //     this.setState({
    //         ...this.state,
    //         quote: [...this.state.quote, q],
    //         testifiers: [...this.state.testifiers, t],
    //         position: [...this.state.position, p],
    //         testimonyLength: this.state.testimonyLength+=1
    //     })
    //     console.log(this.state)
    // }
  
        return (
        <TestimonyContext.Provider value={{testimonies, updateTestimony}}>
            {props.children}
        </TestimonyContext.Provider>
        );
   
}
 
export default TestimonyContextProvider;
