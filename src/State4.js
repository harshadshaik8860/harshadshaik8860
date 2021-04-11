import React, { Component } from 'react';

class Statefour extends Component
{
  constructor(){
    super();
    this.state={
      Name :"",
      Email:"",
      Mobile:"",
      Address:""
    };
  }

    processName =(obj)=>{this.setState({Name :obj.target.value})};

    processEmail=(obj)=>{this.setState({Email:obj.target.value})};

    processMobile=(obj)=>{this.setState({Mobile:obj.target.value})};

    processAddress=(obj)=>{this.setState({Address:obj.target.value})};

    render(){
      return(
      <div className="container">
        <div class="row">
          <div className="col-md-6 p-4 ">
            <div className="row text-center">
              <h5>My Information</h5>
              <div className="col-md-12 p-4 border">
                <p>
                  <label>Name</label>
                  <input type="text"  className="form-control" 
                  onChange={this.processName}/>
                </p>
                <p>
                  <label>Email</label>
                  <input type="email"  className="form-control" 
                  onChange={this.processEmail}/>
                </p>
                <p>
                  <label>Mobile</label>
                  <input type="number"  className="form-control" 
                   onChange={this.processMobile}/>
                </p>
                <p>
                  <label>Address</label>
                  <input type="text"  className="form-control" 
                  onChange={this.processAddress}/>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-4">
            <div className="row  text-center">
              <h5>Preview Of My Information</h5>
              <div className="col-md-12 p-4 border">
                <p>
                  <label> Your Name :</label>
                  {this.state.Name}
                </p>
                <p>
                  <label>Your Email :</label>
                  {this.state.Email}
                </p>
                <p>
                  <label>Your Mobile</label>
                  {this.state.Mobile}
                </p>
                <p>
                  <label>Your Address</label>
                  {this.state.Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Statefour ;