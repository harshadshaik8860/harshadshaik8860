import React  , {Component} from 'react';
import axios from 'axios';

class StateApiFive extends Component{
    constructor(){
        super();
        this.state = {
            contactlist:[],
            fullname:'',
            emailid:'',
            mobileno:'',
            msg:''
        }
    }

    processName = (obj)=>{
        this.setState({
            fullname:obj.target.value
        })
    }

    processEmail = (obj)=>{
        this.setState({
            emailid:obj.target.value
        })
    }

     processMobile = (obj)=>{
        this.setState({
            mobileno:obj.target.value
        })
    }

    save = () =>{
        let url ="http://firstenquiry.com/api/react/crud/save.php";
        let input = new FormData();
        input.append("name", this.state.fullname);
        input.append("email", this.state.emailid);
        input.append("mobile", this.state.mobileno);
        axios.post(url , input).then(response=>{
            this.setState({
                msg : response.data 
            })
            this.getContact(); // to reload the list after saving the data
        })
    }

    getContact = () =>{
        let url ="http://firstenquiry.com/api/react/crud/list.php";
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
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-light p-3">
                            <h3> Add Record </h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control"
                                onChange={this.processName}
                                value={this.state.fullname}/>
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control"
                                onChange={this.processMobile}
                                value={this.state.mobileno}/>
                            </div>
                            <div className="form-group">
                                <label>e-Mail</label>
                                <input type="text" className="form-control"
                                onChange={this.processEmail}
                                value={this.state.emailid}/>
                            </div>
<button className="btn btn-primary btn-block" onClick={this.save}>Save Record</button>
                        </div>
                    </div>
                    <div className="col-md-9 text-center">
                        <h3> Available Records -: {this.state.contactlist.length} </h3>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr className="text-center text-primary">
                                    <th> Record Id </th>
                                    <td> Name </td>
                                    <th> Mobile </th> 
                                    <th> E-Mail </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contactlist.map((row , index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{row.id}</td>
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
export default StateApiFive;