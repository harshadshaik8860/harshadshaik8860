import React from 'react';
const citylist =["Hyderabad", "Banglore", "Chennai", "Pune", "vizag", "Delhi"];

const Home = () =>{
    return(
        <section>
            <h1 align="center">Available City : {citylist.length}</h1>
            {
                citylist.map((city ,index)=>{
                        return(
                            <p align="center">{index} . {city} </p>
                        );
                })
            }
            
            
           
        </section>
    )
}
export default Home;