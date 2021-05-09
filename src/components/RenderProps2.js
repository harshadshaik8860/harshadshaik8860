import React, { Component } from 'react'

export class RenderProps2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            count :0
        }
    }

    incrementCounter = () =>{
        this.setState(prevState => {
            return(  {count : prevState.count +1} )
          
        })
    }
    render() {
        return (
            <div>
               {/* {this.props.children(this.state.count , this.incrementCounter)} */}
                {this.props.render(this.state.count , this.incrementCounter)}
            </div>
        )
    }
}

export default RenderProps2
