import React,{ Component } from "react";

class StateAPI3 extends Component
{
  constructor(){
    super();
    this.state={
      citylist:[]
    }
  }
  // 


  getData = () => {
    fetch("http://firstenquiry.com/api/react/live/allservice.php ")
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
            <h3> State Management ComponentDidMount () Assignment Example</h3>
            <table className="table table-bordered ">
              <thead className=" table-primary">
                <tr>
                  <th>Id</th>
                  <th>Parent Id</th>
                  <th>Name</th>
                  <th>SEO Name</th>
                </tr>
              </thead>
              <tbody>

                  {
                    this.state.citylist.map((xcity,index)=>{
                     return(
                      <tr key={index}>
                        <td> {xcity.id} </td>
                        <td> {xcity.parentid}</td>
                        <td> {xcity.name} </td>
                        <td> {xcity.seoname} </td>
                      </tr>
                      )
                    })
                  }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default StateAPI3;