import React , {useState} from 'react';

const HookTwo = () =>{
    const[city , updateCity] = useState(["Banglore", "Pune"]);
    const[message , updateMessage] =useState();
    const[newcity , processCity] = useState();

    const save = ()=>{
       
        updateCity(city => [...city , newcity]);
        if(newcity!==0){
        updateMessage(newcity + "Added Sucessfully !");
        processCity("");
    }
    else{
        
        updateMessage("Added Sucessfully !"); 
    }
    }

    const deleteItem = (index) =>{
            city.splice(index , 1);
           updateCity(city => [...city]);
            updateMessage("Item Removed successfully !");
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-center text-success">Array read and write using Hooks </h2>
                    <h1 className="text-center text-danger">{city.length}</h1>
                    <p className="text-success">{message}</p>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3 mt-3">
                        <input type="text" 
                                className="form-control"
                                onChange={obj=>processCity(obj.target.value)}
                                value={newcity}
                        />
                        <small>{newcity}</small>
                    </div>
                    <div className="col-md-3 mt-1">
                        <button className="btn btn-primary" onClick={save}>Save city</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row text-center mt-3">
                    {
                        city.map((xcity , index)=>{
                            return(
                                <div className="col-md-3" key={index}>
                                    <p className="p-3 border text-center">
                                        {xcity}
                                        <hr/>
                                        <button className="btn btn-primary btn-sm" onClick={deleteItem.bind(this , index)}>Delete</button>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default HookTwo;