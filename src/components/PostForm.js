
import React, { Component } from 'react';
import axios from 'axios';

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid : '',
             title:'',
             body: ''
        }
    }

    changeHandler = (obj) => {
        this.setState({ [obj.target.name] : obj.target.value });
    }

    submitHandler =(e)=>{
        e.preventDefault();
        let input = JSON.stringify(this.state.name);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response =>{
            console.log(response)
            this.setState({
                [e.target.name]:response.data})
        })
        .catch(error =>{
            console.log(error)
        })

    }
    
    render() {
        const {userid, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="userid" value={userid} onChange={this.changeHandler} />
                    <br/> <br/>
                    <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    <br/> <br/>
                    <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    <button type="submit">submit</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
