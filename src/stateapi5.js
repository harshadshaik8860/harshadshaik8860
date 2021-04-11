import React , {Component} from 'react';
import axios from 'axios';

class StateApiFive extends Component{
        constructor(){
            super();
            this.state ={
                contactlist:[],
                fullname: '',
                mobile:'',
                emailid:'',
                msg:''
            }
        }

        processName = (obj) =>{
            this.setState({
                fullname:obj.target.value
            })
        }

        processEmail = (obj) =>{
            this.setState({
                emailid:obj.target.value
            })
        }

        processMobile = (obj) =>{
            this.setState({
                mobile:obj.target.value
            })
        }

        saveData =() =>{
            this.setState({
                msg : "please wait Processing...",
                contactlist : []
            })
            let url="http://firstenquiry.com/api/react/crud/save.php";
                let input = new FormData();
                input.append("name", this.state.fullname);
                input.append("mobile", this.state.mobile);
                input.append("email", this.state.emailid);
                axios.post(url , input).then(response=>{
                    this.setState({
                        msg : response.data,
                            fullname :'',
                            emailid:'',
                            mobile:''
                    })
                    this.getContact(); // to reload the list after saving data
                })
            }

            deleteRecord =(recordid) =>{
                this.setState({
                    msg : "please wait Processing...",
                    contactlist : []
                })
                let url="http://firstenquiry.com/api/react/crud/delete.php";
                    let input = new FormData();
                    input.append("id", recordid);
                    axios.post(url , input).then(response=>{
                        this.setState({
                            msg : response.data.status
                               
                        })
                        this.getContact(); // to reload the list after saving data
                    })
                }
    
        getContact =() =>{
            let url="http://firstenquiry.com/api/react/crud/list.php";
        axios.get(url).then(response=>{
            if(response.data.length>0){
            this.setState({
                contactlist:response.data
            })
        }
        })
    }
  
    componentDidMount(){
        this.getContact();
    }

   render(){
       return(
           <div className="container">
               <div className="row">
                   <div className="col-md-3"> 
                    <div className="bg-light p-3">
                        <h3>Add Record</h3>
                        <div className="form-group">
                            <label> Full Name </label>
                            <input type="text" className="form-control"
                            onChange={this.processName}
                            value={this.state.fullname}/>
                        </div>

                        <div className="form-group">
                            <label> Mobile </label>
                            <input type="mobile" className="form-control"
                            onChange={this.processMobile}
                            value={this.state.mobile}/>
                        </div>

                        <div className="form-group">
                            <label> email </label>
                            <input type="email" className="form-control"
                            onChange={this.processEmail}
                            value={this.state.emailid}/>
                        </div>

                        <button className="btn btn-primary btn-block" onClick={this.saveData}> Save Record</button>
                    </div>
                   </div>
                   <div className="col-md-9 text-center">
                       <h3> Available Records -: {this.state.contactlist.length}</h3>
                       <p className="text-danger text-center">{this.state.msg}</p>
                       <table className="table table-bordered table-sm">
                           <thead>
                               <tr className="text-primary text-center">
                                   <th> Action </th>
                                   <th> Name </th>
                                   <th> Mobile </th>
                                   <th> E-Mail </th>
                               </tr>
                           </thead>
                           <tbody className="text-center">
                               {
                                   this.state.contactlist.map((row ,index)=>{
                                       return(
                                           <tr key={index}>
                                               <td><button className="btn btn-danger btn-sm" onClick={this.deleteRecord.bind(this , row.id)}> Delete</button></td>
                                               <td>{row.name}</td>
                                               <td>{row.mobile}</td>
                                               <td>{row.email}</td>
                                           </tr>
                                       )
                                   })
                               }
                           </tbody>

                       </table>
                   </div>
               </div>
           </div>
       )
   }     
}
export default  StateApiFive;