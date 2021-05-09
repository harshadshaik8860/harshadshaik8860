

import React, { Component } from 'react'
import axios from 'axios';
export class HTTPGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             List : [],
             error: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({
                List :response.data
            })
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                error:"error retriving data"
            })
        })
    }
    
    render() {
        const {List ,error}=this.state
        return (
            <div>
                <h1>List of names</h1>
                {
                    List.length ?
                    List.map((lists , index)=>{
                        return(
                            <p key={List.id}>{lists.title}</p>
                        )
                    }): null
    }      
    {
        error?
        <div>{error}</div>: null
    }
            </div>
        )
    }
}

export default HTTPGet
