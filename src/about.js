import React from 'react';

const servicelist=["Software Services", "Hardware Service", "Digital Marketing services", "BPO", "Realestate"];

const About = () =>{
    return(
        <section>
            <h1 align="center"> Available Services : {servicelist.length}</h1>
            
            {
                servicelist.map((service ,index)=>{
                    return(
                        
                            <label className="link"> {index} . {service} ,</label>
                        
                    );
                })
            }
        </section>
    )
}
export default About;