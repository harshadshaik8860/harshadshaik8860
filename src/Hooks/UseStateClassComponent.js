import React, { Component } from 'react'

export class UseStateClassComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            count : 0
             
        }
    }
    
    incrementCounter= ()=> {
            this.setState({
                count : this.state.count +1 
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}>Click {this.state.count}</button>
            </div>
        )
    }
}

export default UseStateClassComponent

