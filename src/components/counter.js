import React, { Component } from 'react';
import WithCounter from './WithCounter';


class Counter extends Component {
   

    // this one method
    // incrementCounter= () =>{
    //     this.setState({
    //         counter : this.state.counter +1
    //     })
    // }
    
    // another method

    // incrementCounter = () =>{
    //     this.setState(prevState =>{
    //       return( 
    //           {counter : prevState.counter +1}
    //           )
    //     })
    // }
    render() {
        
        const {count , incrementcounter} = this.props
        return (
            <div className="text-center">
                <button onClick={incrementcounter}> {this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default WithCounter(Counter, 5)
