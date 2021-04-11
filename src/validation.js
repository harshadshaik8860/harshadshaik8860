import React , {Component} from 'react';

class Validation extends Component{
        constructor(){
            super();
            this.state = {
                fields:{},
                errors:{}
            }
           
        }
        processInput = (obj) =>{
            let fields = this.state.fields;
            fields[obj.target.name] = obj.target.value;
            this.setState({
              fields
            })
        
        }
        save = (obj) =>{
        obj.preventDefault();
        //console.log(this.state.fields);
        let status = true;
        let errors = this.state.errors;
        let fields = this.state.fields;
        if((!fields["fname"]) || (fields["fname"].length==0)){
            status = false;
            errors["nameerror"] = "Please Enter Your Name !";
        }else{
            errors["nameerror"] = "";
        }

        //mobile Validation start here

        let mpattern = /^[6-9]\d{9}$/;
        if((!fields["mobile"]) || (! mpattern.test(fields["mobile"])))
        {
            status = false;
            errors["mobileerror"] = "Please Enter 10 Digits Mobile No !";
        }else{
            errors["mobileerror"] = "";
        }

        //email validation start here
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if((!fields["email"]) || (! epattern.test(fields["email"])))
        {
            status = false;
            errors["emailerror"] = "Please Enter Valid Email Id !";
        }else{
            errors["emailerror"] = "";
        }
            // message
        if((!fields["message"]) || (fields["message"].length==0)){
            status = false;
            errors["messageerror"] = "Please Enter Min-20char's and Max-50 char's !";
        }
        else{ 
            if((fields["message"].length>=50)){
                status = false;
                errors["messageerror"] = "Please Enter Max-50 char's !";
            }else{

            errors["messageerror"] = "";    
            }
        }
         

        this.setState({
            errors:errors
        })

        if(status==true){
            alert("Form is Success ! Please wait Processing...")
        }
        }

        render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2 className="text-success text-center mt-3">Form Validation</h2>
                            <form action="#" method="POST" onSubmit={this.save}>

                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="fname" onChange={this.processInput}/>
                                    <i className="text-danger">{this.state.errors.nameerror}</i>
                                </div>

                                <div className="form-group">
                                    <label>Mobile </label>
                                    <input type="Mobile" 
                                    className="form-control"
                                    name="mobile" onChange={this.processInput}/>
                                    <i className="text-danger text-sm">{this.state.errors.mobileerror}</i>
                                </div>

                                <div className="form-group">
                                    <label>E-Mail</label>
                                    <input type="email" 
                                    className="form-control"
                                    name="email" onChange={this.processInput}/>
                                    <i className="text-danger text-sm">{this.state.errors.emailerror}</i>
                                </div>

                                <div className="form-group">
                                    <label>Messsage</label>
                                    <textarea 
                                    className="form-control"
                                    name="message" onChange={this.processInput}></textarea>
                                    <i className="text-danger text-sm">{this.state.errors.messageerror}</i>
                                </div>

                                <div className="text-center"><button className="btn btn-primary">Send Message
                                </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            )
        }
}

export default Validation;