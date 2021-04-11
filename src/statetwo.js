import React ,{Component} from 'react';

class StateTwo extends Component{
    constructor(){
        super();
        this.state ={
            loc : "banglore",
            citylist : []
            
        }
    }

    processValue = (obj) =>{
        
        this.setState({
            loc : obj.target.value,
            
        })
        
    }
   

    save = () =>{
        this.setState({
            citylist : this.state.citylist.concat(this.state.loc)
        });
    }
       
    render(){
        return(
            <div className="conatiner mt-4">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="text-success">{this.state.loc}</h1>
                        <p className="mt-4 text-center">
                            Enter city name
                            <input type="text" className="form-control form-control-md"
                            
                            onChange={this.processValue}
                            />
                        </p>
                        <button className="btn btn-primary text-center" onClick={this.save}>Save</button>
                        <hr/>
                        {
                            this.state.citylist.map((city , index)=>{
                                    return(
                                        <p key={index}> {city}</p>
                                    );
                            })
                        }
                        
                        
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
export default StateTwo;