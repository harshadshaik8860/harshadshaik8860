import React, { Component } from 'react';

class StateOne extends Component {
    constructor() {
        super();
        this.state = {
            counter: 5,
           
        }
    }

    One = () => {
        
        this.setState({
            counter: this.state.counter + 5
        })
    
    }

   Two = () => {
        this.setState({
            counter: this.state.counter - 5
           
        })
    }

    render() {

       // alert("render Called")
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-center text-success"> The counter is <br/> {this.state.counter}</h1>
                        <button className="btn btn-primary m-2" onClick={this.One}> + The {this.state.countr} by 5</button>
                        <button className="btn btn-danger m-2" onClick={this.Two}> - The {this.state.countr} by 5 </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default StateOne;
