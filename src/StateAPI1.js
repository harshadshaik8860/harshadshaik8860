import React, { Component } from 'react';

class StateAPI1 extends Component
{
  constructor(){
    super();
    this.state={
      citylist:[]
    }
  }
  getData = () => {
    fetch("http://firstenquiry.com/api/react/live/allcity.php")
        .then(response => response.json())
        .then(result => this.setState({
            citylist: result
        })
        )
  }


  render(){
    return(
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <button className="btn btn-primary btn-md " onClick={this.getData}> Load City List</button>
            <h2>{this.state.citylist.length} - State Management Using Fetch  </h2>
          </div>
        </div> 
        <div className="row text-center">
          {
            this.state.citylist.map((xcity,index)=>{
              return(
                <div className="col-md-3 form-group" key={index}>
                  <div className="border p-3 text-white bg-primary">
                    <p> {xcity.id}.{xcity.name} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default StateAPI1;