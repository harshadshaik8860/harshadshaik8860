import React ,{useState} from 'react';
import CustomerList from './customerlist';
const HookOne = () =>{
    //const[currentValue ,UpdateValue] = useState(inintialValue);
    //const[array/variableName , functionName] = useState(initialValue);

    const[counter , updateCounter] = useState(5);

    const[message , updateMessage] = useState();

    const[a , updatea] = useState(0);
    const[b , updateb] =useState(0);
    


    const one = () =>{
        updateCounter(counter+5);
        updateMessage("Hi, Who are clicking on ' + 'button, i know that");
        updatea(a+1);
       
    }

    const two = () =>{
        updateCounter(counter-5);
        updateMessage("Hi, Who are clicking on ' - 'button, i know that");
        updateb(b+1);
    }


        
    
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-center text-success">useState Simple example from Hooks </h2>
                    <h1 className="text-center text-danger">{counter}</h1>
                    <button className="btn btn-primary m-2" onClick={one}>+ The {counter} by 5</button>
                    <button className="btn btn-danger m-2" onClick={two}>- The {counter} by 5</button>
                    <p className="text-center mt-4 p-4">{message}</p>
                    <h3>The Plus was clicked {a} times</h3>
                    <h3>The Plus was clicked {b} times</h3>
                    <h4>The total clicks{a+b}</h4>
                </div>
            </div>
            <div className="row">
                <CustomerList
                fullname="Ramesh" 
                mobileno="898989898" 
                cityname="Delhi" 
                pic="1.jpg"
                />

<CustomerList
                fullname="Mahesh" 
                mobileno="999999999" 
                cityname="chennai" 
                pic="2.jpg"
                />

            </div>
        </div>
    );
}
export default HookOne;