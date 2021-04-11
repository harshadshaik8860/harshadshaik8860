import React, { Component } from 'react';

class Statefive extends Component{
  constructor(){
    super();

    this.state={
      Customer:0,
      Product:0,
      Vendor:0,
      Sales:0,
      Income:0
    }
  }

  processCustomer=(obj)=>{this.setState({Customer:obj.target.value})}
  processProduct=(obj)=>{this.setState({Product:obj.target.value})}
  processVendor=(obj)=>{this.setState({Vendor:obj.target.value})}
  processSales=(obj)=>{this.setState({Sales:obj.target.value})}
  processIncome=(obj)=>{this.setState({Income:obj.target.value})}

  render(){
    return(
      <>
        <div className="container mt-5">

          <div className="row mb-2">
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <p>
                <label>Customer</label>
                <input type="text" className="form-control" onChange={this.processCustomer}/>
              </p>
            </div>
            <div className="col-md-2">
              <p>
                <label>Product</label>
                <input type="text" className="form-control" onChange={this.processProduct}/>
              </p>
            </div>
            <div className="col-md-2">
              <p>
                <label>Vendor</label>
                <input type="text" className="form-control" onChange={this.processVendor}/>
              </p>
            </div>
            <div className="col-md-2" >
              <p>
                <label>Sales</label>
                <input type="text" className="form-control"  onChange={this.processSales}/>
              </p>
            </div>
            <div className="col-md-2">
              <p>
                <label>Income</label>
                <input type="text" className="form-control" onChange={this.processIncome}/>
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
            <h6 className="text-primary text-bold">Dashboard of 2010 Sales</h6>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4">
              <div className="col-md-12 bg-secondary rounded-lg text-white" >
                <p className="pt-3"> Customer</p>
                <p className="pb-3">({this.state.Customer})</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="col-md-12 bg-danger rounded-lg  text-white">
                <p className="pt-3"> Product</p>
                <p className="pb-3">({this.state.Product})</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="col-md-12 bg-success rounded-lg  text-white">
                <p className="pt-3"> Vendor</p>
                <p className="pb-3">({this.state.Vendor})</p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="col-md-12 bg-primary rounded-lg  text-white">
                <p className="pt-3"> Sales Of 2010</p>
                <p className="pb-3">{this.state.Sales}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 bg-info rounded-lg  text-white">
                <p className="pt-3"> Income in 2010</p>
                <p className="pb-3">{this.state.Income}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Statefive;