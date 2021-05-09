import React , {Component} from 'react';

const WithCounter = (WrappedComponent, incremenntNumber) =>{
    class NewComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        incrementCounter = () =>{
            this.setState(prevState =>{
                return (
                    {count : prevState.count + incremenntNumber}
                )
            })
        }
        render(){
            console.log(this.props.name);
            return(
                <WrappedComponent incrementcounter={this.incrementCounter} count={this.state.count}
                {...this.props}/>
            )
        }
    }
    return (NewComponent)
}
export default WithCounter;