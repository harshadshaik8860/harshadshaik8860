import React, { Component } from 'react';

export class Counter2 extends Component {
    render() {
        const {count , incrementcount} = this.props
        return (
            
            <div>
                 <button onClick={incrementcount}>Clcik {count} times</button>
            </div>
        )
    }
}

export default Counter2
