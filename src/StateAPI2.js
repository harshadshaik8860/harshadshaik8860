import React,{ Component } from "react";

class StateAPI2 extends Component
{
  constructor(){
    super();
    this.state={
      citylist:[]
    }
  }
  // http://firstenquiry.com/api/react/live/allservice.php 


  getData = () => {
    fetch("http://firstenquiry.com/api/react/live/allcity.php")
        .then(response => response.json())
        .then(result => this.setState({
            citylist: result
        })
        )
  }

  componentDidMount(){
    this.getData();
  }
  render(){
    return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h3> State Management ComponentDidMount () Example</h3>
            <p> will means do</p>
            <p>Did means done</p>
            <p>first constructor will executed then render and after render component did mount will execute </p>
            <p className="text-red">ComponentDidMount : get call automatically after render() .</p>
            <p>Its is  life-cycle method of react js under state management </p>
            <p>to execute the component step by step 1st life cycle method of react js executes is constructor 2nd is render and 3rd life cycle method is statemanagement (ComponentDidMount)</p>

            <p>
              {
                this.state.citylist.map((xcity,index)=>{
                  return(
                        <p key={index} > {xcity.name} </p>
                      )
                  })
              }
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default StateAPI2;