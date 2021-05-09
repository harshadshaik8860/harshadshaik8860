import React, { Component } from 'react';
import WithCounter from './WithCounter';

class hovercounter extends Component {
    
    
    render() {
       const {count , incrementcounter} = this.props
        return (
            <div className="text-center">
                <h2 onMouseOver={incrementcounter}>Hovered {count}Times</h2>
            </div>
        )
    }
}

export default WithCounter(hovercounter , 10)
