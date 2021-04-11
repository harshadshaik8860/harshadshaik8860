import React , {Component} from 'react';

class UserLogin extends Component{
    constructor(){
        super();
        this.state = {
            counter : 100,
            user : ["Ramesh", "ganesh", "Mohit"]

        } ; //to define the variable in state
    }
    render(){
        
        return(
            <section>
                <h1 align="center">Login Page</h1>
                <p align="center">Please enter Login Details</p>
                <h1 className="text-center text-danger"> {this.state.counter}</h1>
                <h1 className="text-center text-danger"> {this.state.user[0]}</h1>
                {
                    this.state.user.map((xuser , index)=>{
                        return(
                            <p key={index} className="p-3 border">{xuser}</p>
                        );

                    })
                }
            </section>
        );
    }
}
export default UserLogin;