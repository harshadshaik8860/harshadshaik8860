import React, { Component } from 'react'

export class HoverCounter2 extends Component {
    render() {
        const {count , incrementcount} = this.props
        return (
            <div>
                <button onMouseOver={incrementcount}>Hover {count} times</button>
            </div>
        )
    }
}

export default HoverCounter2
